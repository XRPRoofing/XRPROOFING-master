import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");
  const baseUrl = requestUrl.origin;

  if (error) {
    return NextResponse.redirect(`${baseUrl}/crm/calendar?google_calendar=error`);
  }

  if (!code) {
    return NextResponse.redirect(`${baseUrl}/crm/calendar?google_calendar=missing_code`);
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.redirect(`${baseUrl}/crm/calendar?google_calendar=missing_env`);
  }

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenResponse.ok) {
    return NextResponse.redirect(`${baseUrl}/crm/calendar?google_calendar=token_error`);
  }

  const tokenData = await tokenResponse.json() as { access_token?: string; refresh_token?: string; expires_in?: number };
  const response = NextResponse.redirect(`${baseUrl}/crm/calendar?google_calendar=connected`);

  if (tokenData.access_token) {
    response.cookies.set("google_calendar_access_token", tokenData.access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: tokenData.expires_in || 3600,
      path: "/",
    });
  }

  if (tokenData.refresh_token) {
    response.cookies.set("google_calendar_refresh_token", tokenData.refresh_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
  }

  return response;
}

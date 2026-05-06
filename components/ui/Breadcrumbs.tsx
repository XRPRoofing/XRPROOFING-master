import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          <li>
            <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-orange-500 transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              {item.href ? (
                <Link href={item.href} className="text-gray-500 hover:text-orange-500 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

import Link from "next/link";
import { BreadcrumbItem } from "../../../interfaces";

interface Props {
  items: BreadcrumbItem[];
  lastItem?: BreadcrumbItem;
}

export const Breadcrumb = ({ items, lastItem }: Props) => {
    return (
        <nav className="flex items-center">
          {items.map(({ name, url }, i) => (
            <span key={name} className="flex items-center">
              <Link
                href={url}
                className={
                  items.length === i + 1 && !lastItem ? "font-semibold" : ""
                }
              >
                {name}
              </Link>
              {(items.length !== i + 1 || lastItem) && (
                <span className="mx-2 flex items-center">
                  /
                </span>
              )}
            </span>
          ))}
          {lastItem && (
            <span className="flex items-center">
              <Link
                href={lastItem.url}
                className="font-semibold line-clamp-1"
              >{lastItem.name}</Link>
            </span>
          )}
        </nav>
    );
}
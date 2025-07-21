import Link from "next/link";
import { BreadcrumbItem } from "../../../interfaces";
import { Poppins } from "next/font/google";

interface Props {
  title: string;
  items: BreadcrumbItem[];
  lastItem?: BreadcrumbItem;
}

const poppins = Poppins({
  variable: "--font-poppins-var",
  weight: "200"
});

export const Breadcrumb = ({ title, items, lastItem }: Props) => {
    return (
      <nav className="mb-2">
        <h2 className={`${poppins.className} text-2xl font-bold`}>{title}</h2>
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
      </nav>
    );
}
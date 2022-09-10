import React from "react";
import "./breadcrumb.css";

type Props = {
  pages: Array<{
    link: string;
    name: string;
    isCurrent: boolean;
  }>;
};

export const Breadcrumb: React.FC<Props> = ({ pages }) => {
  const createOverrideProps = (
    condition: boolean,
    attribute: { [key: string]: any }
  ): typeof attribute | { [key: string]: never } => {
    if (condition) {
      return attribute;
    }
    return {};
  };

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        {pages.map((page, i) => {
          const listOverrideProps = createOverrideProps(page.isCurrent, {
            "aria-current": "page",
          });
          const anchorOverrideProps = createOverrideProps(page.isCurrent, {
            style: {
              textDecoration: "none",
              fontWeight: "700",
              color: "black",
            },
          });
          return (
            <li key={i} {...listOverrideProps}>
              <a href={page.link} {...anchorOverrideProps}>
                {page.name}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

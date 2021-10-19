import React from "react";
import { cx } from "../../aliases";

type YuckyMenuItem = {
  id: string;
  label: string;
};

export type YuckyMenuProps = {
  containerClassName?: string;
  header?: React.ReactNode;
  headerClassName?: string;
  selected: string;
  items: YuckyMenuItem[];
  itemLabelClassName?: string;
  activeItemClassName?: string;
  onSelect?: (id: string) => void;
};

export const YuckyMenu: React.FC<YuckyMenuProps> = ({
  containerClassName,
  header,
  headerClassName,
  items,
  itemLabelClassName,
  activeItemClassName,
  selected,
  onSelect,
}) => {
  return (
    <ul
      role="menu"
      className={cx(
        "inline-block",
        "rounded-xl",
        "overflow-hidden",
        "shadow-md",
        "border-2",
        "border-gray-100",
        containerClassName
      )}
    >
      {typeof header === "string" ? (
        <header className={cx("text-xl", "p-2", "font-bold", headerClassName)}>
          {header}
        </header>
      ) : (
        header
      )}
      {items.map((item) => (
        <li
          key={item.id}
          role="menuitem"
          onClick={() => onSelect?.(item.id)}
          className={cx(
            "p-2",
            "cursor-pointer",
            itemLabelClassName,
            item.id === selected && [
              "bg-gray-100",
              "font-bold",
              activeItemClassName,
            ]
          )}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

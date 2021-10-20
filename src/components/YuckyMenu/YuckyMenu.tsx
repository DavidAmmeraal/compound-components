import React from "react";
import { cx } from "../../aliases";

export type YuckyMenuItem = {
  id: string;
  label: string;
};

export type YuckyMenuProps = {
  selected: string;
  items: YuckyMenuItem[];
  onSelect?: (id: string) => void;
};

export const YuckyMenu: React.FC<YuckyMenuProps> = ({
  items,
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
        "border-gray-100"
      )}
    >
      {items.map((item) => (
        <li
          key={item.id}
          role="menuitem"
          onClick={() => onSelect?.(item.id)}
          className={cx(
            "p-2",
            "cursor-pointer",
            item.id === selected && ["bg-gray-100", "font-bold"]
          )}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

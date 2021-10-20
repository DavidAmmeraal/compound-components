import React from "react";
import { cx } from "../../aliases";
import Separator from "../Separator";
import { YuckyMenuItem } from "./YuckyMenu";

export type CustomYuckyMenuItem =
  | (YuckyMenuItem & {
      type?: "switch" | "item";
    })
  | { type?: "separator" };

export type CustomYuckyMenuProps = {
  containerClassName?: string;
  header?: string;
  headerClassName?: string;
  selected: string;
  items: CustomYuckyMenuItem[];
  itemClassName?: string;
  activeItemClassName?: string;
  onSelect?: (id: string) => void;
};

const CustomYuckyMenu: React.FC<CustomYuckyMenuProps> = ({
  containerClassName,
  header,
  headerClassName,
  items,
  itemClassName,
  activeItemClassName,
  selected,
  onSelect,
}) => {
  console.log("header classname = ", headerClassName);
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
      {header && (
        <header className={cx("text-xl", "p-2", "font-bold", headerClassName)}>
          {header}
        </header>
      )}
      {items.map((item, index) => {
        switch (item.type) {
          case "separator":
            return <Separator key={`separator_${index}`} />;
          case "item":
          case "switch":
            return (
              <li
                key={item.id}
                role="menuitem"
                onClick={() => onSelect?.(item.id)}
                className={cx(
                  "p-2",
                  "cursor-pointer",
                  "flex",
                  "justify-between",
                  "items-center",
                  itemClassName,
                  item.id === selected && [
                    "bg-gray-100",
                    "font-bold",
                    activeItemClassName,
                  ]
                )}
              >
                {item.label}
                {item.type === "switch" && (
                  <span
                    className={cx(
                      "inline-block",
                      "ml-5",
                      "w-5",
                      "h-5",
                      "rounded-full",
                      "bg-red-400",
                      selected === item.id && "bg-green-400"
                    )}
                  >
                    &nbsp;
                  </span>
                )}
              </li>
            );
        }
        return null;
      })}
    </ul>
  );
};

export default CustomYuckyMenu;

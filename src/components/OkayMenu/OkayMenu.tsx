import React from "react";
import { cx } from "../../aliases";
import { CssFC } from "../../types";
import OkayMenuItem from "./OkayMenuItem";

export type OkayMenuProps = {
  header?: React.ReactNode;
  headerClassName?: string;
  selected: string;
  children: React.ReactNode;
  itemLabelClassName?: string;
  activeItemClassName?: string;
  onSelect?: (id: string) => void;
};

export const OkayMenu: CssFC<OkayMenuProps> = ({
  className,
  style,
  header,
  headerClassName,
  children,
  selected,
  onSelect,
}) => {
  return (
    <ul
      role="menu"
      style={style}
      className={cx(
        "inline-block",
        "rounded-xl",
        "overflow-hidden",
        "shadow-md",
        "border-2",
        "border-gray-100",
        className
      )}
    >
      {typeof header === "string" ? (
        <header className={cx("text-xl", "p-2", "font-bold", headerClassName)}>
          {header}
        </header>
      ) : (
        header
      )}
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        if (child.type === OkayMenuItem) {
          return React.cloneElement(child, {
            ...child.props,
            __selected: selected === child.props?.id,
            __onSelect: () => onSelect?.(child.props?.id),
          });
        }
        return child;
      })}
    </ul>
  );
};

export default OkayMenu;

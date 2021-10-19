import React from "react";
import { cx } from "../../aliases";
import { CssFC } from "../../types";
import DeliciousMenuContext from "./DeliciousMenu.Context";

type DeliciousMenuProps = {
  selected: string;
  onSelect: (id: string) => void;
};

const DeliciousMenu: CssFC<DeliciousMenuProps> = ({
  className,
  style,
  selected,
  onSelect,
  children,
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
      <DeliciousMenuContext.Provider value={{ selected, onSelect }}>
        {children}
      </DeliciousMenuContext.Provider>
    </ul>
  );
};

export default DeliciousMenu;

import { useContext } from "react";
import { cx } from "../../aliases";
import { CssFC } from "../../types";
import DeliciousMenuContext from "./DeliciousMenu.Context";

export type DeliciousMenuItemProps = {
  id: string;
};

const DeliciousMenuItem: CssFC<DeliciousMenuItemProps> = ({
  id,
  className,
  style,
  children,
}) => {
  const { selected, onSelect } = useContext(DeliciousMenuContext);

  return (
    <li
      role="menuitem"
      data-selected={id === selected}
      onClick={() => onSelect?.(id)}
      className={cx(
        "p-2",
        "cursor-pointer",
        className,
        id === selected && ["bg-blue-100", "font-bold"]
      )}
      style={style}
    >
      {children}
    </li>
  );
};

export default DeliciousMenuItem;

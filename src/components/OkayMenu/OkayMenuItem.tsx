import { cx } from "../../aliases";
import { CssFC } from "../../types";

type OkayMenuItemProps = {
  id: string;
  activeClassName?: string;
  // these props are prefixed with __ to communicate they're not to be used.
  __selected?: boolean;
  __onSelect?: () => {};
};

const OkayMenuItem: CssFC<OkayMenuItemProps> = ({
  id,
  activeClassName,
  className,
  style,
  children,
  __selected,
  __onSelect,
}) => (
  <li
    key={id}
    role="menuitem"
    data-selected={__selected}
    style={style}
    onClick={() => __onSelect?.()}
    className={cx(
      "p-2",
      "cursor-pointer",
      __selected && ["bg-gray-100", "font-bold", activeClassName],
      className
    )}
  >
    {children}
  </li>
);

export default OkayMenuItem;

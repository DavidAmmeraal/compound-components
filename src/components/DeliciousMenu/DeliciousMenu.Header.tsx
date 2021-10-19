import { cx } from "../../aliases";
import { CssFC } from "../../types";

const DeliciousMenuHeader: CssFC = ({ className, style, children }) => {
  return (
    <header className={cx("text-xl p-2 font-bold", className)} style={style}>
      {children}
    </header>
  );
};

export default DeliciousMenuHeader;

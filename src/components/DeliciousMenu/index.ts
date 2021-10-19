import DeliciousMenu from "./DeliciousMenu";
import DeliciousMenuContext from "./DeliciousMenu.Context";
import DeliciousMenuHeader from "./DeliciousMenu.Header";
import DeliciousMenuItem from "./DeliciousMenu.Item";

export default Object.assign(DeliciousMenu, {
  Header: DeliciousMenuHeader,
  Item: DeliciousMenuItem,
  Context: DeliciousMenuContext,
});

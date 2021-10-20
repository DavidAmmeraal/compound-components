import { useContext, useState } from "react";
import { cx } from "../../aliases";
import DeliciousMenu from ".";
import { CssFC } from "../../types";
import "./style.css";
import Separator from "../Separator";

const CustomItem: CssFC<{ id: string }> = ({ children, ...rest }) => {
  const { selected } = useContext(DeliciousMenu.Context);
  return (
    <DeliciousMenu.Item {...rest} className="flex justify-between items-center">
      <span>{children}</span>
      <span
        className={cx(
          "inline-block",
          "ml-5",
          "w-5",
          "h-5",
          "rounded-full",
          "bg-red-400",
          selected === rest.id && "bg-green-400"
        )}
      >
        &nbsp;
      </span>
    </DeliciousMenu.Item>
  );
};

/**
 * Sweet!
 *
 * We improved the following:
 *
 * - We employed React Context API to be able to control state components > 1 level deep.
 *
 * - We created a nice grouping of components belonging to DeliciousMenu, providing auto completion!
 *
 * - We can control custom styling of items by either:
 *     - Wrapping DeliciousMenuItem inside another component and interacting with the context state.
 *     - Targeting data-selected attribute in css.
 *
 * - We can add a new component DeliciousMenu without touching it.
 *
 * - We greatly reduced the complexity of what was originaly YuckyMenu.
 *
 * - It's much easier to understand.
 *
 * @returns
 */
export const DeliciousStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Delicious Story</h1>
      <DeliciousMenu selected={selected} onSelect={setSelected}>
        <div>
          <DeliciousMenu.Header className="header">
            Some header
          </DeliciousMenu.Header>
          <DeliciousMenu.Item id="1" className="custom-item">
            Account
          </DeliciousMenu.Item>
          <Separator />
          <DeliciousMenu.Item id="2">Settings</DeliciousMenu.Item>
          <CustomItem id="3">Power</CustomItem>
        </div>
      </DeliciousMenu>
    </div>
  );
};

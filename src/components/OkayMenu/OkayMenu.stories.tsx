import { useState } from "react";
import OkayMenu, { OkayMenuItem } from ".";
import { cx } from "../../aliases";
import { CssFC } from "../../types";
import Separator from "../Separator";
import { OkayMenuItemProps } from "./OkayMenuItem";

import "./style.css";

/**
 * Hooray, this looks nicer, we improved:
 *
 * - Took out the responsibility of rendering the children out of YuckyMenu. Now we can
 *   easily target any item and apply custom styles to it.
 *
 * - We can easily target styling through a data-selected prop.
 *
 * - We can add any other component to this OkayMenu as a child, and it will also render.
 *
 * - We can change rendering behaviour of an item based on state by wrapping OkayMenuItem,
 *   and intercepting the __selected prop.
 *
 * There's still some stuff that doesn't work nice though:
 *
 * - We're still relying on the header prop to render a header.
 *
 * - There's still a lot of complexity inside OkayMenu, we need to check if a child has an ID prop,
 *   and use React.Children.map to clone the children.
 *
 * - The __selected props adds confusion as to the contract of the OkayMenuItem (is this something a develop should provide?)
 *
 * - There's also something else that can be demonstrated in NotSoOkayStory.
 *
 * - (There's some duplication in code, the only method of knowing OkayMenuItem is supposed to be used with
 *   OkayMenu is by interpreting the name/folder. Maybe there's a nicer method?)
 */

const CustomOkayMenuItem: CssFC<OkayMenuItemProps> = ({
  __selected,
  children,
  ...rest
}) => {
  return (
    <OkayMenuItem
      {...rest}
      __selected={__selected}
      className="flex justify-between items-center"
    >
      <span>{children}</span>
      <span
        className={cx(
          "inline-block",
          "ml-5",
          "w-5",
          "h-5",
          "rounded-full",
          "bg-red-400",
          __selected && "bg-green-400"
        )}
      >
        &nbsp;
      </span>
    </OkayMenuItem>
  );
};

export const OkayStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Okay story</h1>
      <OkayMenu header="Some header" selected={selected} onSelect={setSelected}>
        <OkayMenuItem id="1" className="item">
          Account
        </OkayMenuItem>
        <Separator />
        <OkayMenuItem id="2" className="custom-selected-style">
          Settings
        </OkayMenuItem>
        <CustomOkayMenuItem id="3">Power</CustomOkayMenuItem>
      </OkayMenu>
    </div>
  );
};

/**
 * This will not work.
 *
 * React.Children.map only works one level deep.
 *
 * Enter React Context API.
 *
 */
export const NotSoOkayStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Not so okay story</h1>
      <OkayMenu header="Some header" selected={selected} onSelect={setSelected}>
        <div>
          <OkayMenuItem id="1" className="item">
            Account
          </OkayMenuItem>
          <Separator />
          <OkayMenuItem id="2" className="custom-selected-style">
            Settings
          </OkayMenuItem>
          <CustomOkayMenuItem id="3">Power</CustomOkayMenuItem>
        </div>
      </OkayMenu>
    </div>
  );
};

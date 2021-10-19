import { useState } from "react";
import OkayMenu, { OkayMenuItem } from ".";
import Separator from "../Separator";

import "./style.css";

/**
 * Hooray, this looks nicer, we improved:
 *
 * - Took out the responsibility of rendering the children out of YuckyMenu. Now we can
 * easily target any item and apply custom styles to it.
 * - We can easily target styling through a data-selected prop.
 * - We can add any other component to this OkayMenu as a child, and it will also render.
 *
 * There's still some stuff that doesn't work nice though:
 *
 * - We're still relying on the header prop to render a header.
 * - There's still a lot of complexity inside OkayMenu. We're basically creating a tight coupling
 * between OkayMenu and OkayMenuItem.
 * - There's also something else that can be demonstrated in NotSoOkayStory.
 * - There's some duplication in code, the only method of knowing OkayMenuItem is supposed to be used with
 * OkayMenu is by interpreting the name/folder. Maybe there's a nicer method?
 */
export const OkayStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Okay story</h1>
      <OkayMenu header="Your menu" selected={selected} onSelect={setSelected}>
        <OkayMenuItem id="1">Account</OkayMenuItem>
        <Separator />
        <OkayMenuItem id="2">Settings</OkayMenuItem>
        <OkayMenuItem id="3" className="custom-style">
          Something custom
        </OkayMenuItem>
      </OkayMenu>
    </div>
  );
};

/**
 * This will not work.
 *
 * React.Children.map only works one level deep.
 *
 * If we want to control state for children that are more than one level deep, we have to revert
 * to prop drilling or try something else.
 *
 * Enter React Context API.
 *
 */
export const NotSoOkayStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Not so okay story</h1>
      <OkayMenu header="Your menu" selected={selected} onSelect={setSelected}>
        <div>
          <OkayMenuItem id="1">Account</OkayMenuItem>
          <OkayMenuItem id="2">Settings</OkayMenuItem>
        </div>
      </OkayMenu>
    </div>
  );
};

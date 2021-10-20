import { useState } from "react";
import { YuckyMenu } from "./YuckyMenu";
import "./style.css";
import CustomYuckyMenu, { CustomYuckyMenuItem } from "./CustomYuckyMenu";

const menu = [
  {
    id: "1",
    label: "Account",
  },
  {
    id: "2",
    label: "Settings",
  },
];

const customMenu: CustomYuckyMenuItem[] = [
  {
    type: "item",
    id: "1",
    label: "Account",
  },
  {
    type: "separator",
  },
  {
    type: "item",
    id: "2",
    label: "Settings",
  },
  {
    type: "switch",
    id: "3",
    label: "Power",
  },
];

/**
 * Yuck!!!
 *
 * There's several issues with this component:
 *
 * - What if we want to use something else then <li> as a list item?
 *
 * - If we want to customise rendering behaviour of the existing <li>’s like css or something
 *   depending component state, we would either to have to make this configurable.
 *
 * - What if I want to add another section to the Menu, for example a separator or a footer? Once
 *   again, I would have to define or modify a prop, and dive into the <NastyMenu /> component and further
 *   increase it’s complexity.
 *
 * Let's try...
 */
export const YuckyStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Yucky story</h1>
      <YuckyMenu items={menu} selected={selected} onSelect={setSelected} />
    </div>
  );
};

/**
 * Great, we refactored YuckyMenu (now in ./CustomYuckyMenu.tsx), we added support for:
 *
 * - A header.
 * - We can style the header through headerClassName.
 * - We can style the items through itemClassName and activeItemClassName.
 * - We can add a separator.
 * - We have a new type of item.
 *
 * But in order to facility this, we added a LOT of complexity to CustomYuckyMenu.
 *
 * We can do better.
 */
export const CustomYuckyStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Custom Yucky story</h1>
      <CustomYuckyMenu
        items={customMenu}
        header="Some header"
        headerClassName="header"
        itemClassName="item"
        activeItemClassName="activeItem"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
};

import { useState } from "react";
import { YuckyMenu } from "./YuckyMenu";
import "./style.css";

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

/**
 * Yuck!!!
 *
 * There's several issues with this component:
 *
 * - What if we want to use something else then <li> as a list item? We need to edit our
 *   configuration and dive into NastyMenu to support this. We could employ render props to
 *   tackle this issue, and defer this responsibility to the containing component,
 *   but this would require the necessity of another prop on <NastyMenu />.
 *   Also render props can also start containing a lot of conditional logic increasing
 *   complexity while reducing comprehensibility.
 *
 * - If we want to customise rendering behaviour of the existing <li>’s like css or something
 *   depending component state, we would either to have to make this configurable, or we would
 *   have to rely on a render prop again.
 *
 * - What if I want to add another section to the Menu, for example a separator or a footer? Once
 *   again, I would have to define another prop, and dive into the <NastyMenu /> component and further
 *   increase it’s complexity.
 *
 * - All the different prop names to support classnames for all different sections of the menu is ugly
 *   AF, and hard to comprehend.
 *
 * We can do better! (BTW, I'm not making this shit up, there's several components in our codebase that
 * employ this pattern)
 */
export const YuckyStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Yucky story</h1>
      <YuckyMenu
        header="Your menu"
        items={menu}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
};

export const CustomYuckyStory = () => {
  const [selected, setSelected] = useState("1");

  return (
    <div className="App h-screen flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-5">Custom Yucky story</h1>
      <YuckyMenu
        header="Your menu"
        headerClassName="customHeader"
        activeItemClassName="activeItem"
        items={menu}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
};

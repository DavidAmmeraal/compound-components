import { useState } from "react";
import { DeliciousStory } from "./components/DeliciousMenu/DeliciousMenu.stories";
import {
  NotSoOkayStory,
  OkayStory,
} from "./components/OkayMenu/OkayMenu.stories";
import {
  CustomYuckyStory,
  YuckyStory,
} from "./components/YuckyMenu/YuckyMenu.stories";

const stories = {
  YuckyStory,
  CustomYuckyStory,
  OkayStory,
  NotSoOkayStory,
  DeliciousStory,
};

type StoryKey = keyof typeof stories;

const App = () => {
  const [activeStory, setActiveStory] = useState<StoryKey>("YuckyStory");

  const Story = stories[activeStory];

  return (
    <div>
      <select
        onChange={(event) => setActiveStory(event.target.value as StoryKey)}
      >
        {Object.keys(stories).map((name) => (
          <option value={name} selected={name === activeStory}>
            {name}
          </option>
        ))}
      </select>
      <Story />
    </div>
  );
};

export default App;

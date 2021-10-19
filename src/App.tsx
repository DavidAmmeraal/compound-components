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
  a: YuckyStory,
  b: CustomYuckyStory,
  c: OkayStory,
  d: NotSoOkayStory,
  e: DeliciousStory,
};

// Amazing method of selecting an active story.
const activeStory = "e";

const App = () => {
  const Story = stories[activeStory];
  return (
    <div>
      <Story />
    </div>
  );
};

export default App;

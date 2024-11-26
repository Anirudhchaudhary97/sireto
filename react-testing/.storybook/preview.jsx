/** @type { import('@storybook/react').Preview } */
// .storybook/preview.js
import '../src/index.css'
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

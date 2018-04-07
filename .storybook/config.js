import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options'

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
})

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src", true, /\.story\.js?$/));
}

configure(loadStories, module);

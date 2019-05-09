import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { addParameters } from '@storybook/react';


addDecorator(
  withOptions({
    name: 'decentraland-ui',
    url: 'https://github.com/decentraland/ui',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
    enableShortcuts: false // true by default
  })
);

// this is to make storyshots work (and jest in general) because it lacks webpack's require.context function
// if (!require.context) {
//   require.context = (directory, useSubdirectories, regExp = /^\.\//) =>
//     __requireContext('.storybook', directory, useSubdirectories, regExp)
// }

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.tsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

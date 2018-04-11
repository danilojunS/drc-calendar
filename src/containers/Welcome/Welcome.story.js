import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Welcome from '.'

Vue.component('welcome', Welcome)

storiesOf('Containers|Welcome', module)
  .add('default', () => ({
    template: '<welcome></welcome>'
  }))

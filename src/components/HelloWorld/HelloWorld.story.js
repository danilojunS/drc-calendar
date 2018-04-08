import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import HelloWorld from '.'

Vue.component('hello-world', HelloWorld)

storiesOf('HelloWorld|HelloWorld', module)
  .add('default', () => ({
    template: '<hello-world></hello-world>'
  }))

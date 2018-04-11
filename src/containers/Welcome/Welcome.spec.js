import Vue from 'vue'
import Welcome from '.'

describe('Welcome.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to DRC Calendar App!')
  })
})

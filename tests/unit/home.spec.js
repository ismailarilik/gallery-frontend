import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
// Import BootstrapVue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import sinon from 'sinon'
import axios from 'axios'

const localVue = createLocalVue()
// Use BootstrapVue
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Home.vue', () => {
  before(() => {
    const expectedResponse = ['image1', 'image2', 'image3']
    sinon.stub(axios, 'get').resolves(Promise.resolve(expectedResponse))
  })

  it('has upload form row which is aligned to the right', () => {
    const wrapper = mount(Home, {
      localVue
    })
    const formRow = wrapper.findComponent({ ref: 'upload-form-row' })
    expect(formRow.classes('justify-content-end')).to.be.ok
  })

  it('has upload form row which has right margin', () => {
    const wrapper = mount(Home, {
      localVue
    })
    const formRow = wrapper.findComponent({ ref: 'upload-form-row' })
    expect(formRow.classes('my-4')).to.be.ok
  })

  it('has images row which is aligned to the center', () => {
    const wrapper = mount(Home, {
      localVue
    })
    const imagesRow = wrapper.findComponent({ ref: 'images-row' })
    expect(imagesRow.classes('justify-content-center')).to.be.ok
  })

  it('has images row which has right margin', () => {
    const wrapper = mount(Home, {
      localVue
    })
    const imagesRow = wrapper.findComponent({ ref: 'images-row' })
    expect(imagesRow.classes('mb-3')).to.be.ok
  })
})

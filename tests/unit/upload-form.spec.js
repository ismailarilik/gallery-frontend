import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import UploadForm from '@/components/UploadForm.vue'
// Import BootstrapVue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const localVue = createLocalVue()
// Use BootstrapVue
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('UploadForm.vue', () => {
  it('has the form which has multipart/form-data enctype', () => {
    const enctype = 'multipart/form-data'
    const wrapper = mount(UploadForm, {
      localVue
    })
    const form = wrapper.findComponent({ ref: 'upload-form' })
    expect(form.attributes().enctype).to.equal(enctype)
  })

  it('has right text', () => {
    const text = 'Dosya seç veya buraya sürükle'
    const wrapper = mount(UploadForm, {
      localVue
    })
    expect(wrapper.text()).to.equal(text)
  })
})

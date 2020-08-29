<template>
  <div class="home">
    <b-container fluid>
      <b-row align-h="end">
        <b-col cols="auto">
          <upload-form />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col v-for="image in images" xl="2" md="3" xs="4" :key="image">
          <b-img-lazy :src="getImageUrl(image)" fluid></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import UploadForm from '@/components/UploadForm.vue'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

export default {
  name: 'Home',
  data () {
    return {
      files: [],
      images: []
    }
  },
  methods: {
    getImageUrl (image) {
      return `http://localhost:3000/${image}`
    }
  },
  async created () {
    const response = await http.get('/images')
    this.images = response.data
  },
  components: {
    UploadForm
  }
}
</script>

<template>
  <div class="home">
    <b-container fluid>
      <b-row align-h="end">
        <b-col cols="auto">
          <b-form enctype="multipart/form-data">
            <b-form-file
              v-model="files"
              @input="onSubmit"
              :state="Boolean(files.length)"
              browse-text="Göz at..."
              placeholder="Dosya seç veya buraya sürükle"
              drop-placeholder="Dosyayı buraya sürükle"
              :capture="true"
              multiple>
            </b-form-file>
          </b-form>
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
    },
    async onSubmit () {
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]

        const formData = new FormData()
        formData.append('file', file)

        try {
          const response = await http.post('/upload', formData)
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  async created () {
    const response = await http.get('/images')
    this.images = response.data
  }
}
</script>

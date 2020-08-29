<template>
  <div class="home">
    <b-container fluid>
      <b-row align-h="end">
        <b-col cols="auto">
          <b-form-file
            v-model="files"
            :state="Boolean(files.length)"
            browse-text="Göz at..."
            placeholder="Dosya seç veya buraya sürükle"
            drop-placeholder="Dosyayı buraya sürükle"
            :capture="true"
            multiple>
          </b-form-file>
        </b-col>
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
    }
  },
  async created () {
    const response = await http.get('/images')
    this.images = response.data
  }
}
</script>

<template>
  <div class="upload-form">
    <!-- The form for file upload button -->
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
  </div>
</template>

<script>
import axios from 'axios'

const http = axios.create({
  // Base URL of the server
  baseURL: 'http://localhost:3000/'
})

export default {
  name: 'UploadForm',
  data () {
    return {
      // Files to upload
      files: []
    }
  },
  methods: {
    getImageUrl (image) {
      return `http://localhost:3000/${image}`
    },
    async onSubmit () {
      // Submit images one by one
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]

        const formData = new FormData()
        formData.append('file', file)

        try {
          // Upload the image
          const response = await http.post('/images', formData)
          console.log(response)
        } catch (err) {
          // Log errors
          console.log(err)
        }
      }
    }
  }
}
</script>

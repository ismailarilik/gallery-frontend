<template>
  <div class="home">
    <b-container fluid>
      <b-row align-h="end">
        <b-col cols="auto">
          <b-form-file
            v-model="files"
            accept="image/*"
            :state="Boolean(files.length)"
            browse-text="Göz at..."
            placeholder="Dosya seç veya buraya sürükle"
            drop-placeholder="Dosyayı buraya sürükle"
            :capture="true"
            multiple>
          </b-form-file>
        </b-col>
        <b-col cols="auto">
          <b-form-file
            v-model="file"
            :capture="true">
          </b-form-file>
          <!-- <b-button>Kameradan yükle...</b-button> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      files: [],
      file: null
    }
  }
}
</script>

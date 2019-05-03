<template>
  <b-jumbotron class="text-left">
    <template slot="header">
      Vue Challenge
    </template>

    <template slot="lead">
      Autor: Denis Ibanez
    </template>
    
    <p>Clique para incluir uma coluna</p>

    <button class="btn btn-primary add" @click="addCollum()">Adicionar Coluna</button>
  </b-jumbotron>
</template>
<script>
import { mapGetters } from 'vuex'
let collumId = 0
export default {
  name: 'app-header',

  computed: {
    ...mapGetters([
      'group'
    ])
  },

  created () {
    this.addCollum()
  },

  methods: {
    addCollum () {
      let item = { list: [], text: '', validate: 'required', name: 'list' + collumId++ }
      this.$store.commit('updateCollumGroup', item)
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  h3 {
    margin: 0;
  }
}
</style>


<template>
  <div class="row mg-25">
    <div class="col-md-12">
      <draggable class="list-group" :list="item.list" draggable=".item" group="a">        
        <div class="list-group-item item" v-for="(element, key) in item.list" :key="key">
          <div class="row">
            <div class="col-6 col-md-8 text-left">{{ element.name }} <b-badge>{{ element.id }}</b-badge></div>
            <div class="col-6 col-md-4 text-right"><span class="excluir btn btn-primary" @click="del(element, key, index)">X</span></div>
          </div>
        </div>

        <div slot="footer" class="btn-group list-group-item" role="group" aria-label="footer">
          <div v-if="!item.list.length">
            <b-alert show variant="warning">A lista está vazia, por favor adicione um item.</b-alert>
          </div>
          <div>
            <button class="btn btn-primary excluir mg-25" @click="delCollum(index)">Excluir coluna</button>
          </div>
        </div>         
      </draggable>          
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'draggable-element',

  components: {
    draggable
  },

  props: {
    item: { default: {} },
    index: { default: Number() }
  },

  methods: {
    del: function(element, key, arr) {
      this.$store.commit('delItem', { arr: arr, key: key })
    },

    delCollum(index) {
      this.$store.commit('delCollum', index)
    }
  }
}
</script>

<style scoped lang="scss">
</style>



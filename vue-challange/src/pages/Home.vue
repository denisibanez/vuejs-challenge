<template>
  <div class="container" id="vueChallenge">
    <div class="row">
      <div class="col-12">
        <h1>Vue Challange - Gerenciador de Tarefas</h1>
      </div>
    </div>

    <div class="row">
       <draggable v-for="(list, arr) in group" :key="arr" :list="list" class="list-group col-4" draggable=".item" group="a">
        <div class="list-group-item item" v-for="(element, key) in list" :key="key">
          <div class="row">
            <div class="col-8 text-left">{{ element.name }}</div>
            <div class="col-4 text-right"><span class="excluir btn btn-primary" @click="del(element, key, arr)">Excluir</span></div>
          </div>
        </div>

        <div slot="footer" class="btn-group list-group-item" role="group" aria-label="footer">
          <button class="btn btn-secondary" @click="add(arr)">Add</button>
          <button class="btn btn-secondary" @click="replace(arr)">Replace</button>
        </div>

        <div v-if="!list.length">A lista está vazia, por favor adicione um item.</div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
let id = 1
export default {
  name: 'Home',

  components: {
    draggable
  },
  
  data() {
    return {
      group: {
         list: [],
         list2: []
      }
    };
  },

  methods: {
    add: function(arr) {
      this.group[arr].push({ name: "item " + id, id: id++ })
    },

    del: function(element, key, arr) {
      this.$delete(this.group[arr], key)
    },

    replace: function(arr) {
      this.group[arr] = [{ name: "Edgard", id: id++ }]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    margin: 0 0 50px;
  }

  .excluir {
    cursor: pointer;
  }
}
</style>


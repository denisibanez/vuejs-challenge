<template>
  <div class="row item">
    <div class="col-md-4" v-for="(item, index) in group" :key="index">
      <div class="row">
        <div class="col-md-12">
          <h3> Lista de Tarefas - <b-badge>{{ index + 1 }}</b-badge></h3>
        </div>
      </div>

      <add-item @resetText="onResetText(item)" :item="item" :index="index"></add-item>

      <order-item :index="index"></order-item>

      <draggable-element :item="item" :index="index"></draggable-element>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AddItem from '@/components/CollumItem/AddItem'
import OrderItem from '@/components/CollumItem/OrderItem'
import DraggableElement from '@/components/CollumItem/DraggableElement'

export default {
  name: 'collum-item',

  components: {
    AddItem,
    OrderItem,
    DraggableElement   
  },

  computed: {
    ...mapGetters([
      'group'
    ])
  },

  methods: {
    onResetText (item) {
      item.text = ''
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  .list-group {
    .order {
      margin-top:50px;
      cursor: pointer;
    }    
  }
}

@media (max-width:768px) {
  .order {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>

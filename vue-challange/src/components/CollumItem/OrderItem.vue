<template>
  <div class="row mg-25">
    <div class="col-12 col-md-6 text-right">
      <span class="order btn btn-primary" @click="order(index, 'id')">Ordenar por inclusão</span>
    </div>
    <div class="col-12 col-md-6 text-right">
      <span class="order btn btn-primary" @click="order(index, 'name')">Ordenar por alfabeto</span>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-item',

  props: {
    index: { default: Number() }
  },

  methods: {
    order (arr, param) {
      this.$store.dispatch('orderGroupList', { arr: arr, param: param })
    }
  }
}
</script>

<style scoped lang="scss">
</style>



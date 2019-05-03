<template>
  <div class="row mg-25">
    <div class="col-md-12 text-left" :class="{ 'erro-input' : errors.has(item.name) }">
      <b-input-group>
        <b-form-input 
          v-model="item.text" 
          placeholder="Digite a tarefa" 
          v-validate="item.validate" 
          :name="item.name"></b-form-input>
        <b-input-group-append>
          <button class="add btn btn-primary"  @click="add(index, item)">Add</button>
        </b-input-group-append>
      </b-input-group>
      <span class="erro-message" v-if="errors.has(item.name)"> O campo é obrigatório. </span>
    </div>
  </div>
</template>

<script>
let id = 1

export default {
  name: 'add-item',

  props: {
    item: { default: {} },
    index: { default: Number() }
  },

  methods: {
    add: function(arr, item) {
      let _self = this
      this.$validator.validate(item.name, item.text).then(result => {
        if (result) {
          let item = { obj: { name: _self.item.text + ' ', id: id++ }, arr: arr }
          this.$store.commit('updateArrayList', item)
          this.$emit('resetText', _self.item)
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
</style>



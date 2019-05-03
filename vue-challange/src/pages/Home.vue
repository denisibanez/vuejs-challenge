<template>
  <div class="container" id="vueChallenge">
    <div class="row">
      <div class="col-12">
        <h1>Vue Challange - Gerenciador de Tarefas</h1>
        <div class="row d-flex justify-content-end">
          <div class="col-3">
            <p>Clique para incluir uma coluna</p>
          </div>
          <div class="col-3">
            <button class="btn btn-primary" @click="addCollum()">Adicionar Coluna</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-4" v-for="(item, index) in group" :key="index">
        <div class="row mg-25">
          <div class="col-12 text-left" :class="{ 'erro-input' : errors.has(item.name) }">
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

        <div class="row mg-25">
          <div class="col-6 text-right">
            <span class="order btn btn-primary" @click="order(index, 'id')">Ordenar por inclusão</span>
          </div>
          <div class="col-6 text-right">
            <span class="order btn btn-primary" @click="order(index, 'name')">Ordenar por alfabeto</span>      
          </div>
        </div>

        <div class="row mg-25">
          <div class="col-12">
            <draggable class="list-group" :list="item.list" draggable=".item" group="a">        
              <div class="list-group-item item" v-for="(element, key) in item.list" :key="key">
                <div class="row">
                  <div class="col-8 text-left">{{ element.name }}</div>
                  <div class="col-4 text-right"><span class="excluir btn btn-primary" @click="del(element, key, index)">X</span></div>
                </div>
              </div>

              <div slot="footer" class="btn-group list-group-item" role="group" aria-label="footer">
                <div v-if="!item.list.length">A lista está vazia, por favor adicione um item.</div>
                <div v-else>
                  <button class="btn btn-primary excluir" @click="delCollum(index)">Excluir coluna</button>
                </div>
              </div>         
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
let id = 1
let collumId = 0
export default {
  name: 'Home',

  components: {
    draggable
  },
  
  data() {
    return {
      group: [{ list: [], text: '', validate: 'required', name: 'list' + collumId++ }]
    }
  },

  methods: {
    add: function(arr, item) {
      this.$validator.validate(item.name, item.text).then(result => {
        if (result) {
          this.group[arr].list.push({ name: item.text + ' ' + id, id: id++ })
          item.text = ''
        }
      })
    },

    del: function(element, key, arr) {
      this.$delete(this.group[arr].list, key)
    },

    order (arr, param) {
      this.group[arr].list = this.group[arr].list.sort(function (a, b) {
        var textA = a[param]
        var textB = b[param]
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      })
    },

    addCollum () {
      let item = { list: [], text: '', validate: 'required', name: 'list' + collumId++ }
      this.group.push(item)
    },

    delCollum(index) {
      this.group.splice(index,1)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    margin: 0 0 50px;
  }

  .list-group {
    .order {
      margin-top:50px;
    }
  }

  .add {
    cursor: pointer;
    background-color: green;
    border:0;
  }

  .order {
    cursor: pointer;
  }

  .erro-input {
    input {
      border: 1px solid red;
      
      &::placeholder {
        color: red;
      }
    }

     .erro-message {
       color: red;
       font-size: 12px;
     }
  }

  .excluir {
    cursor: pointer;
    background-color: red;
    border:0;
  }

  .mg-25 {
    margin: 25px 0;
  }
}
</style>


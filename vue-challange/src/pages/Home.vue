<template>
  <div class="container" id="vueChallenge">
    <div class="row">
      <div class="col-md-12">
        <app-header></app-header>
      </div>
    </div>

    <collum-item></collum-item>

    <div class="row mg-25" v-if="group.length == 0">
      <div class="col-md-12">
        <b-alert show variant="warning">
          Você não tem nenhuma coluna, por favor, adicione uma coluna.
        </b-alert>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '@/components/AppHeader'
import CollumItem from '@/components/CollumItem/CollumItem'

export default {
  name: 'Home',

  components: {
    AppHeader,
    CollumItem    
  },

  computed: {
    ...mapGetters([
      'group'
    ])
  }
}
</script>

<style lang="scss">
.container {
  .add {
    cursor: pointer;
    background-color: green;
    border:0;

    &:focus, &:hover {
      background-color: green;
    }
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

     &:focus, &:hover {
      background-color: red;
    }
  }

  .mg-25 {
    margin: 25px 0;
  }
}
</style>


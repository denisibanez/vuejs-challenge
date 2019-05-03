import Vue from 'vue'

export default {
  state: {
    group: []
  },

  mutations: {
    updateCollumGroup (state, param) {
      state.group.push(param)
    },

    updateArrayList (state, param) {
      state.group[param.arr].list.push(param.obj)
    },

    orderArrayList (state, param) {
      state.group[param.arr].list = param.obj
    },

    delCollum (state, index) {
      state.group.splice(index,1)
    },

    delItem(state, param) {
      Vue.delete(state.group[param.arr].list, param.key)
    }
  },

  actions: {
    orderGroupList(context, item) {
      let value = [] 
      value = context.rootGetters.group[item.arr].list.sort(function (a, b) {
        var textA = a[item.param]
        var textB = b[item.param]
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      })

      let param = { arr: item.arr, obj: value }

      context.commit('orderArrayList', param)
    }
  },

  getters: {
    group: state => {
      return state.group
    }
  }
}

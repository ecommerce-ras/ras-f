import { createStore } from 'vuex'

export default createStore({
  state: {

    frutas: [
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0},
      {nombre: 'Uva', cantidad: 0},
      {nombre: 'Coco', cantidad: 0}
    ]
  },
  getters: {
  },
  mutations: {

    aumentar(state, index) {
      state.frutas[index].cantidad++
    },

    clean(state) {
      state.frutas.forEach(e => {
        e.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})

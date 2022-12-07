<template lang="es">
    <div class="container">

    <h1> Frutas </h1>
        <ol class="list-group list-group-numbered">  
  <li v-for="(item, index) of arrayOrganiza" :key="item.id" @click="aumentar(index)"
  class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Nombre</div>
      {{item.nombre}}
    </div>
    <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
  </li>

  <button @click="clean()" type="button" class="btn btn-outline-primary">Limpiar</button>
 
</ol>
    </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: 'Listar',

    computed:{
        ...mapState(['frutas']),
        arrayOrganiza(){
            return this.frutas.sort((a, b) => b.cantidad - a.cantidad)
        }
    },

    methods: {
        ...mapMutations(['aumentar', 'clean'])
    },    
}
</script>


<style lang="es">
    
</style>
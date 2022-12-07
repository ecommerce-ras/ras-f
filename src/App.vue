<template>  
  <Cabeza/>
  <Person/>
  <!-- <Listar/> -->
  <Clientes/>
</template>

<script>

import Cabeza from "./components/Cabeza.vue";
import Person from './components/Person.vue';
import Listar from './components/Listar.vue';
import Clientes from './components/Clientes.vue';

export default {
  name: 'App',
  components: {
    Cabeza,
    Person,
    Listar,
    Clientes
  }
}
</script>

<style>


</style>

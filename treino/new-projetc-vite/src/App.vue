<template>
  <div>
    <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" target="_blank">
      <img src="/logo.png" class="logo" alt="SMSlogo" />
    </a>
  </div>
  <HelloWorld msg="Bem Vindo a SMS" />
  Quantidade de cliques é : 
  <button @click="counter.incrementar()">clique</button> {{ counter.count }}


</template>

<script setup>
import HelloWorld from './pages/HelloWorld.vue';
import { useCounterStore } from './use/useCounter';

const counter = useCounterStore();
</script>

<style scoped>l
.logo {
  height: 15em;
}

</style>

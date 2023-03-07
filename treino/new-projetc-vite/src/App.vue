<template>
  <div>
    <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/" target="_blank">
      <img src="/logo.png" class="logo" alt="SMSlogo" />
    </a>
  </div>
  <HelloWorld msg="Bem Vindo a SMS" />
  <h2><slot name="subtitle"></slot></h2>
</template>

<script setup>
import HelloWorld from './pages/HelloWorld.vue';

</script>

<style scoped>l
.logo {
  height: 15em;
}

</style>

<template>
    <div class="button">
        <button class="btn_login">{{ action }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const action = ref('Entrar');

</script> 

<style scoped>

.btn_login {
  width: 8rem;
  margin-top: 5%;
  background-color: rgb(55, 55, 160);
  font-weight: 700;
  font-size: 16px;
  color: #F1F1F1;
  padding:1rem;
  border: none;
  border-radius: 0.5rem;
  margin-right: 1rem;
}

.btn_login:hover {
  background-color: #F1F1F1;
  color: rgb(55, 55, 160);
  border: rgb(55, 55, 160) solid 1px;
}
.btn_saiba {
  width: 8rem;
  margin-top: 5%;
  background-color: rgb(18, 128, 245);
  font-weight: 700;
  font-size: 16px;
  color: #F1F1F1;
  padding:1rem;
  border: none;
  border-radius: 0.5rem;
}

.btn_saiba:hover {
  background-color: #F1F1F1;
  color: rgb(18, 128, 245);
  border: rgb(18, 128, 245) solid 1px;
}

</style>

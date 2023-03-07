<template>
    <div class="modals">
        <h3>Título Teste</h3>
        <p>Lorem ipsum dolor sit amer consectetur adipisicing elit.</p>
        <TesteButton  msg_button='Fechar Modal' @click="fecharModal()"></TesteButton>
    </div>

</template>

<script setup>
import TesteButton from '../components/TesteButton.vue';
// let btn_fechar = ref(true)

const fecharModal = () => {
//   mostrarModal.value = false;
//   btn_aqui.value = true;
}
 
</script>

<style scoped>

</style>
    

<template>
    <div class="modals">
        <h3>Título Teste</h3>
        <p>Lorem ipsum dolor sit amer consectetur adipisicing elit.</p>
        <TesteButton  msg_button='Fechar Modal' @click="$emit('fecharModal')"></TesteButton>
    </div>

</template>

<script setup>
import TesteButton from '../components/TesteButton.vue';
// let btn_fechar = ref(true)

const emit = defineEmits(['fecharModal'])
 
</script>

<style scoped>

</style>
    

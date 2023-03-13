<template>
    <div class="modals-dark">
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
.modals-dark {
    padding: 1rem;
    margin-top: 1rem;
    color: #F1F1F1;
    border-radius: 2rem;
    background-color: black;
    border: rgb(18, 128, 245) 0.2rem solid;
}

</style>
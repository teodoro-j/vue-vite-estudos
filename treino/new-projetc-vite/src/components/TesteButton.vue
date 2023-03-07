<template>
    <div class="button">
        <button class="btn_logar"> {{ msg_button }}
        </button>
    </div>
</template>

<script setup>
defineProps({
  msg_button: String,
})

</script> 

<style scoped>
.btn_logar {
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

.btn_logar:hover {
  background-color: #F1F1F1;
  color: rgb(55, 55, 160);
  border: rgb(55, 55, 160) solid 1px;
}

</style>
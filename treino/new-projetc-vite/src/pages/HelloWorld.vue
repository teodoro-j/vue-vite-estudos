<template> 
  <h1>{{ msg }}</h1>
    <RouterView></RouterView>
  <div class="campos" v-if="IsNotLogin">
    <div id="nome" class="campo_nome">
        <label>
        Nome:
        </label>
        <input id="user" v-model="nome_user" class="nome" placeholder="Nome Sobrenome">
    </div>
      <div class="campo_cpf">
        <label>
        CPF:
        </label>
        <input id="cpf" class="cpf" placeholder="XXX.XXX.XXX-XX">
      </div>
      <div class="campo_senha">
        <label>
        Senha:
        </label>
        <input id="senha" class="senha" placeholder="********" type="password">
        </div> 
        <div class="loading" v-if="isLoading">
          <span>Entrando Sr. {{ nome_user }}</span>
        </div> 
        <div class="error" v-if="error">
          <span>Preencha os campos corretamente</span>
        </div>
        <div class="botoes">
          <ButtonGeral v-on:click='login()'/>
          <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/"><button class="btn_saiba">{{ more }}</button></a>
        </div> 
        <Button v-on:click='$event => cadastrar()' msg_buttton="Cadastrar"></Button>
        <ModalTeste v-if="mostrarModal"/>
        <button v-if="btn_aqui" @click='showModal()'>aqui</button>
      </div>
    </template>

<script setup>
import { ref } from 'vue';
import ModalTeste from '../components/ModalTeste.vue';
import Button from '../components/Button.vue';
import ButtonGeral from '../components/ButtonGeral.vue';

const more = ref("Saiba +")
const nome_user = ref('')
let isLoading = ref(false)
let error = ref(false)
let IsNotLogin = ref(true)
let mostrarModal = ref(false)
let btn_aqui = ref(true)

const showModal = () => {
  mostrarModal.value = true;
  btn_aqui.value = false;
}

defineProps({
  msg: String,
})

function cadastrar() {
  IsNotLogin.value = false;
}

function login(){
let new_user = user.value;
let new_cpf = cpf.value;
let new_senha = senha.value;

  if(new_user !== '' && new_cpf !== '' && new_senha !== ''){
    isLoading.value = true;
    error.value = false;
    user.value = ``;
    cpf.value = ``;
    senha.value = ``;
  } else {
    error.value = true;
    isLoading.value = false;
    user.value = ``;
    cpf.value = ``;
    senha.value = ``;
  }
}


</script>

<style scoped>
.loading {
  background-color: rgba(71, 160, 55, 0.85);
  color: #F1F1F1;
  width: 100%;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error {
  background-color: rgba(200, 19, 19, 0.843);
  color: #F1F1F1;
  width: 100%;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.campos {
  display: flex;
  align-items: center;
  flex-direction: column;
  ;
}
.campo_nome, .campo_cpf, .campo_senha {
  width: 30%;
  color: rgb(55, 55, 160);
  font-weight: 700;
  margin-top: 2%;
  display: flex;
  justify-content: center;
}
.campo_senha {
  margin-bottom: 1rem;
}
.cpf {
  margin-left:1.5rem;
}

label {
  margin: 0 1rem 0 0;
  display: flex;
  align-items: center;
}

input {
  background-color: rgb(235, 235, 242);
  padding: 0.4rem;
  border-bottom-color: rgb(55, 55, 160);
  border-right-color: rgb(55, 55, 160);
  border-top: none;
  border-left: none;
  border-radius: 0.5rem;
  color: #242424 !important;
}

.botoes {
  display: flex;
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
  text-decoration: none;
}
.btn_saiba:hover {
  background-color: #F1F1F1;
  color: rgb(18, 128, 245);
  border: rgb(18, 128, 245) solid 1px;
}

</style>

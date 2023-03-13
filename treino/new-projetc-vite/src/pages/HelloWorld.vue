<template>
  <h1>{{ msg }}</h1>
  <RouterView></RouterView>
  <div class="campos" v-if="IsNotLogin">
    <div id="nome" class="campo_nome">
      <label> Nome: </label>
      <input
        id="user"
        v-model="nome_user"
        class="nome"
        placeholder="Nome Sobrenome"
      />
    </div>
    <div class="campo_cpf">
      <label> CPF: </label>
      <input id="cpf" class="cpf" placeholder="XXX.XXX.XXX-XX" />
    </div>
    <div class="campo_senha">
      <label> Senha: </label>
      <input id="senha" class="senha" placeholder="********" type="password" />
    </div>
    <div class="loading" v-if="isLoading">
      <span>Entrando Sr. {{ nome_user }}</span>
    </div>
    <div class="error" v-if="error">
      <span>Preencha os campos corretamente</span>
    </div>
    <div class="botoes">
      <ButtonGeral v-on:click="login()" />
      <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/"
        ><button class="btn_saiba">{{ more }}</button></a
      >
    </div>
    <label class="darkmode">Dark Mode?</label>
    <input 
    v-model="showDarkModal"
    type="checkbox" 
    />
    <Button v-on:click="($event) => cadastrar()"></Button>
    <component
      v-if="mostrarModal"
      :is="showDarkModal ? ModalTesteDark : ModalTeste"
      @fecharModal="
        mostrarModal = false;
        btn_aqui = true;
      "
    >
    </component>
    <button class="btn-aqui" v-if="btn_aqui" @click="showModal()">aqui</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Button from "../components/Button.vue";
import ModalTeste from "../components/ModalTeste.vue";
import ButtonGeral from "../components/ButtonGeral.vue";
import ModalTesteDark from "../components/ModalTesteDark.vue";

const more = ref("Saiba +");
const nome_user = ref("");
const isLoading = ref(false);
const error = ref(false);
const IsNotLogin = ref(true);
const mostrarModal = ref(false);
const btn_aqui = ref(true);
const showDarkModal = ref(false);

const showModal = () => {
  mostrarModal.value = true;
  btn_aqui.value = false;
};

defineProps({
  msg: String,
});

function cadastrar() {
  IsNotLogin.value = false;
}

function login() {
  let new_user = user.value;
  let new_cpf = cpf.value;
  let new_senha = senha.value;

  if (new_user !== "" && new_cpf !== "" && new_senha !== "") {
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
  color: #f1f1f1;
  width: 100%;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error {
  background-color: rgba(200, 19, 19, 0.843);
  color: #f1f1f1;
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
}
.campo_nome,
.campo_cpf,
.campo_senha {
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
  margin-left: 1.5rem;
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

.darkmode {
  font-size: 16px;
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
  color: #f1f1f1;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  text-decoration: none;
}
.btn_saiba:hover,
.btn-aqui:hover {
  background-color: #f1f1f1;
  color: rgb(18, 128, 245);
  border: rgb(18, 128, 245) solid 1px;
}

.btn-aqui {
  background-color: rgb(18, 128, 245);
  font-weight: 700;
  font-size: 16px;
  color: #f1f1f1;
  border: none;
  margin-top: 1rem;
}
</style>

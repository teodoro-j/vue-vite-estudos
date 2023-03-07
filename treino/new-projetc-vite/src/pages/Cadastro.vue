<template>
    <div>
        <h2 >Preencha os campos abaixo:</h2>
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
            <div class="campo_conf_senha">
                <label>
                Confirmar Senha:
                </label>
                <input id="conf-senha" class="conf-senha" placeholder="********" type="password">
            </div> 
            <div class="cadastrando" v-if="cadastro_realizado">
                <span>Realizando cadastro</span>
            </div>
            <TesteButton v-on:click='$event => validar()' msg_button="Login" ></TesteButton>
        </div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import TesteButton from '../components/TesteButton.vue';

const route = useRoute();
const router = useRouter();

const validar = () => {
    alert('Redirecionando')
    
    setTimeout(() => {
        router.push('/');
    }, 1000)
}
</script>

<style scoped>

label {
  margin: 0 1rem 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
  display: flex; 
}

.nome, .senha{
    margin-left: 5rem;
}

.cpf {
    margin-left: 6rem;
}

.campo_nome, .campo_cpf, .campo_senha, .campo_conf_senha{
  width: 100%;
  color: rgb(55, 55, 160);
  font-weight: 700;
  margin-top: 2%;
  display: flex;
}
</style>
<template>
    <div class="button">
        <button class="btn_cadastrar">
            <RouterLink to="/Cadastro" style="text-decoration: none;">
                <span>
                    cadastro
                </span>
            </RouterLink> 
        </button>
        <RouterView></RouterView>
    </div>
</template>

<script setup>

</script> 

<style scoped>
.btn_cadastrar {
    background-color: rgb(235, 235, 249);
    border-top: none;
    border-left: none;
    border-right: none;
    margin-top: 1.2rem;
}

span {
    font-size: small;
    color: rgb(55, 55, 160);
}

.btn_cadastrar:hover {
    background-color: rgb(55, 55, 160) !important;
}

span:hover {
    color: rgb(235, 235, 249);
}

</style>
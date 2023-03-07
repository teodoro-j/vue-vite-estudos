import Cadastro from '../pages/Cadastro.vue';
// import HelloWorld from '../pages/HelloWorld.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "HelloWorld",
  //   component: HelloWorld,
  // },
    {
      path: "/Cadastro",
      name: "Cadastro",
      component: Cadastro,
    }

]   
const router = createRouter({
        history: createWebHistory(),
        routes,
});
export default router;
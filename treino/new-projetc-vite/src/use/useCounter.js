// This is an example to use COMPOSABLE >>> 
// export function useCounter() {
//     count: 0;

//     const counterData = reactive({
//         count: 0,
//     });

//     const increaseCounter = () => {
//         counterData++;
//     }

//     return {
//     useCounter,
//     }
// }


import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
    }),
    actions: {
        incrementar() {
            this.count++;
        }
    }

})
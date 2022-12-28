
import { defineStore } from 'pinia' //引入pinia

// 这里官网是单独导出  是可以写成默认导出的  
// 官方的解释为大家一起约定仓库用use打头的单词 固定统一小仓库的名字不易混乱
export const useCar = defineStore("test", {
  state: () => {
    return ({
      msg: "pinia data",
      name: "bodomlake",
      age: 18
    }) 
  },
  getters: {
    double: (state) => state.age * 2,
  },
  actions: {
    doubleTheAge() {
      this.age *= 2;
    },
  },
})
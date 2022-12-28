<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <h1>useCar--{{store.msg}}----{{store.name}}--{{store.age}}--doubleAge--{{store.double}}</h1>
    <button @click="change1">修改store.name</button>
    <button @click="doubleAge">double the age</button>
    <button @click="reset">reset the data</button>
    <button @click="patch">patch function</button>
  </div>
</template>
<script setup>
  import { useCar } from "../store/index.js"; //将之前配置的pinia文件夹中的index.js文件引入
  import { storeToRefs } from "pinia";
  let store = useCar(); //接收
  console.log(store);

  const { name, double } = storeToRefs(store);

  const { doubleTheAge } = store;

  let change1 = () => {
    // 推荐用这种
    store.name = "changed data"; //修改pinia里面的数据
    // 而不是toRefs再去修改
    name.value = "refs-value-changed";
    //  double是 computedRef
    console.log(store.name, name, double);
  };

  const doubleAge = () => {
    // store.doubleTheAge();
    doubleTheAge();
  };

  let reset = () => {
    //重置
    store.$reset();
  };

  function patch() {
    //批量修改
    store.$patch({
      name: "changed data",
      age: 20,
      msg: "changed msg",
    });
  }
</script>
<style scoped>
button {
  display: block;
  margin: 5px auto;
}
</style>

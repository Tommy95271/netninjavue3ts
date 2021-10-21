<template>
  <p>{{ name }} - {{ age }}</p>
  <button @click="changeName('Zelda')">change name</button>
  <button @click="changeAge(20)">change age</button>
</template>
ㄑ
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      name: "link",
      age: 25 as number | string, // type assertion
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
      return name;
    },
    changeAge(age: number | string) {
      this.age = age;
      return age;
    },
  },
});
</script>

<style>
</style>

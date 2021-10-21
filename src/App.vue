<template>
  <p>{{ name }} - {{ age }}</p>
  <button @click="changeName('Zelda')">change name</button>
  <button @click="changeAge(20)">change age</button>
</template>
ㄑ
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    // const state = reactive({
    //   name: "link",
    //   age: 34 as number | string,
    // });
    // return { ...toRefs(state) };

    const name = ref("link");
    const age = ref<number | string>(25);

    return { name, age };
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

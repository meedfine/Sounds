<template>
  <div class="home">{{ Tips }}</div>
  <div>Count: {{ data.count }}</div>
  <button @click="add">Add</button>
</template>

<script lang="ts" setup>
import { reactive } from "@vue/reactivity";

const Tips = "Hello World";

const data = reactive({
  count: 1,
});

const add = () => {
  data.count++;
};
</script>

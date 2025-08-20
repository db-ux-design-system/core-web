<template>
  <div>
    <h3>Test v-model for DBCheckbox</h3>
    
    <!-- Current working syntax -->
    <DBCheckbox v-model:checked="checkedModel" name="test1">
      v-model:checked (currently working): {{ checkedModel }}
    </DBCheckbox>
    
    <!-- Desired syntax that should work -->
    <DBCheckbox v-model="directModel" name="test2">
      v-model (should work): {{ directModel }}
    </DBCheckbox>
    
    <!-- Testing both ways -->
    <div>
      <p>checkedModel: {{ checkedModel }}</p>
      <p>directModel: {{ directModel }}</p>
      <button @click="checkedModel = !checkedModel">Toggle checked model</button>
      <button @click="directModel = !directModel">Toggle direct model</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { DBCheckbox } from "../../../../../output/vue/src";

const checkedModel = ref(true);
const directModel = ref(false);
</script>
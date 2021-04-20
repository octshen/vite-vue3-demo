<template>
  <div>home</div>
  <p>change home page</p>
  <test />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Test from './Test.vue'

export default defineComponent({
  components: {
    Test,
  },
})
</script>
<style lang="scss"></style>

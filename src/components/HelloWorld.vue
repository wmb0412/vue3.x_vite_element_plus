<template>
  <h1>{{ msg }}</h1>

  <button @click="count++">count is: {{ count }}</button>
 
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    console.log('环境变量')
    console.log('import.meta.env.MODE',import.meta.env.MODE)
     console.log('import.meta.env.BASE_URL',import.meta.env.BASE_URL)
     console.log('import.meta.env.PROD',import.meta.env.PROD)
     console.log('import.meta.env.DEV',import.meta.env.DEV)
      console.log('import.meta.env.VITE_SOME_KEY',import.meta.env.VITE_SOME_KEY)
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

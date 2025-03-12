import { defineComponent, createApp } from 'vue'

const RootComponent = defineComponent({
  name: 'App',
  setup() {
    const currentDate = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })
    return { currentDate }
  },

  template: `<div>Сегодня {{ currentDate }}</div>`,
})

createApp(RootComponent).mount('#app')

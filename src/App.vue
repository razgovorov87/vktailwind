<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import AuthLayout from '@/layout/AuthLayout'
import MainLayout from '@/layout/MainLayout'
export default {


  computed: {
    layout() {
      if (this.$route.meta.layout) return this.$route.meta.layout + '-layout'
      else return 'auth-layout' 
    }
  },

  components: {AuthLayout, MainLayout}

}
</script>

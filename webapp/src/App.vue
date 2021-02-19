<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="body"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.body {
  padding-top:56px
}
</style>

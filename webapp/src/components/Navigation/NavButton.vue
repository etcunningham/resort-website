<template>
<b-link :to="to" class="nav-bar-button" :class="{'selected-line-bottom': isActive && selector==='bottom', 'selected-line-left': isActive && selector==='top'}">
  <div class="nav-bar-link mr-3 ml-3">
    <img v-for="src in srcs" :key="src" :src="require(`@/assets/${src}`)" class="nav-bar-icon mr-1"/>
    {{title}}
  </div>
</b-link>
</template>

<script>
export default {
  name: 'nav-button',
  props: [
    'srcs',
    'title',
    'to',
    'selector',
  ],
  computed: {
    isActive() {
      return this.$route.path === this.to;
    },
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-bar-button {
  display: flex;
  font-size: 15px;
  white-space: nowrap;
  align-items: center;
  height: 56px;
}

.nav-bar-link {
  display: flex;
  font-size: 15px;
  color: #ffffff;
  white-space: nowrap;
  align-items: center;
}

.nav-bar-button:hover {
  background-color: #0074A7;
}

.nav-bar-icon {
  max-height: 1.5em;
}

.selected-line-bottom {
  border-bottom: 3px solid white;
  padding-top: 3px;
}

.selected-line-left {
  border-left: 3px solid white;
  padding-right: 3px;
}
</style>

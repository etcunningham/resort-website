<template>
<div>
  <div class="navBar shadow">
    <div class="resortLogo mr-3 ml-3">
      Disney Resort
    </div>
    <div class="desktop-menu" v-if="!mobile">
      <nav-button v-for="button of buttons" :key="button.title"
        :title="button.title"
        :srcs="button.srcs"
        :to="button.to"
      />
    </div>
    <div class="mobile-menu" v-else>
      <nav-button @click.native="openCloseHamburgerMenu"
        :srcs="['icons/hamburger.png']"
        :selector="'bottom'"
      />
    </div>
  </div>
  <div v-if="menuVisible && mobile" class="sidebar-panel">
    <div class="sidebar-button-list">
      <nav-button @click.native="openCloseHamburgerMenu" v-for="button of buttons" :key="button.title"
        :title="button.title"
        :srcs="button.srcs"
        :to="button.to"
        :selector="'left'"
      />
    </div>
  </div>
</div>
</template>

<script>

import NavButton from '@/components/Navigation/NavButton';

export default {
  name: 'nav-bar',
  components: {
    NavButton,
  },
  data: () => ({
    screenWidth: 0,
    menuVisible: false,
    buttons: [
      {
        title: 'Home',
        to: '/',
        srcs: ['icons/home.png'],
      },
      {
        title: 'Parks',
        to: '/parks',
        srcs: ['icons/parks.png'],
      },
      {
        title: 'Hotels',
        to: '/hotels',
        srcs: ['icons/hotels.png'],
      },
      {
        title: 'Shopping & Dining',
        to: '/districts',
        srcs: ['icons/shopping.png', 'icons/dining.png'],
      },
      {
        title: 'Water Parks',
        to: '/water-parks',
        srcs: ['icons/water-parks.png'],
      },
    ],
  }),
  computed: {
    mobile() {
      return this.screenWidth < 850;
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    openCloseHamburgerMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style scoped>

.navBar {
  position: fixed;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: row wrap;
  justify-content: flex-start;
  align-items: stretch;
  margin: 0;
  background-color: #00A3D9;
  color: #ffffff;
}

.resortLogo {
  display: flex;
  font-weight: bold;
  font-size:x-large;
  white-space: nowrap;
  align-items: center;
}

.desktop-menu {
  display: flex;
  flex-direction: row wrap;
  justify-content: flex-start;
  align-items: stretch;
}

.mobile-menu {
  display: flex;
  flex-grow: 1;
  flex-direction: row wrap;
  justify-content: flex-end;
  align-items: stretch;
}

.sidebar-panel {
    background-color: #00A3D9;
    position: fixed;
    right: 0;
    top: 56px;
    height: 100vh;
    z-index: 999;
    padding: 1em 0 2rem 0;
    width: 250px;
}

.sidebar-button-list {
  display: flex;
  flex-direction: column;
}

</style>

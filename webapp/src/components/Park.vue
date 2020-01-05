<template>
  <div class="park">
    <h2>{{park.name}}</h2>
    <stats v-bind:statsFor="park" class="collapsible"/>
    <land v-for="land in park.lands" v-bind:key="land.name" v-bind:land="land" />
  </div>
</template>

<script>

import land from './Land';
import stats from './Stats';

export default {
  name: 'park',
  components: {
    land,
    stats,
  },
  props: ['park'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
  padding-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>

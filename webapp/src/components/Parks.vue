<template>
  <div class="parks">
    <stats v-bind:statsFor="parks" />
    <park v-for="park in parks" v-bind:key="park.name" v-bind:park="park" />
  </div>
</template>

<script>

import park from './Park';
import stats from './Stats';

export default {
  name: 'parks',
  components: {
    park,
    stats,
  },
  props: ['parks'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>

<template>
  <div class="resort">
    <parks v-bind:parks="resort.parks" />
  </div>
</template>

<script>

import resort from '../model';
import parks from './Parks';

export default {
  name: 'resort',
  components: {
    parks,
  },
  data() {
    return {
      resort,
    };
  },
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

<template>
  <div class="restaurant">
    {{restaurant.name}}  {{restaurant.type}}
  </div>
</template>

<script>

export default {
  name: 'restaurant',
  props: ['restaurant'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

<template>
  <div class="other">
    {{other.name}}
  </div>
</template>

<script>

export default {
  name: 'other',
  props: ['other'],
};
</script>

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

<template>
  <div class="park padded" href="hello">
    <b-card>
      <h2>{{park.name}}</h2>
      <stats v-bind:statsFor="park" class="collapsible"/>
      <land v-for="land in park.lands" v-bind:key="land.name" v-bind:land="land" />
    </b-card>
  </div>
</template>

<script>

import land from '@/components/Land';
import stats from '@/components/Stats';
import model from '../model';

export default {
  name: 'park',
  components: {
    land,
    stats,
  },
  props: ['parkName'],
  data() {
    const park = model.resort.parks.find(parkChoice => parkChoice.name === this.parkName);
    return {
      park,
    };
  },
};
</script>

<style scoped>
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

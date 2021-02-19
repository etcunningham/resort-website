<template>
  <div class="padded">
    <h1>Parks</h1>
    <div class="d-flex flex-wrap justify-content-center parks">
      <div v-for="park in parks" v-bind:key="park.name" class="m-3">
        <park-card :park="park"></park-card>
      </div>
    </div>
    <stats v-bind:statsFor="parks" />
  </div>
</template>

<script>


import parkCard from '@/components/ParkCard';
import stats from '@/components/Stats';
import model from '../model';

export default {
  name: 'parks',
  components: {
    parkCard,
    stats,
  },
  data() {
    const parks = model.resort.parks;
    return {
      parks,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
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

a:hover {
  text-decoration-line: none;
}

/* This makes it so the parks  */
@media (max-width: 1490px) {
  .parks{
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  }
}

.padded {
  padding-left: 2.5%;
  padding-right: 2.5%
}

</style>

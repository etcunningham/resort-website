<template>
  <div class="land padded">
    <b-button block v-b-toggle="land.name">
      {{land.name}}
    </b-button>
    <b-collapse :id="land.name">
      <div class="sublands" v-if="land.sublands" >
        <land v-for="land in land.sublands" v-bind:key="land.name" v-bind:land="land" />
      </div>
      <div class="attractions padded" v-if="land.attractions" >
        <b-button block v-b-toggle="land.name + '-attractions'" variant="primary">
          Attractions
        </b-button>
        <b-collapse :id="land.name + '-attractions'">
          <b-table :items="land.attractions" />
        </b-collapse>
      </div>
      <div class="shops padded" v-if="land.shopping">
        <b-button block v-b-toggle="land.name + '-shops'" variant="primary">
          Shops
        </b-button>
        <b-collapse :id="land.name + '-shops'">
          <b-table :items="land.shopping" />
        </b-collapse>
      </div>
      <div class="restaurants padded" v-if="land.dining">
        <b-button block v-b-toggle="land.name + '-restaurants'" variant="primary">
          Restaurants
        </b-button>
        <b-collapse :id="land.name + '-restaurants'">
          <b-table :items="land.dining" />
        </b-collapse>
      </div>
      <div class="other padded" v-if="land.other">
        <b-button block v-b-toggle="land.name + '-other'" variant="primary">
          Other
        </b-button>
        <b-collapse :id="land.name + '-other'">
          <b-table :items="land.other" />
        </b-collapse>
      </div>
    </b-collapse>
  </div>
</template>

<script>

import stats from './Stats';

export default {
  name: 'land',
  components: {
    stats,
  },
  props: ['land'],
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

.padded {
  padding-right:5%;
  padding-left:5%;
  padding-top:10px;
}
</style>

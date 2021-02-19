<template>
  <div class="stats">
    <h6 align="left"><b>Total Attractions:</b> {{totalAttractions}} </h6>
    <b-table :items="attractionsByTicket"/>
  </div>
</template>

<script>

export default {
  name: 'stats',
  props: ['statsFor'],
  data() {
    const attractionsByTicket = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
    };

    const searchForTicketsRecursive = (obj, ticket) => {
      if (typeof (obj) === 'object' && obj !== null) {
        Object.values(obj).forEach((value) => {
          if (value === ticket) attractionsByTicket[ticket] += 1;
          else searchForTicketsRecursive(value, ticket);
        });
      }
    };

    Object.keys(attractionsByTicket).forEach((ticketType) => {
      searchForTicketsRecursive(this.statsFor, ticketType);
    });

    let totalAttractions = 0;
    Object.values(attractionsByTicket).forEach((value) => {
      totalAttractions += value;
    });

    return {
      attractionsByTicket: [attractionsByTicket],
      totalAttractions,
    };
  },
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

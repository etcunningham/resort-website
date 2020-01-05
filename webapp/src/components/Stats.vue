<template>
  <div class="stats">
    <b-table :items="stats"/>
  </div>
</template>

<script>

export default {
  name: 'stats',
  props: ['statsFor'],
  data() {
    const stats = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
    };

    const searchForTicketsRecursive = (obj, ticket) => {
      if (typeof (obj) === 'object' && obj !== null) {
        Object.values(obj).forEach((value) => {
          if (value === ticket) stats[ticket] += 1;
          else searchForTicketsRecursive(value, ticket);
        });
      }
    };

    Object.keys(stats).forEach((ticketType) => {
      searchForTicketsRecursive(this.statsFor, ticketType);
    });

    return {
      stats: [stats],
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

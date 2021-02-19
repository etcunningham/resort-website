<template>
  <div class="attraction">
    <b-table-simple>
      <colgroup><col><col><col></colgroup>
      <b-thead>
        <b-tr>
          <b-th>Name</b-th>
          <b-th>Type</b-th>
          <b-th>Ticket</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-th>{{attraction.name}}</b-th>
          <b-th>{{attraction.type}}</b-th>
          <b-th>{{attraction.ticket}}</b-th>
        </b-tr>
        <b-tr>
          {{attraction.description}}
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>

export default {
  name: 'attraction',
  props: ['attraction'],
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

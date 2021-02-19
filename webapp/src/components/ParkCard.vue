<template>
  <div class="fillContainer expandOnHover card"
      @mouseover="isHovering=true"
      @mouseout="isHovering=false"
      :class="{'shadow': isHovering, 'shadow-sm': !isHovering}" >
    <router-link :to="'/parks/' + park.name" class="fillContainer">
      <img :src="park.imgSrc" class="card-image"/>
      <div class="card-title">
        <h1>{{park.name}}</h1>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'parkCard',
  props: ['park'],
  data: () => ({
    isHovering: false,
  }),
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
  align-self: center;
}

a {
  color: #35495E;
}

a:hover {
  text-decoration-line: none;
}

.fillContainer {
  width:100%;
  height:100%;
}

.card {
  min-width: 250px;
  max-width: 250px;
  border-radius: 15px;
  transition: all .5s ease;
}

.card:hover {
  transform: scale(1.01);
}

.card-title {
  height: 25%;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content:center;
  box-shadow: 0 -25px 12px -12px black;
}

.card-image {
  height: 75%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

</style>

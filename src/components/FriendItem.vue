<template>
<div class="item" v-if="friend">
  <a class="photo" :href="'https://vk.com/id' + friend.id">
    <img :src="friend.photo">
  </a>
  <a class="name" :href="'https://vk.com/id' + friend.id">
    <div>{{friend.name}}</div>
  </a>

</div>
</template>

<script>
export default {
  props: {
    friend: {

    }
  }
}
</script>

<style scoped>
.item {
  display: grid;
  grid-template-areas: "p n" ;
  grid-template-columns: 50px 1fr;
  grid-gap: 1rem;
  background-color: #f6f6f6;
  margin: 0 1rem 1rem 1rem;
  padding: .5rem 1rem;
  border-radius: .5rem;
}

.photo {
  grid-area: p;
}

.name {
  grid-area: n;
  display: flex;
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
}

.name div {
  margin: auto 0;
  align-text:left;
}

img {
  border-radius: 2rem;
  border: solid 1px rgba(122,122,122,0.5);
}

</style>
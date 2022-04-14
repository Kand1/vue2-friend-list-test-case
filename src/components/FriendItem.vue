<template>
<div class="item" v-if="friend">
  <a class="photo" :href="'https://vk.com/id' + friend.id">
    <img :src="friend.photo">
  </a>
  <div class="name">
    <a :href="'https://vk.com/id' + friend.id">
      {{friend.name}}
    </a>
  </div>
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
}

.name a {
  color: #333;
  text-decoration: none;
  font-size: 1.1rem;
  margin: auto 0;
}

img {
  border-radius: 2rem;
  border: solid 1px rgba(122,122,122,0.5);
}

</style>
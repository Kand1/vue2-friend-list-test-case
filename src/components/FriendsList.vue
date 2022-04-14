<template>
  <div class="frame">
    <div class="header">
      <div>
        {{listName}}
      </div>
    </div>
    <div class="list">
      <FriendItem
        v-for="friend in friendsList"
        v-bind:friend="friend"

      />
    </div>
    <div class="footer">
      <button @click="buttonClick">
        {{buttonName}}
      </button>
    </div>
  </div>
</template>

<script>
import FriendItem from "@/components/FriendItem";

export default {
  props: {
    listName: String,
    buttonName: String,
    friendsList: Array
  },
  components: {
    FriendItem
  },
  methods: {
    buttonClick() {
      if (this.buttonName === "export to console") {
        console.log(this.friendsList.map(el=> el.name))
      }
      if (this.buttonName === "login in") {
        this.$emit('login')
      }
    }
  }
}
</script>

<style scoped>
.frame {
  display: grid;
  grid-template-areas:"h" "l" "f" ;
  grid-template-rows: 3rem 1fr 4rem;
  grid-gap: 1rem;
  width: 50%;
  margin: 1rem;
  border-radius: 2rem;
  background-color: #f0f1f5;
  box-shadow: 0 0 2px 2px rgba(122,122,122,0.2);
}
.header {
  grid-area: h;
  display: flex;
  background-color: #f6f6f6;
  height: 3rem;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 1px rgba(122,122,122,0.2);

}
.header div {
  margin: auto;
  font-weight: bold;
}

.list {
  grid-area: l;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
}

.footer {
  grid-area: f;
  display: flex;
  background-color: #f6f6f6;
  height: 4rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 0 0 1px rgba(122,122,122,0.2);

}

button {
  background-color: #5190f9;
  color: #eee;
  border: none;
  padding: .5rem 0;
  width: 10rem;
  border-radius: .5rem;
  margin: auto;
}
button:hover {
  background-color: #3c80f6;
  cursor: pointer;
}
button:active {
  background-color: #1471f6;
  cursor: pointer;
}
</style>
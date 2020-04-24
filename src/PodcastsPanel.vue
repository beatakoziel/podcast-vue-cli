<template >
  <div class="cards-panel">
    <div class="card" v-for="podcast in podcasts" :key="`podcast-${podcast.title}`">
      <img class="card-img-top" :src="podcast.imagePath" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{podcast.title}}</h5>
        <p class="card-text">{{podcast.description}}</p>
        <button class="btn btn-outline-default my-2 my-sm-0" type="submit">Odtwórz</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PodcastsList",
  computed: {
    ...mapGetters(["podcasts"])
  }
};
</script>
<style scoped>
.btn,
.card {
  font-family: "Francois One", sans-serif;
  border-radius: 0px;
  display: block;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 20px #62546a;
}

.btn {
  border: 1px solid black;
  float: right;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.btn:hover {
  background-color: #62546a;
  color: white;
}

.cards-panel {
  margin: 0 5% 5% 5%;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.card {
  margin: 10px 10px;
  width: 15rem;
  height: 25rem;
}
</style>
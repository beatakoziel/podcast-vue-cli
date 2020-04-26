<template >
  <div id="cards-panel">
    <div class="card" v-for="podcast in filterEventsByCategory()" :key="`podcast-${podcast.title}`">
      <img class="card-img-top" :src="podcast.imagePath" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{podcast.title}}</h5>
        <p class="card-text">{{podcast.description}}</p>
        <button class="btn btn-outline-default shadow-none my-2 my-sm-0" type="submit">Odtwórz</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["category", "searchPhrase"],
  name: "PodcastsList",
  computed: {
    ...mapGetters(["podcasts"])
  },
  methods: {
    filterEventsByCategory() {
      console.log(this.searchPhrase);
      console.log(this.category);
      if (
        this.category == "all" ||
        this.category == undefined ||
        this.category == null
      )
        return this.podcasts.filter(
          podcast =>
            podcast.title
              .toUpperCase()
              .includes(this.searchPhrase.toUpperCase()) ||
            podcast.description
              .toUpperCase()
              .includes(this.searchPhrase.toUpperCase())
        );
      else
        return this.podcasts
          .filter(podcast => podcast.category === this.category)
          .filter(
            podcast =>
              podcast.title
                .toUpperCase()
                .includes(this.searchPhrase.toUpperCase()) ||
              podcast.description
                .toUpperCase()
                .includes(this.searchPhrase.toUpperCase())
          );
    }
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

.btn:active {
  transform: scale(0.9);
}

.btn:hover {
  background-color: #62546a;
  color: white;
}

#cards-panel {
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
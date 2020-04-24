<template>
  <nav class="navbar navbar-inverse">
    <a class="navbar-brand" id="logo" href="#">PURPLECAST</a>
    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Szukaj podcastu"
        aria-label="Search"
      />
      <button class="btn btn-outline-default my-2 my-sm-0" type="submit">Szukaj</button>
    </form>
  </nav>
</template>

<script>
export default {};
</script>
<style scoped>
#logo {
  margin-right: 25px;
  padding: 15px;
  font-family: "Francois One", sans-serif;
  font-size: 20px;
  letter-spacing: 4px;
}
.btn,
.form-control {
  border-radius: 0px;
  color: white;
  border: 1px solid white;
  font-family: "Francois One", sans-serif;
}

.navbar-brand {
  color: white;
}

.navbar-inverse {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  overflow: auto;
  color: white;
  padding-left: 25px;
  padding-right: 25px;
}
</style>
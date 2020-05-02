<template>
  <div class="card">
    <div class="card-body">
      <form action="http://localhost:8080/index.html">
        <div class="form-group">
          <label>
            Nazwa użytkownika
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Wprowadź login"
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            Hasło
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Wprowadź hasło"
            />
          </label>
        </div>
        <div class="form-group">
          <label>
            Powtórz hasło
            <input
              type="password"
              class="form-control"
              name="password-repeat"
              placeholder="Wprowadź hasło ponownie"
            />
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-outline-default shadow-none btn-margin"
          style="float: right;"
        >Zarejestruj się</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.card,
.btn,
.form-control {
  border-radius: 0;
}
form {
  margin-bottom: 60px;
}

.card {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 4%;
  margin-left: 10%;
  margin-top: 8%;
  margin-bottom: 15%;
  width: fit-content;
  font-family: "Francois One", sans-serif;
}

label {
  color: white;
}

.btn {
  border: 1px solid white;
  color: white;
  background-color: transparent;
}

.btn:active {
  transform: scale(0.9);
}

.btn:hover {
  background-color: #62546a;
  border: none;
  color: white;
}

#question {
  color: white;
  font-size: 80%;
}

a {
  text-decoration: none;
  color: #62546a;
  font-size: 90%;
}

p,
a:hover {
  color: white;
}
</style>
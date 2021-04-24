const app = Vue.createApp({
  data() {
    return {
      objetivos: [],
      inputUser: "",
    };
  },
  methods: {
    addObj() {
      this.objetivos.push(this.inputUser);
      this.inputUser = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.append(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);

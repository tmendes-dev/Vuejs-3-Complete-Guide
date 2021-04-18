const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      num: 2.5,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add() {
      this.counter += this.num;
    },
    sub() {
      this.counter -= this.num;
    },
    submitForm(event) {
      alert("Registrado");
    },
    inputName(event) {
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");

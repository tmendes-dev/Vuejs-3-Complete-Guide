const app = Vue.createApp({
  data() {
    return {
      coursegoal1: "Terminar o curso e aprender Vue3",
      coursegoal2: "Terminar o curso e dominar Vue3",
      coursegoal3: "Terminei o curso e dominei Vue3",
      goalResult: "",
      vuelink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      if (randomNum < 1 / 3) {
        this.goalResult = this.coursegoal1;
      } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
        this.goalResult = this.coursegoal2;
      } else {
        this.goalResult = this.coursegoal3;
      }
    },
    isRawHtml(goalResult) {
      return goalResult[0] === "<";
    },
  },
  created() {
    this.outputGoal();
  },
});
app.mount("#user-goal");

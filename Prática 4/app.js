const app = Vue.createApp({
  data() {
    return {
      boxSelected1: false,
      boxSelected2: false,
      boxSelected3: false,
    };
  },
  computed: {
    box1Classes() {
      return { active: this.boxSelected1 };
    },
    box2Classes() {
      return { active: this.boxSelected2 };
    },
    box3Classes() {
      return { active: this.boxSelected3 };
    },
  },
  methods: {
    boxSelected(box) {
      if (box == 1) {
        this.boxSelected1 = !this.boxSelected1;
      } else if (box == 2) {
        this.boxSelected2 = !this.boxSelected2;
      } else {
        this.boxSelected3 = !this.boxSelected3;
      }
    },
  },
}).mount("#styling");

function getRandomAtk(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      currentRound: 0,
    };
  },
  computed: {
    playerHpBar() {
      return { width: this.playerHp + "%" };
    },
    monsterHpBar() {
      return { width: this.monsterHp + "%" };
    },
  },
  methods: {
    attackMonster() {
      let atkValue = getRandomAtk(12, 5);
      this.monsterHp -= atkValue;
      this.attackPlayer();
      this.currentRound++;
    },
    attackPlayer() {
      let atkValue = getRandomAtk(12, 8);
      this.playerHp -= atkValue;
    },
    specialAttack() {
      let atkValue = getRandomAtk(10, 25);
      this.monsterHp -= atkValue;
      this.attackPlayer();
      this.currentRound++;
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    healPlayer() {},
  },
}).mount("#game");

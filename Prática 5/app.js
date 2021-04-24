function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      currentRound: 0,
      winner: null,
      logBattle: [],
    };
  },
  watch: {
    playerHp(value) {
      if (value <= 0 && this.monsterHp <= 0) {
        this.winner = "Draw";
      } else if (this.playerHp <= 0) {
        this.winner = "Monster win!";
      }
    },
    monsterHp(value) {
      if (value <= 0 && this.playerHp <= 0) {
        this.winner = "Draw";
      } else if (this.monsterHp <= 0) {
        this.winner = "Player win!";
      }
    },
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
      let atkValue = getRandomValue(12, 5);
      if (this.monsterHp - atkValue <= 0) {
        this.monsterHp = 0;
      } else {
        this.monsterHp -= atkValue;
      }
      if (this.playerHp > 0) {
        this.attackPlayer();
      }
      this.addLogMsg(
        "Player",
        "attacked monster and dealt",
        atkValue + " damage"
      );
      this.currentRound++;
    },
    attackPlayer() {
      let atkValue = getRandomValue(12, 8);
      if (this.playerHp - atkValue < 0) {
        this.playerHp = 0;
      } else {
        this.playerHp -= atkValue;
      }
      this.addLogMsg(
        "Monster",
        "attacked player and dealt",
        atkValue + " damage"
      );
    },
    specialAttack() {
      let atkValue = getRandomValue(10, 25);
      if (this.monsterHp - atkValue <= 0) {
        this.monsterHp = 0;
      } else {
        this.monsterHp -= atkValue;
      }
      if (this.monsterHp > 0 && this.playerHp > 0) {
        this.attackPlayer();
      }
      this.addLogMsg(
        "Player",
        "special attacked monster and dealt",
        atkValue + " damage"
      );
      this.currentRound++;
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    healPlayer() {
      let healValue = getRandomValue(8, 20);
      if (this.playerHp + healValue > 100) {
        this.playerHp = 100;
      } else {
        this.playerHp += healValue;
      }
      this.currentRound++;
      this.addLogMsg("Player", "healed", atkValue + " HP");
      this.attackPlayer();
    },
    playAgain() {
      this.monsterHp = 100;
      this.playerHp = 100;
      this.winner = null;
      this.currentRound = 0;
    },
    surrender() {
      this.winner = "Player lost !";
    },
    addLogMsg(who, what, value) {
      this.logBattle.unshift(who + " " + what + " " + value + ".");
    },
  },
}).mount("#game");

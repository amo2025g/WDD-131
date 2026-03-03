const card = {
  cardClass: 'Swamp Beast Diplomat',
  cardLevel: 5,
  cardHealth: 100,
  attack: function () {
    if (this.cardHealth > 0) {
      this.cardHealth -= 20;
    }
    if (this.cardHealth < 0) {
      this.cardHealth = 0;
    }
    document.getElementById('cardHealth').textContent = `Health: ${this.cardHealth}`;
  },
  levelUp: function () {
    this.cardLevel += 1;
    document.getElementById('cardLevel').textContent = `Level: ${this.cardLevel}`;
  }
};

document.getElementById('cardAttack').addEventListener('click', function () {
  card.attack();
});

document.getElementById('cardLevelUp').addEventListener('click', function () {
  card.levelUp();
});
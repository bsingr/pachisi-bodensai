class CardStack {
  constructor() {
    this.TYPE_AND_QUANTITY = Object.entries({
      '1': 9,
      '2': 7,
      '3': 7,
      '4': 7,
      '5': 7,
      '6': 7,
      '7': 8,
      '8': 7,
      '9': 7,
      '10': 7,
      '12': 7,
      '13': 9,
      'switch': 7,
      'alternate': 4,
      'badcop': 1,
      'lightningball': 1,
      'goodcop': 1,
      'ringaround': 1,
    })
  }

  shuffle(dealerPosition={}) {
    const stack = []
    for (const [type, number] of this.TYPE_AND_QUANTITY) {
      this.addCardsOfType(stack, type, number)
    }
    this.shuffleArray(stack).forEach((card, idx) => {
      Object.assign(card, {
        id: idx,
        left: dealerPosition.left,
        top: dealerPosition.top,
        zIndex: 0
      })
    })
    return stack
  }

  addCardsOfType(stack, type, number, position) {
    for (let i = 0; i < number; i++) {
      stack.push({type});
    }
  }

  shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}


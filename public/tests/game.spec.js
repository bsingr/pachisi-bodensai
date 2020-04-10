describe('buildCardStackForDealer', () => {
  it('builds same initial values', () => {
    const stack = new CardStack().shuffle({top:1, left:2})
    chai.expect(stack[0].zIndex).to.eql(0)
    chai.expect(stack[0].top).to.eql(1)
    chai.expect(stack[0].left).to.eql(2)
  })

  it('builds 104 cards', () => {
    const stack = new CardStack().shuffle({})
    chai.expect(stack.length).to.eql(104)
  })

  it('builds n cards per type', () => {
    const stack = new CardStack().shuffle({})
    const numberOfCardsPerType = stack.reduce((acc,c) => {
      acc[c.type] = acc[c.type] ? acc[c.type] + 1 : 1
      return acc
    }, {});
    chai.expect(numberOfCardsPerType).to.deep.eql({
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
      'fool': 1,
      'juggler': 7,
      'angel': 1,
      'tac': 4,
      'warrior': 1,
      'devil': 1,
    })
  })

  it('shuffles the stack randomly', () => {
    chai.expect(new CardStack().shuffle({}))
      .not.to.deep.eql(new CardStack().shuffle({}))
  })
})
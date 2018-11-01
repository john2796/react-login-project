function amaroGold(pirateNum) {
  // a place to store the gold
  const gold = [];
  // a place to store total gold
  let remainingGold = pirateNum * 20;
  // iterate backwards from pirateNum -1 to 1
  for (let i = pirateNum - 1; i >= 1; i--) {
    // amount of gold for current place (i + 2 ) % 2
    const amount = (i - 1) % 2;
    remainingGold -= amount;
    gold[i] = amount;
  }

  // Return gold
}

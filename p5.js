function onetwothree(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function abcThenOneTwoThree() {
    console.log('abc');
    await onetwothree(2000);
    console.log('123');
  }
  
  abc();
  
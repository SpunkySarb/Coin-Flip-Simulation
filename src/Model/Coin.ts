class Participant {
  outcome: "heads" | "tails";
  participantID: number;
  constructor(participantID: number) {
    this.outcome = "heads";
    this.participantID = participantID;
  }

  flipCoin() {
    if(this.outcome==='heads'){// if standing only then get chance to flip

    
    const randomNumber = Math.round(Math.random());
    if (randomNumber === 0) {
      this.outcome = "heads";
    } else {
      this.outcome = "tails";
    }
    return this.outcome;
  }else{
    return this.outcome;
  }
}

}

export default Participant;

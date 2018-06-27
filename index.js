function BoardMember(name,homeState,training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = veto = () => {
    return "No, I must disagree"
  }
  this.approve = approve = () => {
    return "You can do that!"
  }
  this.doCharity = doCharity = () => {
    return "I like to help people."
  }
  this.releasePressStatement = releasePressStatement = () => {
    return "You will see great things from Scuber."
  }
  this.sayHi = sayHi = () => {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }


}
// constructor for letters

function Letter(guessLetter){
  this.char = guessLetter;
  this.appear = false;

  this.letDisplay = function(){
    if(this.char == false){
      return " - ";
    }
    else{
      return this.char;
    }
  }
};

module.exports = letter;
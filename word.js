var letter = require("./letter.js");


// sets word constructor
var Word = function(wrd){

this.word = wrd;
this.let = [];
this.guessLet = " ";
this.found = false;



this.getLets = function(){

  for(var i = 0; i <this.word.length; i++){

    this.let.push(new letter.letter(this.word[i]));

  }
};

// returns true or false for current word

this.currentLet = function( ){
  var num = 0;

  for (var i = 0; i <this.let.length; i++){
    if(this.let[i].charac == guessLet){
      this.let[i].appear = true;
      num += 1;
    }
  } 
    return num;
  }

this.findWord = function(){
  if(this.let.every(function(current))){
    return current.appear == true;
  }
  return true;
}
}
this.wordRender = function(){
  var space = " ";
  for (var i = =this.let.length; i++) {
  space +=this.let[i].letterRender(this.let[i]);
  }
  return space;
}

}


module.exports = word;

}
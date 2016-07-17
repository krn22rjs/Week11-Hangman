// constructor for letters

function letter(options){
  this.character = options;
  this.appear = false;

  this.lRender = function(){
    if(this.character == false){
      return " ";
    }
    else{
      return this.character;
    }
  }
};

module.exports = letter;
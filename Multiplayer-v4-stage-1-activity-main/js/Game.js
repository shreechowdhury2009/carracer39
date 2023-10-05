class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
  

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }


  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //SA
  play() {
    this.handleElements();
    Player.getplayersinfo()
      if(allPlayers!==undefined){
        Image(track,0,-5*5,width,height)

        var index=0
        for(var plr in allPlayers){
          index=index+1
          var X=allPlayers[plr].positionX
          var Y = height-allPlayers[plr].positionY
          
          cars[index-1].position.X=x
          cars[index-1].position.Y=Y

        }
        if(keyIsDown(UP_ARROW)){
          player.positionY+=10
          player.update()
        }
      }
    

      drawSprites();
    }
  }

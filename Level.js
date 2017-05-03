function Level(){
  this.inimigos = 3;
  this.sprites = [];
}

Level.prototype.init = function () {
  for (var i = 0; i < this.inimigos; i++) {
    var inimigo = new Sprite();
    var r = (Math.random()*1000)/2;
    inimigo.x = 900;
    inimigo.y = r;
    inimigo.width = 15;
    inimigo.height = 50;
    inimigo.imgkey = "enemy";
    this.sprites.push(inimigo);
  }
};

Level.prototype.mover = function (dt) {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].moverEnemy(dt);
    }
};

Level.prototype.desenha = function (ctx) {
    for (var i = 0; i < this.sprites.length; i++) {
      this.sprites[i].desenhar(ctx);
    }
};

Level.prototype.colidiuCom = function (alvo, resolveColisao) {
    for (var i = 0; i < this.sprites.length; i++) {
      if(this.sprites[i].colidiuCom(alvo)){
        resolveColisao(this.sprites[i], alvo);
      }
    }
};

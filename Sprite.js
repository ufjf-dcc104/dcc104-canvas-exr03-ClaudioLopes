function Sprite(){
  this.x = 150;
  this.y = 250;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 15;
  this.height = 15;
  this.cooldown = 0;
  this.color = "blue";
}

Sprite.prototype.desenhar = function(ctx){
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.fillStyle = this.color;
  ctx.fillRect(-this.width/2, -this.height/2,this.width,this.height);
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.strokeStyle = "grey";
  ctx.strokeRect(-this.width/2, -this.height/2, this.width, this.height);
  ctx.restore();

};

Sprite.prototype.mover = function(dt){
  this.vy = this.vy + 610*dt;
  this.y = this.y + this.vy*dt;
  this.cooldown -= dt;
};

Sprite.prototype.moverEnemy = function(dt){
  this.vx = this.vx + (this.ax-60)*dt;
  this.x = this.x + this.vx*dt;
};

Sprite.prototype.colidiuCom = function (alvo) {
  if(this.x+this.width < alvo.x) return false;
  if(this.x > alvo.x+this.width) return false;
  if(this.y+this.height < alvo.y) return false;
  if(this.y > alvo.y+this.height) return false;
  return true;
};

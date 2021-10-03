<template>
  <div class="game-screen">
    <canvas id="game-canvas" width="600" height="800" />
    <div class="options">
      <div v-if="colorType=='choose'" class="check-row">
        <label>Color</label>
        <input v-model="color" type="color" />
      </div>
      <div v-else class="check-col">
        <label>Color transition speed</label>
        <input v-model="colorTransitionSpeed" type="number"/>
      </div>
      <form class="check-row">
        <input type="radio" id="choose-color" value="choose" v-model="colorType"/>
        <label for="choose-color"> Choose Color </label>
        <br>
        <input type="radio" id="random-colors" value="random" v-model="colorType"/>
        <label for="random-colors"> Random Colors </label>
        <br>
        <input type="radio" id="change-colors" value="change" v-model="colorType"/>
        <label for="change-colors"> Changing Colors </label>
        <br>
        <input type="radio" id="change-colors-gray" value="change-gray" v-model="colorType"/>
        <label for="change-colors-gray"> Changing Colors (Gray) </label>
      </form>
      <br>
      <div class="check-row">
        <label>Collissions?</label>
        <input type="checkbox" v-model="collissionsActive"/>
      </div>
      <label>Gravity</label>
      <input v-model="gravity" type="number" step="0.1" min="0.0" />
      <label>Bounciness</label>
      <input v-model="bouncePercent" type="number" step="0.1" min="0.0"/>
      <label>Ball Radius</label>
      <input v-model="radius" type="number" step="5" min="5" max="200"/>
      <!--label>Wind</label>
      <input v-model="wind" type="number" step=".1"/-->
      <label>Bounce randomness (y)</label>
      <input v-model="bounceRandomness" type="number" min="0" step="10" />
      <label>Bounce randomness (x)</label>
      <input v-model="bounceRandomnessX" type="number" min="0" step="10" />
      <label>Delay between drops (ms)</label>
      <input v-model="dropDelay" type="number" step="5"/>
      <label>Delay between frames (ms)</label>
      <input v-model="frameDelay" type="number" step="5"/>
      <br>
      <label>Number balls: {{this.objects.length}}</label>
      <button @click="addBall"> Add Ball</button>
      <button @click="addManyBalls(10)">Add 10</button>
      <button @click="addManyBalls(100)">Add 100</button>
      <br>
      <button @click="reset">Drop</button>
      <button @click="clear">Clear All</button>
      <button style="background: grey" @click="resetAll">Reset All</button>
    </div>
  </div>
</template>

<script>
//multiple of gravity and wind used to round low velocities to 0
const velocityRound = 4;
const randomColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
export default {
  name: 'Game',
  data(){
    return{
      color: '#0095DD',
      colorType: 'change',
      colorFrom: null,
      colorTo: null,
      colorCurrent: null,
      colorTransitionSpeed: 10,

      collissionsActive: false,
      canvas: null,
      ctx: null,
      gravity: .10,
      bouncePercent: 0.9,
      wind: 0.0,
      bounceRandomness: 0,
      bounceRandomnessX: 0,
      dropDelay: 5,  
      frameDelay: 0,
      radius: 15,
      objects: [],
    }
  },
  created(){
    this.addManyBalls(100);
  },
  mounted(){
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.drawFrame();
  },
  methods: {
    updateObjPosition(i){
      var obj = this.objects[i];
      
      obj.x += obj.dx;
      obj.y += obj.dy;
      if(!(obj.dx == 0 && ((obj.x == this.canvas.width-this.radius && this.wind > 0) || (obj.x == this.radius && this.wind < 0))))
        obj.dx += this.wind;
      if(!(obj.y == this.canvas.height - this.radius && obj.dy == 0))
        obj.dy += this.gravity;
      //Object Collission
      if(obj.collided != null){
        let x = obj.collided;
        let dist = Math.sqrt(Math.pow(obj.x - this.objects[x].x,2) + Math.pow(obj.y - this.objects[x].y,2));
        while(dist < 2*this.radius){
          obj.x += obj.dx;
          obj.y += obj.dy;
          dist = Math.sqrt(Math.pow(obj.x - this.objects[x].x,2) + Math.pow(obj.y - this.objects[x].y,2));
        }
        obj.collided = null; 
      }
      if(this.collissionsActive){
        for(let x = parseInt(i)+1; x < this.objects.length; x++){
          if(!this.objects[x]) continue;
          let dist = Math.sqrt(Math.pow(obj.x - this.objects[x].x,2) + Math.pow(obj.y - this.objects[x].y,2))
          if(dist < 2 * this.radius){
            this.objects[x].collided = i;
            let theta = Math.asin((obj.y - this.objects[x].y) / dist);
            theta = Math.abs(theta);
      
            let v1 = Math.sqrt(Math.pow(obj.dx,2) + Math.pow(obj.dy,2));
            let v2 = Math.sqrt(Math.pow(this.objects[x].dx,2) + Math.pow(this.objects[x].dy,2));
            let v1_n = v1 * Math.sin(theta), v1_t = v1 * Math.cos(theta);
            let v2_n = v2 * Math.sin(theta), v2_t = v2 * Math.cos(theta);

            obj.dx = v1_t * Math.sin(theta) + v2_n * Math.cos(theta);
            obj.dy = v1_t * Math.cos(theta) + v2_n * Math.sin(theta);
            this.objects[x].dx = v2_t * Math.sin(theta) + v1_n * Math.cos(theta);
            this.objects[x].dy = v2_t * Math.cos(theta) + v1_n * Math.sin(theta);
            return;
          }
        }
      }
      //Right wall or Left wall
      if((obj.x > this.canvas.width - this.radius && obj.dx > 0) || (obj.x < this.radius && obj.dx < 0)){
        obj.dx = (-obj.dx) * Math.sqrt(this.bouncePercent);
        if(Math.abs(obj.dx) < velocityRound * Math.abs(this.wind)){
          obj.x = obj.x > this.canvas.width-this.radius ? this.canvas.width-this.radius : this.radius;
          obj.dx = 0;
        }
      }
      //Floor
      if(obj.y > this.canvas.height - this.radius && obj.dy > 0){
        obj.dy = (-obj.dy) * Math.sqrt(this.bouncePercent);
        obj.dx += Math.random()*this.bounceRandomness*obj.dy*.01 - (this.bounceRandomness*obj.dy*.01/2);
        if(Math.abs(obj.dy) < velocityRound * this.gravity){
          obj.y = this.canvas.height - this.radius;
          obj.dy = 0;
        }
      }
    },
    drawShape(i){
      var obj = this.objects[i];
      let ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(obj.x, obj.y, this.radius, 0, Math.PI*2);
      ctx.fillStyle = this.colorType == 'random' ? obj.color : this.color;
      ctx.fill();
      ctx.closePath();
      this.updateObjPosition(i);
      
    },
    drawFrame(){
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.updateColor();
      for(let i in this.objects){
        if(!this.objects[i].hide)
          this.drawShape(i);
      }
      if(!this.frameDelay)
        requestAnimationFrame(this.drawFrame);
      else
        setTimeout(()=>requestAnimationFrame(this.drawFrame), this.frameDelay);
    },
    updateColor(){
      if(this.colorType != 'change' && this.colorType != 'change-gray')
        return;
      if(this.colorFrom == null || this.colorTo == null || (this.colorFrom.r < this.colorTo.r && this.colorCurrent.r > this.colorTo.r) || (this.colorFrom.r > this.colorTo.r && this.colorCurrent.r < this.colorTo.r) || (this.colorFrom.r == this.colorTo.r)){
        //pick new colors
        if(this.colorType == 'change-gray'){
          if(this.colorTo != null)
            this.colorFrom = {...this.colorTo};
          else 
            this.colorFrom = {r:0, g:0, b:0}
          this.colorTo = this.colorFrom.r > 127 ? {r:0, g:0, b:0} : {r:245, g:245, b:245};
        }
        else{
          if(this.colorTo != null)
            this.colorFrom = {...this.colorTo};
          else
            this.colorFrom = {
              r:Math.floor(Math.random()*255), 
              g:Math.floor(Math.random()*255), 
              b:Math.floor(Math.random()*255) 
            };
          this.colorTo = {
            r:Math.floor(Math.random()*255), 
            g:Math.floor(Math.random()*255), 
            b:Math.floor(Math.random()*255) 
          };
          //this.colorCurrent = {...this.colorFrom};
        }
      }
      if(!this.colorCurrent)
        this.colorCurrent = {...this.colorFrom};
      else{
        this.colorCurrent.r += (this.colorTo.r - this.colorFrom.r) * this.colorTransitionSpeed / 2000;
        this.colorCurrent.g += (this.colorTo.g - this.colorFrom.g) * this.colorTransitionSpeed / 2000;
        this.colorCurrent.b += (this.colorTo.b - this.colorFrom.b) * this.colorTransitionSpeed / 2000;
      }
      this.color = 'rgb('+Math.floor(this.colorCurrent.r)+', '+Math.floor(this.colorCurrent.g)+', '+Math.floor(this.colorCurrent.b)+')'
    },
    addBall(){
      let ball = {
        x: (this.getRandX()),
        y: 0,
        dx: 0,
        dy: 0,
        radius: 50,
        color: (randomColors[Math.floor(Math.random()*4)])
      }
      this.objects.push(ball);
    },
    addManyBalls(n){
      for(let i = 0; i < n; i++){
        setTimeout(() => this.addBall(), i*this.dropDelay);
      }
    },
    getRandX(){
      return Math.random()*(this.canvas.width - 2*this.radius) + this.radius
    },
    reset(){
      //this.resetAll = true;
      for(let i in this.objects){
        let obj = this.objects[i];
        obj.hide =  true;
        setTimeout(() => {
          obj.x = this.getRandX();
          obj.y = 0;
          obj.dy = 0;
          obj.dx = 0;
          obj.hide = false;
        }, i*this.dropDelay+300)
      }
      //this.resetAll = false;
    },
    clear(){
      this.objects.length = 0;
    },
    resetAll(){
      this.objects.length = 0;
      this.gravity = 0.6;
      this.radius = 50;
      this.bouncePercent= 0.7;
      this.wind = 0.0;
      this.color = '#0095DD';
      this.dropDelay = 100;
    }
  }
}
</script>

<style scoped>
#game-canvas{
  background: white;
}
.options{
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.check-row{
  text-align: left;
}
.check-col{
  text-align: left;
  display: flex;
  flex-direction: column;
}
.check-row label{
  margin-right: 20px;
}
.options input{
  margin-bottom: 20px;
}
.options label{
  text-align: left;
}
.options button{
  padding: 5px;
  margin: 2px;
}
</style>

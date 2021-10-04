(function(t){function e(e){for(var n,l,i=e[0],a=e[1],s=e[2],d=0,h=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&h.push(r[l][0]),r[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(h.length)h.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,i=1;i<o.length;i++){var a=o[i];0!==r[a]&&(n=!1)}n&&(c.splice(e--,1),t=l(l.s=o[0]))}return t}var n={},r={app:0},c=[];function l(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=n,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/blob/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var u=a;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23");function r(t,e,o,r,c,l){var i=Object(n["h"])("Game");return Object(n["e"])(),Object(n["b"])(i)}var c=function(t){return Object(n["g"])("data-v-2406a346"),t=t(),Object(n["f"])(),t},l={class:"game-screen"},i=c((function(){return Object(n["d"])("canvas",{id:"game-canvas",width:"600",height:"800"},null,-1)})),a={class:"options"},s={key:0,class:"check-row"},u=c((function(){return Object(n["d"])("label",null,"Color",-1)})),d={key:1,class:"check-col"},h=c((function(){return Object(n["d"])("label",null,"Color transition speed",-1)})),b={class:"check-row"},p=c((function(){return Object(n["d"])("label",{for:"choose-color"}," Choose Color ",-1)})),f=c((function(){return Object(n["d"])("br",null,null,-1)})),m=c((function(){return Object(n["d"])("label",{for:"random-colors"}," Random Colors ",-1)})),y=c((function(){return Object(n["d"])("br",null,null,-1)})),j=c((function(){return Object(n["d"])("label",{for:"change-colors"}," Changing Colors ",-1)})),O=c((function(){return Object(n["d"])("br",null,null,-1)})),v=c((function(){return Object(n["d"])("label",{for:"change-colors-gray"}," Changing Colors (Gray) ",-1)})),g=c((function(){return Object(n["d"])("br",null,null,-1)})),M={class:"check-row"},x=c((function(){return Object(n["d"])("label",null,"Collissions?",-1)})),w=c((function(){return Object(n["d"])("label",null,"Gravity",-1)})),T=c((function(){return Object(n["d"])("label",null,"Bounciness",-1)})),C=c((function(){return Object(n["d"])("label",null,"Ball Radius",-1)})),F=c((function(){return Object(n["d"])("label",null,"Bounce randomness (y)",-1)})),k=c((function(){return Object(n["d"])("label",null,"Bounce randomness (x)",-1)})),D=c((function(){return Object(n["d"])("label",null,"Delay between drops (ms)",-1)})),P=c((function(){return Object(n["d"])("label",null,"Delay between frames (ms)",-1)})),A=c((function(){return Object(n["d"])("br",null,null,-1)})),B=c((function(){return Object(n["d"])("br",null,null,-1)}));function R(t,e,o,r,c,R){return Object(n["e"])(),Object(n["c"])("div",l,[i,Object(n["d"])("div",a,["choose"==c.colorType?(Object(n["e"])(),Object(n["c"])("div",s,[u,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.color=t}),type:"color"},null,512),[[n["l"],c.color]])])):(Object(n["e"])(),Object(n["c"])("div",d,[h,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.colorTransitionSpeed=t}),type:"number"},null,512),[[n["l"],c.colorTransitionSpeed]])])),Object(n["d"])("form",b,[Object(n["m"])(Object(n["d"])("input",{type:"radio",id:"choose-color",value:"choose","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.colorType=t})},null,512),[[n["k"],c.colorType]]),p,f,Object(n["m"])(Object(n["d"])("input",{type:"radio",id:"random-colors",value:"random","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.colorType=t})},null,512),[[n["k"],c.colorType]]),m,y,Object(n["m"])(Object(n["d"])("input",{type:"radio",id:"change-colors",value:"change","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.colorType=t})},null,512),[[n["k"],c.colorType]]),j,O,Object(n["m"])(Object(n["d"])("input",{type:"radio",id:"change-colors-gray",value:"change-gray","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.colorType=t})},null,512),[[n["k"],c.colorType]]),v]),g,Object(n["d"])("div",M,[x,Object(n["m"])(Object(n["d"])("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=function(t){return c.collissionsActive=t})},null,512),[[n["j"],c.collissionsActive]])]),w,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return c.gravity=t}),type:"number",step:"0.1",min:"0.0"},null,512),[[n["l"],c.gravity]]),T,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[8]||(e[8]=function(t){return c.bouncePercent=t}),type:"number",step:"0.1",min:"0.0"},null,512),[[n["l"],c.bouncePercent]]),C,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[9]||(e[9]=function(t){return c.radius=t}),type:"number",step:"5",min:"5",max:"200"},null,512),[[n["l"],c.radius]]),F,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[10]||(e[10]=function(t){return c.bounceRandomness=t}),type:"number",min:"0",step:"10"},null,512),[[n["l"],c.bounceRandomness]]),k,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[11]||(e[11]=function(t){return c.bounceRandomnessX=t}),type:"number",min:"0",step:"10"},null,512),[[n["l"],c.bounceRandomnessX]]),D,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[12]||(e[12]=function(t){return c.dropDelay=t}),type:"number",step:"5"},null,512),[[n["l"],c.dropDelay]]),P,Object(n["m"])(Object(n["d"])("input",{"onUpdate:modelValue":e[13]||(e[13]=function(t){return c.frameDelay=t}),type:"number",step:"5"},null,512),[[n["l"],c.frameDelay]]),A,Object(n["d"])("label",null,"Number balls: "+Object(n["i"])(this.objects.length),1),Object(n["d"])("button",{onClick:e[14]||(e[14]=function(){return R.addBall&&R.addBall.apply(R,arguments)})}," Add Ball"),Object(n["d"])("button",{onClick:e[15]||(e[15]=function(t){return R.addManyBalls(10)})},"Add 10"),Object(n["d"])("button",{onClick:e[16]||(e[16]=function(t){return R.addManyBalls(100)})},"Add 100"),B,Object(n["d"])("button",{onClick:e[17]||(e[17]=function(){return R.reset&&R.reset.apply(R,arguments)})},"Drop"),Object(n["d"])("button",{onClick:e[18]||(e[18]=function(){return R.clear&&R.clear.apply(R,arguments)})},"Clear All"),Object(n["d"])("button",{style:{background:"grey"},onClick:e[19]||(e[19]=function(){return R.resetAll&&R.resetAll.apply(R,arguments)})},"Reset All")])])}var S=o("5530"),U=(o("cb29"),4),V=["#4285F4","#EA4335","#FBBC05","#34A853"],q={name:"Game",data:function(){return{color:"#0095DD",colorType:"change",colorFrom:null,colorTo:null,colorCurrent:null,colorTransitionSpeed:10,collissionsActive:!1,canvas:null,ctx:null,gravity:.1,bouncePercent:.9,wind:0,bounceRandomness:0,bounceRandomnessX:0,dropDelay:5,frameDelay:0,radius:15,objects:[]}},created:function(){this.addManyBalls(100)},mounted:function(){this.canvas=document.getElementById("game-canvas"),this.ctx=this.canvas.getContext("2d"),this.drawFrame()},methods:{updateObjPosition:function(t){var e=this.objects[t];if(e.x+=e.dx,e.y+=e.dy,0==e.dx&&(e.x==this.canvas.width-this.radius&&this.wind>0||e.x==this.radius&&this.wind<0)||(e.dx+=this.wind),e.y==this.canvas.height-this.radius&&0==e.dy||(e.dy+=this.gravity),null!=e.collided){var o=e.collided,n=Math.sqrt(Math.pow(e.x-this.objects[o].x,2)+Math.pow(e.y-this.objects[o].y,2));while(n<2*this.radius)e.x+=e.dx,e.y+=e.dy,n=Math.sqrt(Math.pow(e.x-this.objects[o].x,2)+Math.pow(e.y-this.objects[o].y,2));e.collided=null}if(this.collissionsActive)for(var r=parseInt(t)+1;r<this.objects.length;r++)if(this.objects[r]){var c=Math.sqrt(Math.pow(e.x-this.objects[r].x,2)+Math.pow(e.y-this.objects[r].y,2));if(c<2*this.radius){this.objects[r].collided=t;var l=Math.asin((e.y-this.objects[r].y)/c);l=Math.abs(l);var i=Math.sqrt(Math.pow(e.dx,2)+Math.pow(e.dy,2)),a=Math.sqrt(Math.pow(this.objects[r].dx,2)+Math.pow(this.objects[r].dy,2)),s=i*Math.sin(l),u=i*Math.cos(l),d=a*Math.sin(l),h=a*Math.cos(l);return e.dx=u*Math.sin(l)+d*Math.cos(l),e.dy=u*Math.cos(l)+d*Math.sin(l),this.objects[r].dx=h*Math.sin(l)+s*Math.cos(l),void(this.objects[r].dy=h*Math.cos(l)+s*Math.sin(l))}}(e.x>this.canvas.width-this.radius&&e.dx>0||e.x<this.radius&&e.dx<0)&&(e.dx=-e.dx*Math.sqrt(this.bouncePercent),Math.abs(e.dx)<U*Math.abs(this.wind)&&(e.x=e.x>this.canvas.width-this.radius?this.canvas.width-this.radius:this.radius,e.dx=0)),e.y>this.canvas.height-this.radius&&e.dy>0&&(e.dy=-e.dy*Math.sqrt(this.bouncePercent),e.dx+=Math.random()*this.bounceRandomness*e.dy*.01-this.bounceRandomness*e.dy*.01/2,Math.abs(e.dy)<U*this.gravity&&(e.y=this.canvas.height-this.radius,e.dy=0))},drawShape:function(t){var e=this.objects[t],o=this.ctx;o.beginPath(),o.arc(e.x,e.y,this.radius,0,2*Math.PI),o.fillStyle="random"==this.colorType?e.color:this.color,o.fill(),o.closePath(),this.updateObjPosition(t)},drawFrame:function(){var t=this;for(var e in this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.updateColor(),this.objects)this.objects[e].hide||this.drawShape(e);this.frameDelay?setTimeout((function(){return requestAnimationFrame(t.drawFrame)}),this.frameDelay):requestAnimationFrame(this.drawFrame)},updateColor:function(){"change"!=this.colorType&&"change-gray"!=this.colorType||((null==this.colorFrom||null==this.colorTo||this.colorFrom.r<this.colorTo.r&&this.colorCurrent.r>this.colorTo.r||this.colorFrom.r>this.colorTo.r&&this.colorCurrent.r<this.colorTo.r||this.colorFrom.r==this.colorTo.r)&&("change-gray"==this.colorType?(null!=this.colorTo?this.colorFrom=Object(S["a"])({},this.colorTo):this.colorFrom={r:0,g:0,b:0},this.colorTo=this.colorFrom.r>127?{r:0,g:0,b:0}:{r:245,g:245,b:245}):(null!=this.colorTo?this.colorFrom=Object(S["a"])({},this.colorTo):this.colorFrom={r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random())},this.colorTo={r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random())})),this.colorCurrent?(this.colorCurrent.r+=(this.colorTo.r-this.colorFrom.r)*this.colorTransitionSpeed/2e3,this.colorCurrent.g+=(this.colorTo.g-this.colorFrom.g)*this.colorTransitionSpeed/2e3,this.colorCurrent.b+=(this.colorTo.b-this.colorFrom.b)*this.colorTransitionSpeed/2e3):this.colorCurrent=Object(S["a"])({},this.colorFrom),this.color="rgb("+Math.floor(this.colorCurrent.r)+", "+Math.floor(this.colorCurrent.g)+", "+Math.floor(this.colorCurrent.b)+")")},addBall:function(){var t={x:this.getRandX(),y:0,dx:0,dy:0,radius:50,color:V[Math.floor(4*Math.random())]};this.objects.push(t)},addManyBalls:function(t){for(var e=this,o=0;o<t;o++)setTimeout((function(){return e.addBall()}),o*this.dropDelay)},getRandX:function(){return Math.random()*(this.canvas.width-2*this.radius)+this.radius},reset:function(){var t=this,e=function(e){var o=t.objects[e];o.hide=!0,setTimeout((function(){o.x=t.getRandX(),o.y=0,o.dy=0,o.dx=0,o.hide=!1}),e*t.dropDelay+300)};for(var o in this.objects)e(o)},clear:function(){this.objects.length=0},resetAll:function(){this.objects.length=0,this.gravity=.6,this.radius=50,this.bouncePercent=.7,this.wind=0,this.color="#0095DD",this.dropDelay=100}}},_=(o("ae02"),o("6b0d")),X=o.n(_);const G=X()(q,[["render",R],["__scopeId","data-v-2406a346"]]);var I=G,E={name:"App",components:{Game:I}};o("c37f");const J=X()(E,[["render",r]]);var N=J;Object(n["a"])(N).mount("#app")},5851:function(t,e,o){},ae02:function(t,e,o){"use strict";o("5851")},b811:function(t,e,o){},c37f:function(t,e,o){"use strict";o("b811")}});
//# sourceMappingURL=app.0d33f9ad.js.map
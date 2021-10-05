(function(t){function e(e){for(var o,s,c=e[0],l=e[1],a=e[2],d=0,h=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function i(t,e,n,i,r,s){var c=Object(o["i"])("Game");return Object(o["f"])(),Object(o["b"])(c)}var r=n("ade3"),s=function(t){return Object(o["h"])("data-v-6f4e5848"),t=t(),Object(o["g"])(),t},c={class:"game-screen"},l={class:"options"},a={class:"check-row"},u=s((function(){return Object(o["d"])("label",null,"Background Color",-1)})),d={key:0,class:"check-row"},h=s((function(){return Object(o["d"])("label",null,"Color",-1)})),b={key:1,class:"check-col"},p=s((function(){return Object(o["d"])("label",null,"Color transition speed",-1)})),y={class:"check-row"},f=s((function(){return Object(o["d"])("label",{for:"choose-color"}," Choose Color ",-1)})),m=s((function(){return Object(o["d"])("br",null,null,-1)})),g=s((function(){return Object(o["d"])("label",{for:"random-colors"}," Random Colors ",-1)})),j=s((function(){return Object(o["d"])("br",null,null,-1)})),O=s((function(){return Object(o["d"])("label",{for:"change-colors"}," Changing Colors ",-1)})),v=s((function(){return Object(o["d"])("br",null,null,-1)})),x=s((function(){return Object(o["d"])("label",{for:"change-colors-gray"}," Changing Colors (Gray) ",-1)})),C=s((function(){return Object(o["d"])("br",null,null,-1)})),w={class:"check-row"},M=s((function(){return Object(o["d"])("label",null,"Keep Color Trails?",-1)})),k={class:"check-row"},T=s((function(){return Object(o["d"])("label",null,"Collissions?",-1)})),S={class:"check-row"},B=s((function(){return Object(o["d"])("label",null,"Side Walls?",-1)})),D=s((function(){return Object(o["d"])("label",null,"Gravity",-1)})),V=s((function(){return Object(o["d"])("label",null,"Bounciness",-1)})),A=s((function(){return Object(o["d"])("label",null,"Ball Radius",-1)})),E=s((function(){return Object(o["d"])("label",null,"Wind (x)",-1)})),F=s((function(){return Object(o["d"])("label",null,"Bounce randomness Y (%)",-1)})),R=s((function(){return Object(o["d"])("label",null,"Bounce randomness X (%)",-1)})),U=s((function(){return Object(o["d"])("label",null,"Delay between drops (ms)",-1)})),P=s((function(){return Object(o["d"])("label",null,"Delay between frames (ms)",-1)})),I={class:"check-row"},W=s((function(){return Object(o["d"])("label",{for:"choose-color"}," Centered Drop ",-1)})),X=s((function(){return Object(o["d"])("br",null,null,-1)})),q=s((function(){return Object(o["d"])("label",{for:"random-colors"}," Pattern Drop ",-1)})),_=s((function(){return Object(o["d"])("br",null,null,-1)})),Y=s((function(){return Object(o["d"])("label",{for:"change-colors"}," Random Drop ",-1)})),G=s((function(){return Object(o["d"])("br",null,null,-1)})),N=s((function(){return Object(o["d"])("br",null,null,-1)})),H=s((function(){return Object(o["d"])("br",null,null,-1)}));function J(t,e,n,i,s,J){return Object(o["f"])(),Object(o["c"])("div",c,[Object(o["d"])("div",l,[Object(o["d"])("button",{class:"expand-settings-button",onClick:e[0]||(e[0]=function(){return J.colorSettingsClick&&J.colorSettingsClick.apply(J,arguments)}),style:Object(o["e"])(s.colorSettingsClosed?{background:"#efefef"}:Object(r["a"])({color:"white",background:"rgb(2,0,36)"},"background","linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"))}," Colors ",4),Object(o["d"])("div",{id:"color-settings",class:"expand-settings",style:Object(o["e"])(s.colorSettingsClosed?{height:0,opacity:0,pointerEvents:"none"}:{height:"250px"})},[Object(o["d"])("div",a,[u,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.backgroundColor=t}),type:"color"},null,512),[[o["m"],s.backgroundColor]])]),"choose"==s.colorType?(Object(o["f"])(),Object(o["c"])("div",d,[h,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return s.color=t}),type:"color"},null,512),[[o["m"],s.color]])])):(Object(o["f"])(),Object(o["c"])("div",b,[p,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return s.colorTransitionSpeed=t}),type:"number"},null,512),[[o["m"],s.colorTransitionSpeed]])])),Object(o["d"])("form",y,[Object(o["n"])(Object(o["d"])("input",{type:"radio",id:"choose-color",value:"choose","onUpdate:modelValue":e[4]||(e[4]=function(t){return s.colorType=t})},null,512),[[o["l"],s.colorType]]),f,m,Object(o["n"])(Object(o["d"])("input",{type:"radio",id:"random-colors",value:"random","onUpdate:modelValue":e[5]||(e[5]=function(t){return s.colorType=t})},null,512),[[o["l"],s.colorType]]),g,j,Object(o["n"])(Object(o["d"])("input",{type:"radio",id:"change-colors",value:"change","onUpdate:modelValue":e[6]||(e[6]=function(t){return s.colorType=t})},null,512),[[o["l"],s.colorType]]),O,v,Object(o["n"])(Object(o["d"])("input",{type:"radio",id:"change-colors-gray",value:"change-gray","onUpdate:modelValue":e[7]||(e[7]=function(t){return s.colorType=t})},null,512),[[o["l"],s.colorType]]),x]),C,Object(o["d"])("div",w,[M,Object(o["n"])(Object(o["d"])("input",{type:"checkbox","onUpdate:modelValue":e[8]||(e[8]=function(t){return s.keepColorTrails=t})},null,512),[[o["k"],s.keepColorTrails]])])],4),Object(o["d"])("button",{class:"expand-settings-button",onClick:e[9]||(e[9]=function(){return J.physicsSettingsClick&&J.physicsSettingsClick.apply(J,arguments)}),style:Object(o["e"])(s.physicsSettingsClosed?{background:"#efefef"}:{background:"#F46A35",color:"white"})}," Physics ",4),Object(o["d"])("div",{id:"physics-settings",class:"expand-settings",style:Object(o["e"])(s.physicsSettingsClosed?{height:0,opacity:0,pointerEvents:"none"}:{height:"520px"})},[Object(o["d"])("div",k,[T,Object(o["n"])(Object(o["d"])("input",{type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=function(t){return s.collissionsActive=t})},null,512),[[o["k"],s.collissionsActive]])]),Object(o["d"])("div",S,[B,Object(o["n"])(Object(o["d"])("input",{type:"checkbox","onUpdate:modelValue":e[11]||(e[11]=function(t){return s.sideWalls=t})},null,512),[[o["k"],s.sideWalls]])]),D,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[12]||(e[12]=function(t){return s.gravity=t}),type:"number",step:"0.1",min:"0.0"},null,512),[[o["m"],s.gravity]]),V,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[13]||(e[13]=function(t){return s.bouncePercent=t}),type:"number",step:"0.1",min:"0.0"},null,512),[[o["m"],s.bouncePercent]]),A,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[14]||(e[14]=function(t){return s.radius=t}),type:"number",step:"5",min:"5",max:"200"},null,512),[[o["m"],s.radius]]),E,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[15]||(e[15]=function(t){return s.wind=t}),type:"number",step:".1"},null,512),[[o["m"],s.wind]]),F,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[16]||(e[16]=function(t){return s.bounceRandomness=t}),type:"number",min:"0",step:"10"},null,512),[[o["m"],s.bounceRandomness]]),R,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[17]||(e[17]=function(t){return s.bounceRandomnessX=t}),type:"number",min:"0",step:"10"},null,512),[[o["m"],s.bounceRandomnessX]]),U,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[18]||(e[18]=function(t){return s.dropDelay=t}),type:"number",step:"5"},null,512),[[o["m"],s.dropDelay]]),P,Object(o["n"])(Object(o["d"])("input",{"onUpdate:modelValue":e[19]||(e[19]=function(t){return s.frameDelay=t}),type:"number",step:"5"},null,512),[[o["m"],s.frameDelay]]),Object(o["d"])("div",null,[Object(o["d"])("button",{onClick:e[20]||(e[20]=function(t){return J.changeAllVx(-2)})}," Decrease Velocity (-x)"),Object(o["d"])("button",{onClick:e[21]||(e[21]=function(t){return J.changeAllVx(2)})}," Increase Velocity (x)")]),Object(o["d"])("div",null,[Object(o["d"])("button",{onClick:e[22]||(e[22]=function(t){return J.changeAllVy(-2)})}," Decrease Velocity (-y)"),Object(o["d"])("button",{onClick:e[23]||(e[23]=function(t){return J.changeAllVy(2)})}," Increase Velocity (y)")])],4),Object(o["d"])("button",{id:"main-settings-button",class:"expand-settings-button",onClick:e[24]||(e[24]=function(){return J.mainSettingsClick&&J.mainSettingsClick.apply(J,arguments)}),style:Object(o["e"])(s.mainSettingsClosed?{background:"#efefef"}:{background:"gray",color:"white"})}," Main ",4),Object(o["d"])("div",{id:"main-settings",class:"expand-settings",style:Object(o["e"])(s.mainSettingsClosed?{height:0,opacity:0,pointerEvents:"none"}:{height:"380px"})},[Object(o["d"])("form",I,[Object(o["n"])(Object(o["d"])("input",{type:"radio",id:"choose-color",value:"center","onUpdate:modelValue":e[25]||(e[25]=function(t){return s.xDrop=t})},null,512),[[o["l"],s.xDrop]]),W,X,Object(o["n"])(Object(o["d"])("input",{type:"radio",id:"random-colors",value:"pattern","onUpdate:modelValue":e[26]||(e[26]=function(t){return s.xDrop=t})},null,512),[[o["l"],s.xDrop]]),q,_,Object(o["n"])(Object(o["d"])("input",{type:"radio",id:"change-colors",value:"random","onUpdate:modelValue":e[27]||(e[27]=function(t){return s.xDrop=t})},null,512),[[o["l"],s.xDrop]]),Y,G]),N,Object(o["d"])("label",null,"Average Speed: "+Object(o["j"])(s.averageBallSpeed),1),Object(o["d"])("label",null,"Number balls: "+Object(o["j"])(this.objects.length),1),Object(o["d"])("button",{onClick:e[28]||(e[28]=function(){return J.addBall&&J.addBall.apply(J,arguments)})}," Add Ball"),Object(o["d"])("button",{onClick:e[29]||(e[29]=function(t){return J.addManyBalls(10)})},"Add 10"),Object(o["d"])("button",{onClick:e[30]||(e[30]=function(t){return J.addManyBalls(100)})},"Add 100"),H,Object(o["d"])("button",{onClick:e[31]||(e[31]=function(){return J.reset&&J.reset.apply(J,arguments)})},"Drop"),Object(o["d"])("button",{onClick:e[32]||(e[32]=function(){return J.clear&&J.clear.apply(J,arguments)})},"Clear All"),Object(o["d"])("button",{style:{background:"grey"},onClick:e[33]||(e[33]=function(){return J.resetAll&&J.resetAll.apply(J,arguments)})},"Reset All")],4)]),Object(o["d"])("canvas",{id:"game-canvas",width:"600",height:"800",style:Object(o["e"])("background: "+s.backgroundColor)},null,4)])}var K=n("5530"),z=(n("cb29"),n("159b"),4),L=["#4285F4","#EA4335","#FBBC05","#34A853"],Q={name:"Game",data:function(){return{colorSettingsClosed:!0,physicsSettingsClosed:!0,mainSettingsClosed:!0,backgroundColor:"#ffffff",color:"#0095DD",colorType:"change",colorFrom:null,colorTo:null,colorCurrent:null,colorTransitionSpeed:10,keepColorTrails:!1,collissionsActive:!1,sideWalls:!0,gravity:.2,bouncePercent:.9,wind:0,bounceRandomness:5,bounceRandomnessX:30,dropDelay:20,frameDelay:0,radius:15,xDrop:"center",averageBallSpeed:0,canvas:null,ctx:null,objects:[]}},created:function(){this.addManyBalls(100)},mounted:function(){var t=this;this.canvas=document.getElementById("game-canvas");var e=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),n=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);e-80<this.canvas.height&&(this.canvas.height=e-80),this.canvas.style.height=this.canvas.height+"px",n-60<this.canvas.width&&(this.canvas.width=n-60),this.canvas.style.width=this.canvas.width+"px",document.getElementsByClassName("options")[0].style.height<this.canvas.height-10&&(document.getElementsByClassName("options")[0].style.height=this.canvas.height-10+"px"),setInterval((function(){return t.averageBallSpeed=t.getAverageBallSpeed()}),500),this.ctx=this.canvas.getContext("2d"),this.drawFrame()},methods:{updateObjPosition:function(t){var e=this.objects[t];if(e.x+=e.dx,e.y+=e.dy,0==e.dx&&(e.x==this.canvas.width-this.radius&&this.wind>0||e.x==this.radius&&this.wind<0)||(e.dx+=this.wind),e.y==this.canvas.height-this.radius&&0==e.dy||(e.dy+=this.gravity),this.collissionsActive)for(var n=0;n<this.objects.length;n++)if(this.objects[n]&&n!=t){var o=Math.sqrt(Math.pow(e.x-this.objects[n].x,2)+Math.pow(e.y-this.objects[n].y,2));if(o<2*this.radius){var i=Math.asin((e.y-this.objects[n].y)/o);i=Math.abs(i);var r=Math.sqrt(Math.pow(e.dx,2)+Math.pow(e.dy,2)),s=Math.sqrt(Math.pow(this.objects[n].dx,2)+Math.pow(this.objects[n].dy,2)),c=r*Math.sin(i),l=r*Math.cos(i),a=s*Math.sin(i),u=s*Math.cos(i);return e.dx=(e.dx>0?l:-l)*Math.sin(i)+(e.x>this.objects[n].x?a:-a)*Math.cos(i),e.dy=(e.dy>0?l:-l)*Math.cos(i)+(e.y>this.objects[n].y?a:-a)*Math.sin(i),this.objects[n].dx=(this.objects[n].dx>0?u:-u)*Math.sin(i)+(e.x<this.objects[n].x?c:-c)*Math.cos(i),void(this.objects[n].dy=(this.objects[n].dy>0?u:-u)*Math.cos(i)+(e.y<this.objects[n].y?c:-c)*Math.sin(i))}}!this.sideWalls&&e.x>this.canvas.width+this.radius?e.x=-this.radius:!this.sideWalls&&e.x<-this.radius&&(e.x=this.canvas.width+this.radius),this.sideWalls&&(e.x>this.canvas.width-this.radius&&e.dx>0||e.x<this.radius&&e.dx<0)&&(e.dx=-e.dx*Math.sqrt(this.bouncePercent),Math.abs(e.dx)<z*Math.abs(this.wind)&&(e.x=e.x>this.canvas.width-this.radius?this.canvas.width-this.radius:this.radius,e.dx=0)),(e.y>this.canvas.height-this.radius&&e.dy>0||e.y<this.radius&&e.dy<0)&&(e.dy=-e.dy*Math.sqrt(this.bouncePercent)*(1-(Math.random()*this.bounceRandomness*.01-.01*this.bounceRandomness/2)),e.dx+=Math.random()*this.bounceRandomnessX*e.dy*.01-this.bounceRandomnessX*e.dy*.01/2,Math.abs(e.dy)<z*this.gravity&&e.y>this.canvas.height-this.radius&&(e.y=this.canvas.height-this.radius,e.dy=0))},drawShape:function(t){var e=this.objects[t],n=this.ctx;n.beginPath(),n.arc(e.x,e.y,this.radius,0,2*Math.PI),n.fillStyle="random"==this.colorType?e.color:this.color,n.fill(),n.closePath(),this.updateObjPosition(t)},drawFrame:function(){var t=this;for(var e in this.keepColorTrails||this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.updateColor(),this.objects)this.objects[e].hide||this.drawShape(e);this.frameDelay?setTimeout((function(){return requestAnimationFrame(t.drawFrame)}),this.frameDelay):requestAnimationFrame(this.drawFrame)},updateColor:function(){"change"!=this.colorType&&"change-gray"!=this.colorType||((null==this.colorFrom||null==this.colorTo||this.colorFrom.r<this.colorTo.r&&this.colorCurrent.r>this.colorTo.r||this.colorFrom.r>this.colorTo.r&&this.colorCurrent.r<this.colorTo.r||this.colorFrom.r==this.colorTo.r)&&("change-gray"==this.colorType?(null!=this.colorTo?this.colorFrom=Object(K["a"])({},this.colorTo):this.colorFrom={r:0,g:0,b:0},this.colorTo=this.colorFrom.r>127?{r:0,g:0,b:0}:{r:245,g:245,b:245}):(null!=this.colorTo?this.colorFrom=Object(K["a"])({},this.colorTo):this.colorFrom={r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random())},this.colorTo={r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random())})),this.colorCurrent?(this.colorCurrent.r+=(this.colorTo.r-this.colorFrom.r)*this.colorTransitionSpeed/2e3,this.colorCurrent.g+=(this.colorTo.g-this.colorFrom.g)*this.colorTransitionSpeed/2e3,this.colorCurrent.b+=(this.colorTo.b-this.colorFrom.b)*this.colorTransitionSpeed/2e3):this.colorCurrent=Object(K["a"])({},this.colorFrom),this.color="rgb("+Math.floor(this.colorCurrent.r)+", "+Math.floor(this.colorCurrent.g)+", "+Math.floor(this.colorCurrent.b)+")")},changeAllVx:function(t){this.objects.forEach((function(e){e.dx+=t}))},changeAllVy:function(t){this.objects.forEach((function(e){e.dy-=t}))},getAverageBallSpeed:function(){var t=0;return this.objects.forEach((function(e){t+=Math.sqrt(Math.pow(e.dx,2)+Math.pow(e.dy,2))})),t/this.objects.length},addBall:function(t){var e={x:isNaN(t)?this.getRandX():t,y:0,dx:0,dy:0==this.gravity||"center"==this.xDrop&&this.collissionsActive?5:0,color:L[Math.floor(4*Math.random())]};this.objects.push(e)},addManyBalls:function(t){for(var e=this,n=5,o=this.radius+n,i=0;i<t;i++)"pattern"==this.xDrop?function(){var t=o;setTimeout((function(){return e.addBall(t)}),i*e.dropDelay),o+=2*e.radius+n,o>e.canvas.width-e.radius-n&&(o=e.radius)}():setTimeout((function(){return e.addBall()}),i*this.dropDelay)},getRandX:function(){return"random"==this.xDrop?Math.random()*(this.canvas.width-2*this.radius)+this.radius:this.canvas.width/2},reset:function(){var t=this,e=5,n=this.radius+e,o=function(o){var i=t.objects[o];i.hide=!0;var r=n;setTimeout((function(){i.x="pattern"==t.xDrop?r:t.getRandX(),i.y=0,i.dy=1,i.dx=0,i.hide=!1}),o*t.dropDelay+300),n+=2*t.radius+e,n>t.canvas.width-t.radius-e&&(n=t.radius)};for(var i in this.objects)o(i)},clear:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.objects.length=0},resetAll:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.objects.length=0,this.gravity=.2,this.radius=15,this.bouncePercent=.9,this.wind=0,this.color="#0095DD",this.dropDelay=20,this.keepColorTrails=!1,this.collissionsActive=!1,this.sideWalls=!0,this.colorTransitionSpeed=10,this.colorType="change",this.bounceRandomness=5,this.bounceRandomnessX=30,this.xDrop="center",this.frameDelay=0},colorSettingsClick:function(){var t=this;this.colorSettingsClosed=!this.colorSettingsClosed,this.colorSettingsClosed?(document.getElementById("color-settings").style.transition="height .3s ease .1s, opacity .3s",setTimeout((function(){return document.getElementById("color-settings").style.overflowY=t.colorSettingsClosed?"hidden":""}),1e3)):(document.getElementById("color-settings").style.transition="",document.getElementById("color-settings").style.overflowY="")},physicsSettingsClick:function(){var t=this;this.physicsSettingsClosed=!this.physicsSettingsClosed,this.physicsSettingsClosed?(document.getElementById("physics-settings").style.transition="height .3s ease .1s, opacity .3s",setTimeout((function(){return document.getElementById("physics-settings").style.overflowY=t.physicsSettingsClosed?"hidden":""}),1e3)):(document.getElementById("physics-settings").style.transition="",document.getElementById("physics-settings").style.overflowY="")},mainSettingsClick:function(){var t=this;this.mainSettingsClosed=!this.mainSettingsClosed,this.mainSettingsClosed?(document.getElementById("main-settings").style.transition="height .3s ease .1s, opacity .3s",setTimeout((function(){return document.getElementById("main-settings").style.overflowY=t.mainSettingsClosed?"hidden":""}),0)):(document.getElementById("main-settings").style.transition="all .7s",document.getElementById("main-settings").style.overflowY="")}}},Z=(n("bd15"),n("6b0d")),$=n.n(Z);const tt=$()(Q,[["render",J],["__scopeId","data-v-6f4e5848"]]);var et=tt,nt={name:"App",components:{Game:et}};n("8348");const ot=$()(nt,[["render",i]]);var it=ot;Object(o["a"])(it).mount("#app")},8348:function(t,e,n){"use strict";n("8a09")},"8a09":function(t,e,n){},"8a51":function(t,e,n){},bd15:function(t,e,n){"use strict";n("8a51")}});
//# sourceMappingURL=app.3ae9f70e.js.map
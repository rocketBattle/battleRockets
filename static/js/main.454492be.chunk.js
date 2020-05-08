(this["webpackJsonpbattle-rockets"]=this["webpackJsonpbattle-rockets"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(28),r=a.n(c),i=a(2),s=a(3),l=a(5),h=a(4),u=(a(37),a(13)),k=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",null,"Battle Rockets!"),n.a.createElement("h3",null,"Destroy enemy's rockets before they boom yours!"))),n.a.createElement("main",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("h2",null,"How to play"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"Start by placing rockets on the board")),n.a.createElement("li",null,n.a.createElement("p",null,"Pass the device to another player to do the same")),n.a.createElement("li",null,n.a.createElement("p",null,"Try to hit and boom your opponent's rockets by guessing where they are hidden on the board, one square at a time")),n.a.createElement("li",null,n.a.createElement("p",null,"The person who booms 10 rockets wins!"))),n.a.createElement(u.b,{to:"GameBoard"},"enter the battle!"))),n.a.createElement("footer",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("h4",null,"Built by:"),n.a.createElement("a",{href:"portfolio.com"},"Alisa Kitkina"),n.a.createElement("a",{href:"portfolio.com"},"Mariya Morosovska"),n.a.createElement("a",{href:"portfolio.com"},"Miguel Cabrera"),n.a.createElement("a",{href:"https://lucassilbernagel.com/"},"Lucas Silbernagel"),n.a.createElement("h4",null,"Rocket data provided by ",n.a.createElement("a",{href:"https://docs.spacexdata.com/?version=latest"},"SpaceX Rocket API")))))}}]),a}(o.Component),d=a(12),m=a.n(d),b=(o.Component,a(31)),R={boardSize:7,rockets:[{falcon1:{numShips:1,shipLength:1,details:[{locations:[0],hits:[""]}]}},{falcon9:{numShips:1,shipLength:2,details:[{locations:[0,0],hits:["",""]}]}},{falconHeavy:{numShips:1,shipLength:3,details:[{locations:[0,0,0],hits:["","",""]}]}},{starship:{numShips:1,shipLength:4,details:[{locations:[0,0,0,0],hits:["","","",""]}]}}],boom:function(e){for(var t=0;t<R.rockets[t].numShips;t++){var a=this.rockets[t],o=a.location.indexOf(e);if("hit"===a.hits[o])return!0;if(o>=0)return a.hits[o]="hit",this.isSunk(a)&&this.shipsSunk++,!0}return!1},isDestroyed:function(e){for(var t=0;t<R.rockets.shipLength;t++)if("HIT"!==R.rockets.detail.hits[t])return!1;return!0},generateRocketLocations:function(){for(var e,t=0;t<R.rockets.numShips;t++){do{e=this.generateRocket()}while(this.collision(e));this.rockets[t].details.locations=e}console.log("rockets"),console.log(this.rockets)},generateRocket:function(){var e,t,a=Math.floor(2*Math.random());1===a?(e=Math.floor(Math.random()*R.boardSize),t=Math.floor(Math.random()*R.boardSize-R.rockets.shipLength+1)):(t=Math.floor(Math.random()*R.boardSize),e=Math.floor(Math.random()*R.boardSize-R.rockets.shipLength+1));for(var o=[],n=0;n<R.rockets.shipLength;n++)1===a?o.push(e+""+(t+1)):o.push(e+1+""+t);return o},collision:function(e){for(var t=0;t<R.rockets.numShips;t++)for(var a=R.rockets[t],o=0;o<e.length;o++)if(a.locations.indexOf(e[o])>=0)return!0;return!1},isSunk:function(e){for(var t=0;t<this.rockets[t].shipLength;t++)if("hit"!==e.hits[t])return!1;return!0}},p=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return R.boom(),n.a.createElement("div",null,n.a.createElement("p",null,"Hi hello hi"))}}]),a}(o.Component),f=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).button=n.a.createRef(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.button.current.focus()}},{key:"render",value:function(){var e=this.props.toggleModal;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"modal"},n.a.createElement("button",{ref:this.button,className:"closeModal","aria-label":"close form",onClick:e,tabIndex:"0"},"\xd7"),n.a.createElement("p",null,"You hit Falcon1"),n.a.createElement("p",null,"Miss!")),n.a.createElement("div",{className:"modalOverlay",onClick:e}))}}]),a}(n.a.Component),E=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).toggleModal=function(){e.setState((function(e){return{open:!e.open}}))},e.userGuess=function(t){if(null===t||2!==t.length)alert("need a valid guess please");else{var a=t.charAt(0),o=e.state.charArray.indexOf(a),n=t.charAt(1);if(isNaN(o)||isNaN(n))alert("not valid input");else{if(!(o<0||o>=e.state.boardSize||n<0||n>=e.state.boardSize))return o+n;alert("input not on the board")}}return null},e.newRocketGenerator=function(){return e.state.rocketLocation.map((function(){var t=e.state.charArray[Math.floor(Math.random()*e.state.charArray.length)]+(Math.floor(7*Math.random())+1);console.log(t)}))},e.generateRocketLocations=function(){for(var t,a=0;a<e.state.numRockets;a++){do{t=e.generateRocket()}while(e.collision(t));e.state.rocketLocation[a].location=t}console.log("rockets"),console.log(t)},e.collision=function(t){for(var a=0;a<e.state.numRockets;a++){e.state.numRockets[a];for(var o=0;o<4;o++)if(e.state.rocketLocation[o].indexOf(e.state.newRocketLocations[o])>=0)return!0}return!1},e.generateRocket=function(){var t,a,o=Math.floor(2*Math.random()),n=Object(b.a)(e.state.newRocketLocations);e.state.rocketLocation.map((function(c){1===o?(t=Math.floor(Math.random()*e.state.boardSize),a=Math.floor(Math.random()*e.state.boardSize-c.shipLength+1)):(a=Math.floor(Math.random()*e.state.boardSize),t=Math.floor(Math.random()*e.state.boardSize-c.shipLength+1));for(var r=0;r<c.shipLength;r++)console.log("hi"),1===o?n.push(t+""+(a+1)):n.push(t+1+""+a);return n})),e.setState({newRocketLocations:n})},e.handleUserInput=function(t){e.setState({userInput:t.target.value})},e.callFunction=function(e){return!0===e.hasRocketbeenHit?"shipHit":"normal"},e.checkHit=function(t){t.preventDefault(),e.userGuess(e.state.userInput),e.state.rocketLocation.map((function(t){if(t.location.includes(e.state.userInput)){var a=e.state.cellArray.map((function(t,a){return t.map((function(t){return e.state.userInput===t.id&&(t.hasRocketbeenHit=!0),t}))}));console.log(a),e.setState({cellArray:a})}}))},e.changeCellClass=function(){e.checkHit(),!1===e.state.empty&&(e.setState({hit:!e.state.hit}),console.log(e.state.hit))},e.state={empty:!0,open:!1,userInput:"",boardSize:7,charArray:["A","B","C","D","E","F","G"],hitClass:"",rocketLocation:[{name:"rocket1",shipLength:1,location:[]},{name:"rocket2",shipLength:2,location:[]},{name:"rocket3",shipLength:3,location:[]},{name:"rocket4",shipLength:4,location:[]}],cellArray:[[{id:"A1",hasRocket:!0,hasRocketbeenHit:!1},{id:"A2",hasRocket:!1,hasRocketbeenHit:!1},{id:"A3",hasRocket:!1,hasRocketbeenHit:!1},{id:"A4",hasRocket:!1,hasRocketbeenHit:!1},{id:"A5",hasRocket:!1,hasRocketbeenHit:!1},{id:"A6",hasRocket:!1,hasRocketbeenHit:!1},{id:"A7",hasRocket:!1,hasRocketbeenHit:!0}],[{id:"B1",hasRocket:!1,hasRocketbeenHit:!0},{id:"B2",hasRocket:!1,hasRocketbeenHit:!1},{id:"B3",hasRocket:!1,hasRocketbeenHit:!1},{id:"B4",hasRocket:!1,hasRocketbeenHit:!1},{id:"B5",hasRocket:!1,hasRocketbeenHit:!1},{id:"B6",hasRocket:!1,hasRocketbeenHit:!1},{id:"B7",hasRocket:!1,hasRocketbeenHit:!1}],[{id:"C1",hasRocket:!1,hasRocketbeenHit:!1},{id:"C2",hasRocket:!1,hasRocketbeenHit:!1},{id:"C3",hasRocket:!1,hasRocketbeenHit:!1},{id:"C4",hasRocket:!1,hasRocketbeenHit:!1},{id:"C5",hasRocket:!1,hasRocketbeenHit:!1},{id:"C6",hasRocket:!1,hasRocketbeenHit:!1},{id:"C7",hasRocket:!1,hasRocketbeenHit:!1}],[{id:"D1",hasRocket:!1,hasRocketbeenHit:!1},{id:"D2",hasRocket:!1,hasRocketbeenHit:!1},{id:"D3",hasRocket:!1,hasRocketbeenHit:!1},{id:"D4",hasRocket:!1,hasRocketbeenHit:!1},{id:"D5",hasRocket:!1,hasRocketbeenHit:!1},{id:"D6",hasRocket:!1,hasRocketbeenHit:!1},{id:"D7",hasRocket:!1,hasRocketbeenHit:!1}],[{id:"E1",hasRocket:!1,hasRocketbeenHit:!1},{id:"E2",hasRocket:!1,hasRocketbeenHit:!1},{id:"E3",hasRocket:!1,hasRocketbeenHit:!1},{id:"E4",hasRocket:!1,hasRocketbeenHit:!1},{id:"E5",hasRocket:!1,hasRocketbeenHit:!1},{id:"E6",hasRocket:!1,hasRocketbeenHit:!1},{id:"E7",hasRocket:!1,hasRocketbeenHit:!1}],[{id:"F1",hasRocket:!1,hasRocketbeenHit:!1},{id:"F2",hasRocket:!1,hasRocketbeenHit:!1},{id:"F3",hasRocket:!1,hasRocketbeenHit:!1},{id:"F4",hasRocket:!1,hasRocketbeenHit:!1},{id:"F5",hasRocket:!1,hasRocketbeenHit:!1},{id:"F6",hasRocket:!1,hasRocketbeenHit:!1},{id:"F7",hasRocket:!1,hasRocketbeenHit:!1}],[{id:"G1",hasRocket:!1,hasRocketbeenHit:!1},{id:"G2",hasRocket:!1,hasRocketbeenHit:!1},{id:"G3",hasRocket:!1,hasRocketbeenHit:!1},{id:"G4",hasRocket:!1,hasRocketbeenHit:!1},{id:"G5",hasRocket:!1,hasRocketbeenHit:!1},{id:"G6",hasRocket:!1,hasRocketbeenHit:!1},{id:"G7",hasRocket:!1,hasRocketbeenHit:!1}]],newRocketLocations:[],numRockets:4},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.newRocketGenerator()}},{key:"render",value:function(){var e=this,t=this.state.open,a=this.toggleModal;return n.a.createElement("div",{className:"board"},t&&n.a.createElement(f,{toggleModal:a}),n.a.createElement(p,null),n.a.createElement("div",{className:"messageArea"}),n.a.createElement("form",{action:"#",onSubmit:this.checkHit},n.a.createElement("table",null,n.a.createElement("tbody",null,this.state.cellArray.map((function(t){return n.a.createElement("tr",null,t.map((function(t){return n.a.createElement("td",{className:e.callFunction(t)},t.id)})))})))),n.a.createElement("input",{id:"userInput",onChange:this.handleUserInput,type:"text",placeholder:"A1"}),n.a.createElement("button",{onClick:a,id:"fireButton"},"Kill that mothafocka")))}}]),a}(o.Component),v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={coordinates1:[],cells1:void 0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement("h2",null,"player 1"),n.a.createElement("p",null,"place your damn rockets"),n.a.createElement("div",{className:"board"},n.a.createElement(E,null)))}}]),a}(o.Component),H=a(10),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(u.a,{basename:"/battleRockets"},n.a.createElement(H.a,{exact:!0,path:"/",component:k}),n.a.createElement(H.a,{exact:!0,path:"/GameBoard",component:v}))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.454492be.chunk.js.map
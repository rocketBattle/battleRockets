(this["webpackJsonpbattle-rockets"]=this["webpackJsonpbattle-rockets"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(29),r=a.n(o),c=a(2),i=a(3),l=a(5),u=a(4),h=(a(37),a(13)),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("h1",null,"Battle Rockets!"),s.a.createElement("h3",null,s.a.createElement("span",{className:"fatText"},"Destroy")," enemy's rockets before they ",s.a.createElement("span",{className:"fatText"},"boom")," yours!"))),s.a.createElement("main",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"battleLink"},s.a.createElement(h.b,{className:"enterBattle",to:"GameBoard"},"enter the battle!")),s.a.createElement("h2",null,"How to play"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("p",null,"Rockets are randomly generated for you and your opponent.")),s.a.createElement("li",null,s.a.createElement("p",null,"Your main goal is to ",s.a.createElement("span",{className:"fatText"},"boom")," your opponent's rockets by guessing where they are hidden on the board, one square at a time! ")),s.a.createElement("li",null,s.a.createElement("p",null,"With every rocket you hit, you get some cool info about SpaceX rockets!")),s.a.createElement("li",null,s.a.createElement("p",null,"The person who ",s.a.createElement("span",{className:"fatText"},"booms")," 10 rockets wins!"))))),s.a.createElement("footer",null,s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"footerContent"},s.a.createElement("div",{className:"creators"},s.a.createElement("h4",null,"Built by:"),s.a.createElement("div",{className:"creatorsLinks"},s.a.createElement("a",{href:"https://alisacodes.dev/",rel:"noreferrer",target:"_blank"},"Alisa Kitkina"),s.a.createElement("a",{href:"http://marichka.ca/",rel:"noreferrer",target:"_blank"},"Mariya Morosovska"),s.a.createElement("a",{href:"http://www.mcabrera.ca/",rel:"noreferrer",target:"_blank"},"Miguel Cabrera"),s.a.createElement("a",{href:"https://lucassilbernagel.com/",rel:"noreferrer",target:"_blank"},"Lucas Silbernagel"))),s.a.createElement("div",{className:"credits"},s.a.createElement("h4",null,"Rocket data provided by ",s.a.createElement("a",{href:"https://docs.spacexdata.com/?version=latest"},"SpaceX Rocket API")))))))}}]),a}(n.Component),d=a(9),k=a.n(d),b=(n.Component,a(15)),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getApiData=function(){var e=k.a.get("https://api.spacexdata.com/v3/rockets");k.a.all([e]).then(k.a.spread((function(){var e=arguments.length<=0?void 0:arguments[0];n.setState({rocketArray:[e]})}))).catch((function(e){console.log(e,"it didnt work!")}))},n.state={allDataArray:[],rocketArray:[],missionArray:[],shipArray:[],launchArray:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getApiData()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,this.state.rocketArray.map((function(t){return t.data.map((function(t){if(t.rocket_id===e.props.rocketName)return s.a.createElement("div",null,s.a.createElement("h2",null,"You hit a rocket. Good job, I guess."),s.a.createElement("h3",null,t.rocket_name),s.a.createElement("p",null,t.description),s.a.createElement("a",{href:t.wikipedia},"Find Out More Info"),s.a.createElement("div",null,s.a.createElement("img",{src:t.flickr_images[0],alt:""})))}))})))}}]),a}(n.Component);var R=function(e){return s.a.createElement("h2",null,"You missed the rocket, loser.")};var f=function(e){return e.isHitTrue?s.a.createElement(p,{rocketName:e.rocketName}):s.a.createElement(R,null)};var E=function(e){return s.a.createElement("div",{className:""},s.a.createElement("h2",null,"Don't be Safi."),";",s.a.createElement("h3",null,"You better like it, it took forever to fix."))},v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).didWeGetAHitYet=function(){n.props.cellArray.map((function(e){var t=e.find((function(e){return e.id===n.props.userInput}));t&&n.setState({isHitTrue:t.hasRocket,rocketName:t.name})}),Object(b.a)(n))},n.validateGuess=function(){var e=n.userGuess(n.props.userInput);if(console.log(n.props.userInput),e)return!0;n.setState({isValidGuess:!1})},n.userGuess=function(e){if(null===e||2!==e.length);else{var t=e.charAt(0),a=n.state.charArray2.indexOf(t),s=e.charAt(1);if(!(isNaN(a)||isNaN(s)||a<0||a>n.state.boardSize||s<=0||s>n.state.boardSize))return a+s}return null},n.button=s.a.createRef(),n.state={isHitTrue:!1,rocketName:"",charArray2:["A","B","C","D","E","F","G"],isValidGuess:!0,boardSize:7},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.button.current.focus(),this.didWeGetAHitYet(),this.validateGuess()}},{key:"render",value:function(){var e=this.props.toggleModal;return this.state.isValidGuess?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"modal"},s.a.createElement("button",{ref:this.button,className:"closeModal","aria-label":"close form",onClick:e,tabIndex:"0"},"\xd7"),s.a.createElement(f,{isHitTrue:this.state.isHitTrue,rocketName:this.state.rocketName})),s.a.createElement("div",{className:"modalOverlay",onClick:e})):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"modal"},s.a.createElement("button",{ref:this.button,className:"closeModal","aria-label":"close form",onClick:e,tabIndex:"0"},"\xd7"),s.a.createElement(E,null)),s.a.createElement("div",{className:"modalOverlay",onClick:e}))}}]),a}(s.a.Component),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).toggleModal=function(){e.setState((function(e){return{open:!e.open}}))},e.generateRocketLocations=function(){var t=e.state.rocketLocation.map((function(t){return e.generateRocketLocationz=function(){for(var a=[1,2,3,4,5,6,7],n=[],s=function(){var t=Math.floor(Math.random()*e.state.charArray.length),n=Math.floor(4*Math.random());return{letter:e.state.charArray[t],number:a[n]}}(),o=0;o<t.shipLength;o++)n.push("".concat(s.letter).concat(s.number+o)),t.location=n;!function(){var t=e.state.charArray;console.log(s);var a=t.indexOf(s.letter);t.splice(a,1),e.setState({charArray:t})}();var r=e.state.cellArray.map((function(e){return e.map((function(e){return t.location.includes(e.id)&&(e.hasRocket=!0,1===t.location.length?e.name="falcon1":2===t.location.length?e.name="falcon9":3===t.location.length?e.name="falconheavy":4===t.location.length&&(e.name="starship")),e}))}));e.setState({cellArray:r})},e.generateRocketLocationz(),t}));return e.setState({rocketLocation:t}),console.log(t)},e.handleUserInput=function(t){e.setState({userInput:t.target.value.toUpperCase()})},e.callFunction=function(e){return!0===e.hasRocket&&!0===e.hasRocketbeenHit?"shipHit":!1===e.hasRocket&&!0===e.hasRocketbeenHit?"blankHit":void 0},e.checkHit=function(t){t.preventDefault(),e.setState({userInput:""}),e.state.userHits===e.state.totalHits&&alert("gameover!"),e.state.rocketLocation.map((function(t){console.log("is this showing up?",t),t.location.includes(e.state.userInput)&&e.setState({userHits:e.state.userHits+1}),console.log(e.state.userHits);var a=e.state.cellArray.map((function(t){return t.map((function(t){return e.state.userInput===t.id&&(t.hasRocketbeenHit=!0,t.hasRocket||(t.missed=!0)),t}))}));e.setState({cellArray:a})})),console.log(e.state.userHits)},e.state={open:!1,userInput:"",boardSize:7,hitClass:"",charArray:["A","B","C","D","E","F","G"],rocketLocation:[{id:"falcon1",shipLength:1,location:[]},{id:"falcon9",shipLength:2,location:[]},{id:"falconheavy",shipLength:3,location:[]},{id:"starship",shipLength:4,location:[]}],cellArray:[[{id:"A1",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"A2",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"A3",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"A4",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"A5",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"A6",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"A7",hasRocket:!1,hasRocketbeenHit:!1,missed:!1}],[{id:"B1",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"B2",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"B3",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"B4",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"B5",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"B6",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"B7",hasRocket:!1,hasRocketbeenHit:!1,missed:!1}],[{id:"C1",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"C2",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"C3",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"C4",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"C5",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"C6",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"C7",hasRocket:!1,hasRocketbeenHit:!1,missed:!1}],[{id:"D1",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"D2",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"D3",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"D4",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"D5",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"D6",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"D7",hasRocket:!1,hasRocketbeenHit:!1,missed:!1}],[{id:"E1",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"E2",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"E3",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"E4",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"E5",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"E6",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"E7",hasRocket:!1,hasRocketbeenHit:!1,missed:!1}],[{id:"F1",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"F2",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"F3",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"F4",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"F5",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"F6",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"F7",hasRocket:!1,hasRocketbeenHit:!1,missed:!1}],[{id:"G1",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"G2",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"G3",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"G4",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"G5",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"G6",hasRocket:!1,hasRocketbeenHit:!1,missed:!1},{id:"G7",hasRocket:!1,hasRocketbeenHit:!1,missed:!1}]],newRocketLocations:[],numRockets:4,totalHits:9,userHits:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.generateRocketLocations()}},{key:"render",value:function(){var e=this,t=this.state.open,a=this.toggleModal;return s.a.createElement("div",{className:"board"},t&&s.a.createElement(v,{cellArray:this.state.cellArray,userInput:this.state.userInput,toggleModal:a}),s.a.createElement("form",{action:"#",onSubmit:this.checkHit},s.a.createElement("table",null,s.a.createElement("tbody",null,this.state.cellArray.map((function(t){return s.a.createElement("tr",null,t.map((function(t){return s.a.createElement("td",{className:e.callFunction(t)},t.id)})))})))),s.a.createElement("div",{className:"input"},s.a.createElement("input",{id:"userInput",onChange:this.handleUserInput,type:"text",placeholder:"A1",required:!0,value:this.state.userInput}),s.a.createElement("button",{onClick:a,id:"fireButton"},"Let's boom some rockets!"))))}}]),a}(n.Component),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={coordinates1:[],cells1:void 0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"boardContainer"},s.a.createElement("h2",null,"Player 1's turn!"),s.a.createElement("p",null,"Boom the opponent!"),s.a.createElement(H,null)))}}]),a}(n.Component),g=a(11),A=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(h.a,{basename:"/battleRockets"},s.a.createElement(g.a,{exact:!0,path:"/",component:m}),s.a.createElement(g.a,{exact:!0,path:"/GameBoard",component:y}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.cb28f55d.chunk.js.map
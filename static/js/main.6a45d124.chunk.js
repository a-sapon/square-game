(this["webpackJsonpstarnavi-test-task"]=this["webpackJsonpstarnavi-test-task"]||[]).push([[0],{121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=n(13),u=n(19),s=n.n(u),l=n(37),m=n(32),d=n(33),p=n(35),f=n(36),v=n(77),h=n(152),b=n(169),g=n(155),y=n(164),E=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:136},selectEmpty:{marginTop:e.spacing(2)}}}));function k(){var e=E(),t=r.a.useState(""),n=Object(v.a)(t,2),a=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(g.a,{className:e.formControl},r.a.createElement(b.a,{htmlFor:"age-native-simple"},"Game mode"),r.a.createElement(y.a,{native:!0,value:a,onChange:function(e){i(e.target.value)},name:"mode"},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:"easyMode"},"Easy"),r.a.createElement("option",{value:"normalMode"},"Normal"),r.a.createElement("option",{value:"hardMode"},"Hard"))))}var _=n(170),O=n(160),R=n(72),w=n.n(R),j=Object(h.a)((function(e){return{margin:{margin:e.spacing(1),minWidth:136}}}));function N(){var e=j();return r.a.createElement("div",{className:e.margin},r.a.createElement(O.a,{container:!0,spacing:1,alignItems:"flex-end"},r.a.createElement(O.a,{item:!0},r.a.createElement(w.a,null)),r.a.createElement(O.a,{item:!0},r.a.createElement(_.a,{name:"name",label:"Enter your name"}))))}var C,A=n(161),G=n(53),S=n.n(G),B=n(166),x=n(165),W=n(73),M=n.n(W),T=n(50),D=n.n(T),P="GET_GAME_MODE",F="GET_GAME_DELAY",I="SET_USERNAME",U="FILL_ARRAY",L="MAKE_BLUE",J="MAKE_RED",H="MAKE_GREEN",K="ADD_USER_POINT",Y="ADD_PC_POINT",q="USER_WINS",V="PC_WINS",X="END_GAME",z="RESET_STATE",Q="GET_WINNERS",Z=function(e){return{type:P,mode:e}},$=function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getDate(),a=e.getFullYear(),r=e.getHours(),i=e.getMinutes();return n=n<10?"0"+n:n,i=i<10?"0"+i:i,"".concat(r=r<10?"0"+r:r,":").concat(i," \u2014 ").concat(t," ").concat(n,", ").concat(a)},ee=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={winner:t,date:$()},e.next=3,D.a.post("https://starnavi-frontend-test-task.herokuapp.com/winners",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=Object(B.a)(A.a)({background:"linear-gradient(45deg, #474747 30%, #808080 90%)",color:"white",height:40,padding:"0 30px",marginTop:"8px"}),ne=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showErr:!1},e.handleSubmit=function(){var t=Object(l.a)(s.a.mark((function t(n){var a,r,i,c,o,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.props,r=a.getGameSettings,i=a.setUserName,c=a.resetState,n.preventDefault(),c(),o=n.currentTarget.elements.mode.value,u=n.currentTarget.elements.name.value,""!==o&&""!==u){t.next=9;break}return e.setState({showErr:!0}),setTimeout((function(){e.setState({showErr:!1})}),2500),t.abrupt("return");case 9:r(o),i(u);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.showErr,t=this.props.isGameOn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:S.a.submitForm},r.a.createElement(k,null),r.a.createElement(N,null),r.a.createElement(te,{type:"submit",variant:"contained"},t?"Play":"Play again")),r.a.createElement(x.a,{in:e,timeout:300,classNames:M.a,unmountOnExit:!0},r.a.createElement("div",{className:S.a.error},"Please choose the game mode and enter your name!")))}}]),n}(a.Component),ae=Object(o.b)((function(e){return{isGameOn:e.appReducer.mainReducer.isGameOn}}),{getGameSettings:function(e){return function(){var t=Object(l.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://starnavi-frontend-test-task.herokuapp.com/game-settings");case 2:for(r in(a=t.sent).data)r===e&&(n(Z(a.data[r].field)),n((i=a.data[r].delay,{type:F,delay:i})));case 4:case"end":return t.stop()}var i}),t)})));return function(e){return t.apply(this,arguments)}}()},setUserName:function(e){return{type:I,name:e}},resetState:function(){return{type:z}}})(ne),re=n(54),ie=n.n(re),ce="rgb(0, 102, 255)",oe=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={width:""},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.fillArray,a=t.blocksNum,r=t.delay,i=t.isGameOn;this.setWidth(),n(a),void 0!==C&&clearInterval(C),C=setInterval((function(){e.makeRandomBlockBlue(),e.makeBlockRed()}),r),!i&&clearInterval(C)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.user,r=n.arr;e.user.points!==a.points&&this.readyToCheckWinner(r)}},{key:"makeRandomBlockBlue",value:function(){var e=this.props,t=e.arr,n=e.makeBlue,a=e.isGameOn,r=Math.round(Math.random()*(t.length-1));""===t[r].bgColor?n(r):a&&this.makeRandomBlockBlue(),this.areAllBlocksPainted(t)}},{key:"makeBlockRed",value:function(){var e=this,t=this.props,n=t.arr,a=t.delay,r=t.makeRed,i=t.addPcPoint;n.forEach((function(t){"rgb(0, 204, 0)"!==t.bgColor&&""!==t.bgColor&&setTimeout((function(){t.bgColor===ce&&(i(),r(t.id),e.readyToCheckWinner(n))}),a)}))}},{key:"makeBlockGreen",value:function(e){var t=this.props,n=t.makeGreen,a=t.addUserPoint;e.target.style.backgroundColor===ce&&(a(),n(Number(e.target.dataset.id)))}},{key:"areAllBlocksPainted",value:function(e){var t=this.props,n=t.endGame,a=t.isGameOn;e.every((function(e){return""!==e.bgColor}))&&a&&n()}},{key:"readyToCheckWinner",value:function(e){var t=this.props,n=t.checkWinner,a=t.blocksNum,r=t.user,i=t.pc;e.every((function(e){return"rgb(0, 204, 0)"===e.bgColor||"rgb(255, 26, 26)"===e.bgColor}))&&n(a,r,i)}},{key:"setWidth",value:function(){25===this.props.blocksNum?this.setState({width:"250px"}):100===this.props.blocksNum?this.setState({width:"500px"}):this.setState({width:"750px"})}},{key:"render",value:function(){var e=this.state.width,t=this.makeBlockGreen.bind(this);return r.a.createElement("div",{onClick:t,className:ie.a.fieldContainer,style:{width:e}},this.props.arr.map((function(e){var t=e.id,n=e.bgColor;return r.a.createElement("div",{style:{backgroundColor:n},className:ie.a.fieldBlock,key:t,"data-id":t})})))}}]),n}(a.Component),ue=Object(o.b)((function(e){return{blocksNum:e.appReducer.mainReducer.fieldBlocksNum,arr:e.appReducer.blocksReducer,delay:e.appReducer.mainReducer.delay,user:e.appReducer.userReducer,pc:e.appReducer.pcReducer,isGameOn:e.appReducer.mainReducer.isGameOn}}),{fillArray:function(e){return function(t){for(var n=[],a=0;a<e;a+=1){var r={id:a,bgColor:""};n.push(r)}t({type:U,arr:n})}},makeBlue:function(e){return{type:L,id:e}},makeRed:function(e){return{type:J,id:e}},makeGreen:function(e){return{type:H,id:e}},addUserPoint:function(){return{type:K}},addPcPoint:function(){return{type:Y}},checkWinner:function(e,t,n){return function(a){var r=.5*e;t.points>r?(a({type:q}),ee(t.name)):n.points>r&&(a({type:V}),ee(n.name))}},endGame:function(){return{type:X}}})(oe),se=n(51),le=n.n(se),me=n(74),de=n.n(me),pe=Object(o.b)((function(e){return{user:e.appReducer.userReducer,pc:e.appReducer.pcReducer}}))((function(e){var t=e.user,n=e.pc;return r.a.createElement("div",{className:de.a.winnerContainer},t.isWinner?t.name:n.name," wins!")})),fe=n(159),ve=n(162),he=n(168),be=n(163),ge=n(167),ye=n(55),Ee=n.n(ye),ke=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.getWinners()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:Ee.a.winnersHdr},"Leader Board"),r.a.createElement(fe.a,{className:Ee.a.winnersList},this.props.winners.map((function(e){var t=e.winner,n=e.date,a=e.id;return r.a.createElement(ve.a,{key:a},r.a.createElement(be.a,null,r.a.createElement(ge.a,null,t[0].toUpperCase())),r.a.createElement(he.a,{primary:t,secondary:n}))}))))}}]),n}(a.Component),_e=Object(o.b)((function(e){return{winners:e.leaderBoardReducer}}),{getWinners:function(){return function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://starnavi-frontend-test-task.herokuapp.com/winners");case 2:n=e.sent,t((a=n.data,{type:Q,winners:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ke),Oe=Object(o.b)((function(e){return{blocksNum:e.appReducer.mainReducer.fieldBlocksNum,delay:e.appReducer.mainReducer.delay,user:e.appReducer.userReducer,pc:e.appReducer.pcReducer}}))((function(e){var t=e.blocksNum,n=e.delay,a=e.user,i=e.pc;return r.a.createElement("div",{className:le.a.mainContainer},r.a.createElement("section",{className:le.a.gameSection},r.a.createElement(ae,null),(a.isWinner||i.isWinner)&&r.a.createElement(pe,null),t>0&&n>0&&r.a.createElement(ue,null)),r.a.createElement("section",{className:le.a.leadersSection},r.a.createElement(_e,null)))})),Re=(n(121),n(20)),we=n(41),je=n(22),Ne={fieldBlocksNum:0,delay:0,isGameOn:!0},Ce={name:"",points:0,isWinner:!1},Ae={name:"Computer",points:0,isWinner:!1},Ge=Object(Re.combineReducers)({mainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(je.a)({},e,{fieldBlocksNum:t.mode*t.mode});case F:return Object(je.a)({},e,{delay:t.delay});case X:return Object(je.a)({},e,{isGameOn:!1});default:return e}},blocksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.find((function(e){return e.id===t.id}));switch(t.type){case U:return t.arr;case L:return n.bgColor="rgb(0, 102, 255)",Object.assign([],e,Object(we.a)({},t.id,n));case J:return n.bgColor="rgb(255, 26, 26)",Object.assign([],e,Object(we.a)({},t.id,n));case H:return n.bgColor="rgb(0, 204, 0)",Object.assign([],e,Object(we.a)({},t.id,n));default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(je.a)({},e,{name:t.name});case K:return Object(je.a)({},e,{points:e.points+1});case q:return Object(je.a)({},e,{isWinner:!0});default:return e}},pcReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(je.a)({},e,{points:e.points+1});case V:return Object(je.a)({},e,{isWinner:!0});default:return e}}}),Se=n(75),Be=n(76),xe=Object(Re.combineReducers)({appReducer:function(e,t){return t.type===z&&(e=void 0),Ge(e,t)},leaderBoardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return t.winners;default:return e}}}),We=[Be.a],Me=Object(Se.composeWithDevTools)(Re.applyMiddleware.apply(void 0,We)),Te=Object(Re.createStore)(xe,Me);c.a.render(r.a.createElement(o.a,{store:Te},r.a.createElement(Oe,null)),document.getElementById("root"))},51:function(e,t,n){e.exports={mainContainer:"App_mainContainer__2vxpA",gameSection:"App_gameSection__Dqs8j",leadersSection:"App_leadersSection__1p5VJ"}},53:function(e,t,n){e.exports={submitForm:"submitForm_submitForm__14Exe",error:"submitForm_error__1FcUg"}},54:function(e,t,n){e.exports={fieldContainer:"GameField_fieldContainer__3T4EG",fieldBlock:"GameField_fieldBlock__3_aRs"}},55:function(e,t,n){e.exports={winnersList:"LeaderBoard_winnersList__EMX1m",winnersHdr:"LeaderBoard_winnersHdr__2BICi"}},73:function(e,t,n){e.exports={enter:"animation_enter__26yOT",enterActive:"animation_enterActive__bJOph",exit:"animation_exit__2ATaG",exitActive:"animation_exitActive__nERre"}},74:function(e,t,n){e.exports={winnerContainer:"WinnerMsg_winnerContainer__2KHl9"}},91:function(e,t,n){e.exports=n(122)}},[[91,1,2]]]);
//# sourceMappingURL=main.6a45d124.chunk.js.map
(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{15:function(e,t,a){},32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=(a(37),a(3)),i=a(4),s=a(6),u=a(5),m=a(12),p=a(1),h=a(17),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.handleSubmit(a,r)?n.setState({username:"",password:""}):n.setState({password:""})},n.handleLog=function(){n.setState({redirect:!0})},n.state={username:"",password:"",redirect:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=this.props.loggedIn,l={display:"block",margin:"20px auto",border:"#8888FF solid 1px",borderRadius:"4px",width:"170px",height:"30px",textAlign:"center",fontFamily:"Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif",fontSize:"1em"},o={display:"block",margin:"20px auto",border:"#BCBCBC solid 1px",borderRadius:"5px",padding:"8px 20px",backgroundColor:"#EEFFEE",fontSize:"1em",color:"#454545"};if(this.state.redirect)return r.a.createElement(p.a,{to:"/"});if(n){var c=this.props.currentUser,i=c.password,s=c.username;return r.a.createElement("div",{style:{margin:"30px 20%",border:"#FF7700 solid 1px",borderRadius:"6px",textAlign:"center"}},r.a.createElement("h2",null,"Welcome Back"),r.a.createElement("div",null,r.a.createElement("p",null,"Your username is: ",s),r.a.createElement("p",null,"Your password is: ",i)),r.a.createElement("button",{style:o,onClick:this.handleLog},"Logout"))}return r.a.createElement("form",{style:{margin:"30px auto",border:"#FFAAAA solid 1px",borderRadius:"4px",padding:"20px 0px",width:"200px",backgroundColor:"#AAAAFF"},onSubmit:this.handleSubmit},r.a.createElement("legend",{style:{textAlign:"center"}},"Login"),r.a.createElement("label",{htmlFor:"l-username"},r.a.createElement("input",{type:"text",name:"username",value:t,placeholder:"Username",style:l,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"l-password"},r.a.createElement("input",{type:"password",name:"password",value:a,placeholder:"Password",style:l,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Login",style:o}))}}]),a}(r.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;""===a||""===r?console.log("fields must not be empty"):-1!==a.indexOf(" ")||-1!==r.indexOf(" ")?console.log("fields mus not contain spaces"):(n.props.handleSubmit(a,r),n.setState({username:"",password:"",redirect:!0}))},n.state={username:"",password:"",redirect:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n={display:"block",margin:"20px auto",border:"#AAAAFF solid 1px",borderRadius:"4px",width:"170px",height:"30px",textAlign:"center",fontFamily:"Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif",fontSize:"1em"};return this.state.redirect?r.a.createElement(p.a,{to:"/login"}):r.a.createElement("form",{onSubmit:this.handleSubmit,style:{margin:"30px auto",border:"#FFAAAA solid 1px",borderRadius:"4px",padding:"20px 0px",width:"200px",backgroundColor:"#EEFFEE"}},r.a.createElement("legend",{style:{textAlign:"center"}},"Sign Up"),r.a.createElement("label",{htmlFor:"s-username"},r.a.createElement("input",{type:"text",name:"username",value:t,placeholder:"Username",style:n,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"s-password"},r.a.createElement("input",{type:"password",name:"password",value:a,placeholder:"Password",style:n,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Add User",style:{display:"block",margin:"20px auto",border:"#454545 solid 1px",borderRadius:"5px",padding:"8px 20px",backgroundColor:"#FF8888",fontSize:"1em",color:"#FFFFFF"}}))}}]),a}(r.a.Component),E=a(11),f=a.n(E),b=(a(15),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={topAnimes:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.jikan.moe/v3/top/anime/1/airing").then((function(t){var a=t.data.top;console.log(a),e.setState({topAnimes:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return e=0===this.state.topAnimes.length?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",null,r.a.createElement("ol",null,this.state.topAnimes.map((function(e){return r.a.createElement("li",{className:"poop",key:e.rank},r.a.createElement("a",{href:"/anime/".concat(e.mal_id)},r.a.createElement("img",{src:e.image_url,alt:e.title})),e.title,r.a.createElement("h2",null," Rating:",e.score," "))})))),r.a.createElement(r.a.Fragment,null,e)}}]),a}(n.Component)),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={upcomingAnimes:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.jikan.moe/v3/top/anime/1/upcoming").then((function(t){var a=t.data.top;console.log(a),e.setState({upcomingAnimes:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e;return e=0===this.state.upcomingAnimes.length?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",null,r.a.createElement("ol",null,this.state.upcomingAnimes.map((function(e){return r.a.createElement("li",{className:"poop",key:e.rank},r.a.createElement("a",{href:"/anime/".concat(e.mal_id)},r.a.createElement("img",{src:e.image_url,alt:e.title})),e.title,r.a.createElement("h3",null," Start Date:",e.start_date," "))})))),r.a.createElement(r.a.Fragment,null,e)}}]),a}(n.Component),x=function(e){var t=e.value,a=e.onChange,n=e.onSearch;return r.a.createElement("div",{className:" simple-search"},r.a.createElement("input",{name:"",class:"simple-search-input",placeholder:"Search",value:t,onChange:a}),r.a.createElement("button",{class:"simple-search-button",type:"submit",onClick:n},"Search"))},y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({searchInput:e.target.value}),console.log(n.state.searchInput)},n.handleSearch=function(){var e=n.state.searchInput,t="https://api.jikan.moe/v3/search/anime?q=".concat(e,"&page=1");console.log(t),f.a.get(t).then((function(e){n.setState({topAnimes:e.data.results}),console.log(t),console.log(e.data)})).catch((function(e){console.log(e)}))},n.state={topAnimes:[],searchInput:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e;return e=r.a.createElement("div",null,r.a.createElement("ol",null,this.state.topAnimes.map((function(e){return r.a.createElement("li",{className:"poop",key:e.rank},r.a.createElement("a",{href:"/anime/".concat(e.mal_id)},r.a.createElement("img",{src:e.image_url,alt:e.title})),e.title,r.a.createElement("h2",null," Rating:",e.score," "))})))),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{value:this.state.searchInput,onChange:this.handleInput,onSearch:this.handleSearch}),e)}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleGenreChange=function(e){n.setState({id:e.target.value}),console.log(n.state.id)},n.handleClick=function(e){var t=n.state.id;f.a.get("https://api.jikan.moe/v3/genre/anime/".concat(t,"/1")).then((function(e){var t=e.data.anime;console.log(t),n.setState({topAnimes:t})})).catch((function(e){return console.log(e)}))},n.state={topAnimes:[],id:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e;return e=0===this.state.topAnimes.length?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",null,r.a.createElement("ol",null,this.state.topAnimes.map((function(e){return r.a.createElement("li",{className:"poop",key:e.rank},r.a.createElement("a",{href:"/anime/".concat(e.mal_id)},r.a.createElement("img",{src:e.image_url,alt:e.title})),e.title,r.a.createElement("h2",null," Rating:",e.score," "))})))),r.a.createElement(r.a.Fragment,null,"Search by Genre",r.a.createElement("select",{className:"work",onChange:this.handleGenreChange},r.a.createElement("option",{value:"0"}," "),r.a.createElement("option",{value:"1"},"Action"),r.a.createElement("option",{value:"2"},"Adventure"),r.a.createElement("option",{value:"8"},"Drama"),r.a.createElement("option",{value:"9"},"Ecchi"),r.a.createElement("option",{value:"4"},"Comedy"),r.a.createElement("option",{value:"14"},"Horror"),r.a.createElement("option",{value:"26"},"Romance")),r.a.createElement("button",{className:"button",onClick:this.handleClick},"Change Genre"),e)}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={aniInfo:{}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;f.a.get("http://api.jikan.moe/v3/anime/".concat(t)).then((function(t){var a=t.data;console.log(a),e.setState({aniInfo:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,this.state.aniInfo.title)),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.aniInfo.image_url,alt:"ani pic"})),r.a.createElement("h2",null,"Synopsis:"),r.a.createElement("p",null,this.state.aniInfo.synopsis),r.a.createElement("br",null),r.a.createElement("h2",null,"Background:"),r.a.createElement("p",null,this.state.aniInfo.background),r.a.createElement("br",null),r.a.createElement("h2",null,"Trailer:"),r.a.createElement("iframe",{title:"trailer",width:"420",height:"345",src:this.state.aniInfo.trailer_url}),r.a.createElement("br",null),r.a.createElement("a",{href:this.state.aniInfo.url},"To MAL"))}}]),a}(n.Component),A=Object(p.g)(k),C=(a(60),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).addUser=function(e,t){var a=!1;if(n.state.users.forEach((function(t,n){e!==t.username||(a=!0)})),a)console.log("user already exists");else{var r=n.state.users.concat([{username:e,password:t}]);n.setState({users:r})}},n.changeTab=function(e){n.setState({tab:e})},n.deleteUser=function(e){var t=n.state.users.filter((function(t,a){return a!==e}));n.setState({users:t})},n.handleLog=function(){var e=n.state.loggedIn;n.setState({loggedIn:!e}),e&&n.setState({currentUser:{}})},n.handleLogin=function(e,t){var a=n.state.users.filter((function(a,n){return a.username===e&&a.password===t&&a}));return 0!==a.length&&(n.setState({currentUser:a[0]}),n.handleLog(),!0)},n.searchBar=function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",id:"searchInput"}),r.a.createElement("button",{type:"button",id:"searchBtn"},"Search"))},n.state={creation:{author:"Mehak Sadique",rights:"All Rights Reserved",year:(new Date).getFullYear()},currentUser:{},loggedIn:!1,name:"React Login",users:[],tab:"signUp"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=(t.creation,t.currentUser),n=t.loggedIn;t.name,t.users,t.tab;return r.a.createElement("div",{className:"app"},r.a.createElement(m.a,null,r.a.createElement("nav",null,r.a.createElement(m.b,{className:"linked",to:"/"}),r.a.createElement(m.b,{className:"upcoming",to:"/upcoming"}),r.a.createElement(m.b,{className:"genre",to:"/genre"}),r.a.createElement(m.b,{className:"search",to:"/search"}),r.a.createElement(m.b,{className:"signup",to:"/signup"}," "),r.a.createElement(m.b,{className:"login",to:"/login"}," ")),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(g,{handleSubmit:e.addUser})}}),r.a.createElement(p.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(d,{loggedIn:n,currentUser:a,handleSubmit:e.handleLogin})}}),r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(p.b,{exact:!0,path:"/upcoming",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(p.b,{exact:!0,path:"/search",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(p.b,{exact:!0,path:"/genre",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(p.b,{exact:!0,path:"/anime/:id",render:function(){return r.a.createElement(A,null)}}))))}}]),a}(r.a.Component));o.a.render(r.a.createElement(C,null),document.getElementById("root"));var j=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.3fe4ab4c.chunk.js.map
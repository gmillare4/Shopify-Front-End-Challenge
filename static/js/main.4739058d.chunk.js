(this["webpackJsonpshopify-challenge-frontend"]=this["webpackJsonpshopify-challenge-frontend"]||[]).push([[0],{23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(2),r=a(12),i=a.n(r),c=a(15),o=a(13),h=a(14),l=a(8),d=a(17),j=a(16),u=(a(23),a(28)),b=a(29),m=a(30),g=function(e){return Object(s.jsx)(u.a,{className:"card shadow p-3 mb-5 bg-white rounded",children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)("h5",{children:"Nominations"}),Object(s.jsx)("ul",{children:e.nominations.map((function(t,a){return Object(s.jsxs)("li",{children:[t.Title," (",t.Year,")"," ",Object(s.jsx)(m.a,{outline:!0,color:"danger",size:"sm",value:t.imdbID,onClick:e.remove,children:"Remove"})]},a)}))})]})})},O=a(31),x=a(32),p=a(33),v=a(34),f=function(e){var t,a;return e.apiError?(a=Object(s.jsx)(O.a,{type:"text",value:e.searchParam,onChange:e.handleChange,placeholder:"Search",invalid:!0}),t=Object(s.jsx)(x.a,{children:e.apiError})):a=Object(s.jsx)(O.a,{type:"text",value:e.searchParam,onChange:e.handleChange,placeholder:"Search"}),Object(s.jsx)(u.a,{className:"card shadow p-3 mb-5 bg-white rounded",children:Object(s.jsxs)(b.a,{children:[Object(s.jsx)("h5",{children:"Movie Title"}),Object(s.jsx)(p.a,{onSubmit:e.search,children:Object(s.jsxs)(v.a,{children:[a,t]})})]})})},S=a(35),w=function(e){var t;return e.loading&&(t=Object(s.jsxs)("div",{children:[Object(s.jsx)(S.a,{color:"primary"}),Object(s.jsx)(S.a,{color:"success"}),Object(s.jsx)(S.a,{color:"danger"})]})),console.log("loading anim",t),e.loading?Object(s.jsx)(u.a,{className:"card shadow p-3 mb-5 bg-white rounded",children:Object(s.jsxs)(b.a,{children:[Object(s.jsxs)("h5",{children:['Results for "',e.resultsFor,'"']}),Object(s.jsx)(S.a,{color:"primary"}),Object(s.jsx)(S.a,{color:"success"}),Object(s.jsx)(S.a,{color:"danger"})]})}):Object(s.jsx)(u.a,{className:"card shadow p-3 mb-5 bg-white rounded",children:Object(s.jsxs)(b.a,{children:[Object(s.jsxs)("h5",{children:['Results for "',e.resultsFor,'"']}),Object(s.jsx)("ul",{children:e.searchResults.map((function(t,a){return Object(s.jsxs)("li",{children:[t.Title," (",t.Year,")"," ",Object(s.jsx)(m.a,{outline:!0,color:"success",size:"sm",value:t.imdbID,onClick:e.nominate,children:"Nominate"})]},a)}))})]})})},y=a(36),R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchParam:t.target.value})},e.state={searchParam:"",searchResults:[],nominations:[],banner:!1,resultsFor:"",apiError:!1,loading:!1},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e.search=e.search.bind(Object(l.a)(e)),e.nominate=e.nominate.bind(Object(l.a)(e)),e.remove=e.remove.bind(Object(l.a)(e)),e}return Object(h.a)(a,[{key:"search",value:function(e){var t=this;e.preventDefault(),console.log("loading",this.state.loading),this.setState({loading:!0}),fetch("https://www.omdbapi.com/?s=".concat(this.state.searchParam,"&apikey=807abc94")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){"True"===e.Response?(t.setState({apiError:!1}),t.setState({loading:!1}),t.setState({searchResults:e.Search})):(t.setState({apiError:e.Error}),t.setState({loading:!1}),t.setState({searchResults:[]}))})).catch((function(e){return console.log("error",e)})),this.setState({resultsFor:this.state.searchParam})}},{key:"nominate",value:function(e){for(var t=!0,a=0;a<this.state.nominations.length;a++)this.state.nominations[a].imdbID===e.target.value&&(t=!1);if(5===this.state.nominations.length&&(t=!1),t)for(var s=0;s<this.state.searchResults.length;s++)this.state.searchResults[s].imdbID===e.target.value&&this.setState({nominations:[].concat(Object(c.a)(this.state.nominations),[this.state.searchResults[s]])})}},{key:"remove",value:function(e){var t=this.state.nominations.filter((function(t){return t.imdbID!==e.target.value}));this.setState({nominations:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.nominations!==t.nominations&&(5===this.state.nominations.length?this.setState({banner:!0}):this.setState({banner:!1})),this.state.loading!==t.loading&&console.log("ha loading",this.state.loading)}},{key:"render",value:function(){var e;return e=this.state.banner?Object(s.jsx)("h4",{className:"banner center",children:"You've successfully nominated 5 movies!"}):Object(s.jsx)("h4",{className:"noBanner text center",children:"No Banner"}),Object(s.jsxs)("div",{className:"App",children:[e,Object(s.jsx)("h1",{className:"center",children:"The Shoppies"}),Object(s.jsx)(f,{search:this.search,searchParam:this.state.searchParam,handleChange:this.handleChange,apiError:this.state.apiError}),Object(s.jsxs)(y.a,{children:[Object(s.jsx)(w,{searchResults:this.state.searchResults,nominate:this.nominate,resultsFor:this.state.resultsFor,loading:this.state.loading}),Object(s.jsx)(g,{nominations:this.state.nominations,remove:this.remove})]})]})}}]),a}(n.Component);a(26);i.a.render(Object(s.jsx)(R,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4739058d.chunk.js.map
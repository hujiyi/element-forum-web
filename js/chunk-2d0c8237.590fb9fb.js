(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8237"],{5435:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-2"},[e._v(" 版块列表 "),e._l(e.categories,(function(t,n){return r("div",{key:n},[r("board",{attrs:{item:t,color:e.colors[n%e.colors.length]}})],1)}))],2)},a=[],i=r("1da1"),o=(r("96cf"),r("d3b7"),r("3ca3"),r("ddb0"),r("d81d"),r("89d5")),c=r("d4ec"),d=(r("a4d3"),r("e01a"),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";Object(c["a"])(this,e),this.title=t,this.description=r,this.views=0,this.reply=0});function s(e){return{id:e.id,username:e.get("username"),email:e.get("email")}}d.prototype.fromJson=function(e){return{id:e.id,title:e.get("title"),description:e.get("description"),level:e.get("level"),topicCount:e.get("topicCount"),createdAt:e.createdAt,updatedAt:e.updatedAt,createdBy:e.get("createdBy")?s(e.get("createdBy")):"",lastEditor:e.get("lastEditor")?s(e.get("lastEditor")):""}};var u=d,l=(r("c1df"),{name:"BoardList",components:{Board:function(){return r.e("chunk-8c68cc0a").then(r.bind(null,"0df1"))}},data:function(){return{colors:["red","blue","Gold","SeaGreen","DarkMagenta"],categories:[],pageSize:10,currentPage:1}},mounted:function(){this.getCategories()},methods:{getCategories:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.categories=[],r=(e.currentPage-1)*e.pageSize,t.next=4,o["a"].fetchAll(e.pageSize,r,[],["-level","createdAt"]);case 4:n=t.sent,e.categories=n.map((function(e){return(new u).fromJson(e)}));case 6:case"end":return t.stop()}}),t)})))()}}}),g=l,p=r("2877"),f=Object(p["a"])(g,n,a,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0c8237.590fb9fb.js.map
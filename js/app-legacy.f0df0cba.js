(function(){"use strict";var t={1818:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var i=e(144),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"mainframe"},[e("FriendsList",{attrs:{listId:0,listName:"FRIEND LIST",buttonName:"login in",friendsList:t.friendsList.filter((function(t){return!t.listId}))},on:{login:t.loginIn,drop:t.onDrop}}),e("FriendsList",{attrs:{listId:1,listName:"SELECTED LIST",buttonName:"export to console",friendsList:t.friendsList.filter((function(t){return t.listId}))},on:{drop:t.onDrop}})],1)])},o=[],s=(e(1249),e(1539),e(4916),e(3123),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frame"},[e("div",{staticClass:"header"},[e("div",[t._v(" "+t._s(t.listName)+" ")])]),e("div",{staticClass:"list",on:{drop:function(n){return t.onDrop(n,t.listId)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},t._l(t.friendsList,(function(n){return e("div",{attrs:{draggable:"true"},on:{dragstart:function(e){return t.onDragStart(e,n)}}},[e("FriendItem",{attrs:{friend:n}})],1)})),0),e("div",{staticClass:"footer"},[e("button",{on:{click:t.buttonClick}},[t._v(" "+t._s(t.buttonName)+" ")])])])}),a=[],u=(e(9653),e(8309),e(9714),function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.friend?e("div",{staticClass:"item"},[e("a",{staticClass:"photo",attrs:{href:"https://vk.com/id"+t.friend.id}},[e("img",{attrs:{src:t.friend.photo}})]),e("div",{staticClass:"name"},[e("a",{attrs:{href:"https://vk.com/id"+t.friend.id}},[t._v(" "+t._s(t.friend.name)+" ")])])]):t._e()}),c=[],f={props:{friend:{}}},d=f,l=e(1001),p=(0,l.Z)(d,u,c,!1,null,"11d5ab70",null),m=p.exports,v={props:{listId:Number,listName:String,buttonName:String,friendsList:Array},components:{FriendItem:m},methods:{buttonClick:function(){"export to console"===this.buttonName&&console.log(this.friendsList.map((function(t){return t.name}))),"login in"===this.buttonName&&this.$emit("login")},onDragStart:function(t,n){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("itemId",n.id.toString())},onDrop:function(t,n){var e=parseInt(t.dataTransfer.getData("itemId"));this.$emit("drop",e,n)}}},h=v,_=(0,l.Z)(h,s,a,!1,null,"044b4872",null),g=_.exports,b=e(9755),I=e.n(b),L=I(),k={name:"App",components:{FriendsList:g},data:function(){return{friendsList:[]}},mounted:function(){this.apiLoginIn()},methods:{loginIn:function(){this.apiLoginIn()&&(window.location.href="https://oauth.vk.com/authorize?client_id=8137408&display=page&redirect_uri=https://kand1.github.io/vue2-friend-list-test-case/&scope=friends,photos&response_type=token&v=5.81")},onDrop:function(t,n){this.friendsList=this.friendsList.map((function(e){return e.id===t&&(e.listId=n),e}))},apiLoginIn:function(){var t=this,n=window.location.hash.substr(1),e=n.split("&").reduce((function(t,n){var e=n.split("=");return t[e[0]]=e[1],t}),{});if(!e["access_token"])return 1;if(e["access_token"]){var i=e["access_token"];return L.ajax({url:"https://api.vk.com/method/friends.search?fields=photo_50&count=1000&access_token="+i+"&v=5.81",method:"GET",dataType:"JSONP",success:function(n){t.friendsList=n.response.items.map((function(t){return{id:t.id,name:t.first_name+" "+t.last_name,photo:t.photo_50}}))}}),0}}}},w=k,C=(0,l.Z)(w,r,o,!1,null,"76055b5d",null),D=C.exports;i.Z.config.productionTip=!1,new i.Z({render:function(t){return t(D)}}).$mount("#app")}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return t[i].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,i,r,o){if(!i){var s=1/0;for(f=0;f<t.length;f++){i=t[f][0],r=t[f][1],o=t[f][2];for(var a=!0,u=0;u<i.length;u++)(!1&o||s>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[u])}))?i.splice(u--,1):(a=!1,o<s&&(s=o));if(a){t.splice(f--,1);var c=r();void 0!==c&&(n=c)}}return n}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[i,r,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var r,o,s=i[0],a=i[1],u=i[2],c=0;if(s.some((function(n){return 0!==t[n]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(u)var f=u(e)}for(n&&n(i);c<s.length;c++)o=s[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(f)},i=self["webpackChunkvue2_friend_list_test_case"]=self["webpackChunkvue2_friend_list_test_case"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(1818)}));i=e.O(i)})();
//# sourceMappingURL=app-legacy.f0df0cba.js.map
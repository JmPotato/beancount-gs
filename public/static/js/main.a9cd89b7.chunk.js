(this["webpackJsonpbeancount-web"]=this["webpackJsonpbeancount-web"]||[]).push([[5],{122:function(e,t,n){},125:function(e,t,n){},128:function(e,t,n){},133:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(26),c=n.n(a),i=(n(122),n(14)),s=n(15),l=n(19),h=n(20),u=n(21),d=n(113),b=n.n(d),j=n(86),g=n.n(j),m=(n(124),n(36)),f=(n(125),n(67)),p="\u6211\u7684\u8d26\u672c",O="https://github.com/BaoXuebin/beancount-gs",x="https://www.yuque.com/chuyi-ble7p/beancount-gs",v="https://github.com/BaoXuebin/beancount-gs/issues",w="https://github.com/BaoXuebin/beancount-gs/blob/main/License",y=n(82),k=(n(128),n(141)),M=n(140),N=n(5),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={version:"",isModalVisible:!1,error:[]},e.handleOut=function(){localStorage.clear(),e.setState({error:[]}),window.location.href="/web/#/ledger"},e.openErrorModal=function(){e.setState({isModalVisible:!0})},e.closeErrorModal=function(){e.setState({isModalVisible:!1})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(y.c)("/api/version").then((function(t){localStorage.setItem("version",t),e.setState({version:t})})),Object(y.c)("/api/auth/ledger/check").then((function(t){e.setState({error:t||[]})}))}},{key:"render",value:function(){var e=this.context.theme,t=window.localStorage.getItem("ledgerTitle")||p;return Object(N.jsx)("div",{className:"".concat(e,"-theme page-wrapper"),children:Object(N.jsxs)("div",{className:"wrapper",children:[Object(N.jsx)("header",{children:Object(N.jsx)("nav",{className:"navbar",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"navbar-header header-logo",to:"/",children:Object(N.jsx)(m.b,{to:"/",children:t})}),Object(N.jsxs)("div",{className:"menu navbar-right",children:[this.state.error.length>0&&Object(N.jsx)("a",{children:Object(N.jsx)(k.a,{style:{color:"red"},onClick:this.openErrorModal})}),Object(N.jsx)(m.b,{to:"/account",children:"\u8d26\u6237"}),Object(N.jsx)(m.b,{to:"/stats",children:"\u7edf\u8ba1"}),Object(N.jsx)(m.b,{to:"/setting",children:"\u8bbe\u7f6e"}),Object(N.jsx)("a",{onClick:this.handleOut,children:"\u9000\u51fa"}),Object(N.jsx)("a",{href:O,children:Object(N.jsx)("img",{src:"https://img.shields.io/github/stars/BaoXuebin/beancount-gs?style=social"})})]})]})})}),Object(N.jsx)("div",{className:"main",children:Object(N.jsx)("div",{className:"main-wrap",children:this.props.children})}),Object(N.jsx)("footer",{className:"footer",children:Object(N.jsxs)("div",{className:"copyright",children:["\xa9 ",(new Date).getFullYear(),"\xa0\xa0",Object(N.jsx)("a",{href:"https://github.com/BaoXuebin/beancount-gs/releases/tag/".concat(this.state.version),target:"_blank",children:this.state.version}),"\xa0\xa0",Object(N.jsx)("a",{href:w,target:"_blank",children:"MIT"}),"\xa0\xa0",Object(N.jsx)("a",{href:x,target:"_blank",children:"\u4f7f\u7528\u6587\u6863"}),"\xa0\xa0",Object(N.jsx)("a",{href:v,target:"_blank",children:"\u53cd\u9988BUG"}),"\xa0\xa0"]})}),Object(N.jsx)(M.a,{width:860,open:this.state.isModalVisible,onOk:this.closeErrorModal,onCancel:this.closeErrorModal,children:Object(N.jsx)("pre",{children:this.state.error.map((function(e){return Object(N.jsx)("p",{children:e},e)}))})})]})})}}]),n}(r.Component);S.contextType=f.a;var I=S,E=n(28),P=n.n(E),Y=n(12),B=(n(133),function(){return Object(N.jsx)("div",{style:{width:"100%"},className:"lds-rolling",children:Object(N.jsx)("div",{})})}),T=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(16)]).then(n.bind(null,439))},loading:B}),C=P()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(9)]).then(n.bind(null,435))},loading:B}),X=P()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(11)]).then(n.bind(null,436))},loading:B}),_=P()({loader:function(){return n.e(17).then(n.bind(null,431))},loading:B}),A=P()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(10),n.e(14)]).then(n.bind(null,440))},loading:B}),D=P()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(19)]).then(n.bind(null,432))},loading:B}),V=P()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(13)]).then(n.bind(null,433))},loading:B}),J=P()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(12),n.e(15)]).then(n.bind(null,441))},loading:B}),q=P()({loader:function(){return n.e(18).then(n.bind(null,434))},loading:B}),F=function(){return Object(N.jsx)(o.a.Fragment,{children:Object(N.jsxs)(Y.c,{children:[Object(N.jsx)(Y.a,{exact:!0,path:"/",component:C}),Object(N.jsx)(Y.a,{exact:!0,path:"/init",component:V}),Object(N.jsx)(Y.a,{exact:!0,path:"/ledger",component:T}),Object(N.jsx)(Y.a,{exact:!0,path:"/account",component:X}),Object(N.jsx)(Y.a,{exact:!0,path:"/about",component:_}),Object(N.jsx)(Y.a,{exact:!0,path:"/edit",component:D}),Object(N.jsx)(Y.a,{exact:!0,path:"/stats",component:A}),Object(N.jsx)(Y.a,{exact:!0,path:"/import",component:J}),Object(N.jsx)(Y.a,{exact:!0,path:"/setting",component:q}),Object(N.jsx)(Y.a,{component:C})]})})};g.a.locale("zh-cn");var L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={theme:localStorage.getItem("theme")||"light"},e.toggleTheme=function(t){e.setState({theme:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(f.a.Provider,{value:{theme:this.state.theme,toggleTheme:this.toggleTheme},children:Object(N.jsx)(u.a,{locale:b.a,children:Object(N.jsx)(m.a,{children:Object(N.jsx)(I,{children:Object(N.jsx)(F,{})})})})})})}}]),n}(r.Component),W=L;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(N.jsx)(o.a.StrictMode,{children:Object(N.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext({theme:"light",toggleTheme:function(){}});t.a=o},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return h})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return j})),n.d(t,"i",(function(){return g})),n.d(t,"h",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n(25),o=n(84),a=n.n(o),c=n(109),i=n.n(c),s=function(e){var t=e.split(":");return t&&t.length>=1?t[0]:""},l=function(e){return e.split(":").join("_")},h=function(e){var t=e.split(":");return t&&t.length>=2?t[t.length-1]:""},u={Income:"\u6536\u5165",Expenses:"\u652f\u51fa",Liabilities:"\u8d1f\u503a",Assets:"\u8d44\u4ea7",Equity:"\u6743\u76ca"},d=function(e){return e},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,o=t.headers,a=t.body,c=t.hintError,s={"Content-Type":"application/json",ledgerId:window.localStorage.getItem("ledgerId")};return new Promise((function(t,l){i()(e,{method:n,headers:Object.assign({},s,o),body:JSON.stringify(a)}).then(d).then((function(e){return e.json()})).then((function(e){if(c)t(e);else{var n=e.code;200===n?t(e.data):200!==n&&(400===n?r.b.error("\u8bf7\u6c42\u53c2\u6570\u9519\u8bef"):1001===n?r.b.error("\u8d26\u76ee\u4e0d\u5e73\u8861"):1003===n?r.b.error("\u65e0\u6548\u8d26\u6237"):1005===n?r.b.error("\u65e0\u6548\u547d\u4ee4"):1006===n?r.b.error("\u5bc6\u7801\u9519\u8bef"):1007===n?r.b.error("\u8d26\u6237\u5df2\u5b58\u5728"):1008===n?r.b.error("\u5bc6\u94a5\u4e0d\u5339\u914d"):1010===n||401===n?window.location.href="/web/#/ledger":r.b.error("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"),l(e))}})).catch((function(e){r.b.error("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5"),l(e)}))}))},j=function(){return a()().format("YYYY-M")},g=function(){return a()().subtract(1,"month").format("YYYY-M")},m=function(e,t){var n=[];t=parseInt(t,10);for(var r=new Date(e,t,0).getDate(),o=t<10?"0"+t:t,a=1;a<=r;a++)a<10?n.push(e+"-"+o+"-0"+a):n.push(e+"-"+o+"-"+a);return n},f=function(e,t){return e&&e.length>0?e:t}}},[[138,6,8]]]);
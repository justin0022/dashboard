(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5340:function(e,t,a){e.exports=a(5495)},5345:function(e,t,a){},5495:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),i=(a(5345),a(14)),l=a(5498),u=a(5497),s=a(24),m=a(5496),d=a(5499),p=a(117),f=a.n(p),h=a(118),b=a.n(h),g=a(60),E=a.n(g),v=a(15),x=a.n(v),w=a(66),j=a.n(w),y=a(55),k=a.n(y),O=a(119),N=a.n(O),C=a(56),S=a.n(C),B=a(58),R=a.n(B),L=a(61),D=a.n(L),A=a(8),U=a.n(A),T=a(65),G=a.n(T),H=a(59),z=a.n(H),I=a(36),M=a.n(I),W=a(37),$=a.n(W),F=a(38),J=a.n(F),P=a(54),q=a.n(P),K=a(52),V=a.n(K),X=a(53),Q=a.n(X),Y=Object(s.withStyles)(function(e){return{root:{flexGrow:1},typography:{marginTop:2*e.spacing.unit},avatar:{padding:"10px",marginTop:"10px",marginBottom:"10px",marginLeft:"auto",marginRight:"auto"}}})(function(e){var t=e.classes,a=e.user;return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{container:!0},r.a.createElement(U.a,{item:!0,xs:4},r.a.createElement(R.a,{className:t.avatar},"".concat(a.firstName.slice(0,1)).concat(a.lastName.slice(0,1)))),r.a.createElement(U.a,{item:!0,xs:8,direction:"column"},r.a.createElement(x.a,{className:t.typography,variant:"subtitle2"},"".concat(a.firstName," ").concat(a.lastName)),r.a.createElement(x.a,{variant:"subtitle2"},a.email)),r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(z.a,null,r.a.createElement(G.a,null),r.a.createElement(M.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(V.a,null)),r.a.createElement(J.a,{inset:!0,primary:"Help"})),r.a.createElement(G.a,null),r.a.createElement(M.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(Q.a,null)),r.a.createElement(J.a,{inset:!0,primary:"Settings"})),r.a.createElement(G.a,null),r.a.createElement(M.a,{button:!0},r.a.createElement($.a,null,r.a.createElement(q.a,null)),r.a.createElement(J.a,{inset:!0,primary:"Logout"}))))))}),Z=Object(d.a)(Object(s.withStyles)(function(e){return{root:{flexGrow:1},button:{margin:e.spacing.unit},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},homeButton:{textDecoration:"none",color:"white"},roundButton:{borderRadius:"50%",padding:"12px",color:"white"}}})(function(e){var t=e.classes,a=e.onMenuBarClick,c=e.sideDrawerState,o=e.user,l=Object(n.useState)(null),u=Object(i.a)(l,2),s=u[0],d=u[1],p=Boolean(s);return r.a.createElement("div",null,r.a.createElement(f.a,{className:t.root,position:"static"},r.a.createElement(b.a,null,r.a.createElement(j.a,{onClick:function(){return a(!c)},className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(k.a,null)),r.a.createElement(E.a,null,r.a.createElement(x.a,{variant:"h6",color:"inherit",className:t.grow},r.a.createElement(m.a,{to:"/",className:t.homeButton},"UBC Learning Analytics"))),r.a.createElement("div",{className:t.grow}),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(N.a,{badgeContent:17,color:"secondary"},r.a.createElement(S.a,null))),r.a.createElement(j.a,{"aria-owns":p?"simple-popper":void 0,onClick:function(e){return d(e.currentTarget)},color:"inherit","aria-haspopup":"true",variant:"contained"},r.a.createElement(R.a,null,"".concat(o.firstName.slice(0,1)).concat(o.lastName.slice(0,1)))),r.a.createElement(D.a,{open:p,anchorEl:s,onClose:function(){return d(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(Y,{user:o})))))})),_=a(122),ee=a.n(_),te=a(67),ae=[{path:"/",sidebarName:"Home",icon:te.c},{path:"/Grades",sidebarName:"Grades",icon:te.b},{path:"/Assignments",sidebarName:"Assignments",icon:te.a}],ne=Object(d.a)(Object(s.withStyles)({list:{width:250},fullList:{width:"auto"},sideDrawerLinks:{textDecoration:"none"}})(function(e){var t=e.classes,a=e.toggleDrawer,c=e.sideDrawerState,o=Object(n.useState)(!1),l=Object(i.a)(o,2),u=l[0],s=l[1],d=r.a.createElement("div",{className:t.list},r.a.createElement(z.a,null,ae.map(function(e,a){return r.a.createElement(m.a,{to:e.path,className:t.sideDrawerLinks,key:a},r.a.createElement(M.a,{button:!0,key:e.sidebarName,selected:u===a,onClick:function(){return s(a)}},r.a.createElement($.a,null,r.a.createElement(e.icon,null)),r.a.createElement(J.a,{primary:e.sidebarName})))})));return r.a.createElement("div",null,r.a.createElement(ee.a,{open:e.sideDrawerState,onClose:function(){return a(!c)}},r.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){return a(!c)},onKeyDown:function(){return a(!c)}},d)))})),re=a(22),ce=a.n(re),oe=a(123),ie=a.n(oe),le=function(e){return function(t){var a=t.popoverText,c=Object(n.useState)(null),o=Object(i.a)(c,2),l=o[0],u=o[1],s=Boolean(l);return r.a.createElement("div",null,r.a.createElement(E.a,{"aria-owns":s?"simple-popper":void 0,"aria-haspopup":"true",variant:"contained",onClick:function(e){return u(e.currentTarget)}},a),r.a.createElement(D.a,{open:s,anchorEl:l,onClose:function(){return u(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(e,t)))}};function ue(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var se=Object(n.memo)(function(e){var t=e.endpoints,a=e.id,c=e.options,o=e.classes;return Object(n.useEffect)(function(){ie()().init(a,t,c)}),r.a.createElement("div",{id:a,className:o.feedback})}),me=ue(Object(s.withStyles)({feedback:{width:"310px",height:"350px",padding:"12px"}}),le)(se),de=a(6),pe=(a(62),a(33));function fe(e,t,a){return[e-a.left-a.right,t-a.top-a.bottom]}var he=function(){var e=[],t=!1;function a(){t||(t=!0,window.requestAnimationFrame?window.requestAnimationFrame(n):setTimeout(n,66))}function n(){e.forEach(function(e){e()}),t=!1}return{add:function(t){e.length||window.addEventListener("resize",a),function(t){t&&e.push(t)}(t)},remove:function(){return window.removeEventListener("resize",a)}}},be={top:20,right:20,bottom:30,left:40},ge=function(e){var t=e.data,a=e.width,n=e.height,r=e.el,c=e.tip,o=fe(a,n,be),l=Object(i.a)(o,2),u=l[0],s=l[1],m=de.h().domain(t.map(function(e){return e.label})).range([be.left,u-be.right]).padding(.1),d=de.i().domain([0,de.g(t,function(e){return e.data})]).nice().range([s-be.bottom,be.top]),p=de.l(r).append("svg").attr("width",u).attr("height",s),f=p.selectAll(".bar").data(t).enter().append("rect").attr("class","bar").attr("x",function(e){return m(e.label)}).attr("width",m.bandwidth()).attr("y",function(e){return d(e.data)}).attr("height",function(e){return d(0)-d(e.data)});p.append("g").attr("transform","translate(0, ".concat(s-be.bottom,")")).call(de.a(m)),p.append("g").attr("transform","translate(".concat(be.left,",0)")).call(de.b(d)),c&&(p.call(c),f.on("mouseover",c.show).on("mouseout",c.hide))},Ee=function(e){return function(t){var a=t.aspectRatio,c=void 0===a?.75:a,o=Object(n.useState)(null),l=Object(i.a)(o,2),u=l[0],s=l[1],m=Object(n.useState)(null),d=Object(i.a)(m,2),p=d[0],f=d[1],h=function(e){e&&(s(e),f(e.getBoundingClientRect().width))};Object(n.useEffect)(function(){var e=he();return e.add(function(){return h(u)}),e.remove});var b=null!==p;return r.a.createElement("div",{ref:function(e){return h(e)}},b&&r.a.createElement(e,Object.assign({width:p,height:p*c},t)))}},ve=function(e){return fetch(e).then(function(e){return e.text()}).then(function(e){return JSON.parse(e)})},xe=function(e){return Object(n.memo)(function(t){var a=t.dataURL,c=Object(n.useState)(null),o=Object(i.a)(c,2),l=o[0],u=o[1],s=Object(n.useState)(null),m=Object(i.a)(s,2),d=m[0],p=m[1];return Object(n.useEffect)(function(){ve(a).then(function(e){return p(e)})},[a]),Object(n.useEffect)(function(){if(l&&d)return e(Object(pe.a)({},t,{el:l,data:d})),function(){return function(e){e.removeChild(e.childNodes[0])}(l)}}),r.a.createElement("div",{ref:function(e){return u(e)}})})},we=ue(Ee,xe)(ge),je=a(68),ye=function(e){return e.reduce(function(e,t){return Array.isArray(t)?[].concat(Object(je.a)(e),Object(je.a)(t)):[].concat(Object(je.a)(e),[t])},[])},ke=function(e){var t=e.data,a=e.width,n=e.height,r=e.tip,c=e.el,o=fe(a,n,be),l=Object(i.a)(o,2),u=l[0],s=l[1],m=de.h().domain(t.map(function(e){return e.label})).range([be.left,u-be.right]).padding(.1),d=Object.keys(t[0].data),p=de.h().domain(d).rangeRound([0,m.bandwidth()]).padding(.5),f=de.i().domain([0,de.g(ye(t.map(function(e){return t=e.data,ye(Object.values(t));var t})))]).nice().range([s-be.bottom,be.top]),h=de.j().range(["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56","#d0743c","#ff8c00"]),b=de.l(c).append("svg").attr("width",u).attr("height",s),g=b.append("g").selectAll("g").data(t).enter().append("g").attr("transform",function(e){return"translate(".concat(m(e.label),", 0)")}).selectAll("rect").data(function(e){return d.map(function(t){return{key:t,data:e.data[t]}})}).enter().append("rect").attr("x",function(e){return p(e.key)}).attr("y",function(e){return f(e.data)}).attr("width",p.bandwidth()).attr("height",function(e){return s-be.bottom-f(e.data)}).attr("fill",function(e){return h(e.key)});b.append("g").attr("transform","translate(0,".concat(s-be.bottom,")")).call(de.a(m)),b.append("g").attr("transform","translate(".concat(be.left,",0)")).call(de.b(f).ticks(null,"s")).append("text").attr("x",2).attr("y",f(f.ticks().pop())+.5).attr("dy","0.32em").attr("fill","#000").attr("font-weight","bold").attr("text-anchor","start").text("Population"),r&&(b.call(r),g.on("mouseover",r.show).on("mouseout",r.hide))},Oe=ue(Ee,xe)(ke),Ne=function(e){var t=e.data,a=e.width,n=e.height,r=e.el,c=e.tip,o=fe(a,n,be),l=Object(i.a)(o,2),u=l[0],s=l[1],m=de.i().domain(de.c(t)).nice().range([be.left,u-be.right]),d=de.e().domain(m.domain()).thresholds(m.ticks(10))(t),p=de.i().domain([0,de.g(d,function(e){return e.length})]).nice().range([s-be.bottom,be.top]),f=de.l(r).append("svg").attr("width",u).attr("height",s),h=f.selectAll("rect").data(d).enter().append("rect").attr("x",function(e){return m(e.x0)+1}).attr("width",function(e){return Math.max(0,m(e.x1)-m(e.x0)-1)}).attr("y",function(e){return p(e.length)}).attr("height",function(e){return p(0)-p(e.length)});f.append("g").call(function(e){return e.attr("transform","translate(0, ".concat(s-be.bottom,")")).call(de.a(m).tickSizeOuter(0)).call(function(e){return e.append("text").attr("x",u-be.right).attr("y",-4).attr("fill","#000").attr("font-weight","bold").attr("text-anchor","end").text(t.x)})}),f.append("g").call(function(e){return e.attr("transform","translate(".concat(be.left,",0)")).call(de.b(p)).call(function(e){return e.select(".tick:last-of-type text").clone().attr("x",4).attr("fill","#000").attr("text-anchor","start").attr("font-weight","bold").text(t.y)})}),c&&(f.call(c),h.on("mouseover",c.show).on("mouseout",c.hide))},Ce=ue(Ee,xe)(Ne),Se=function(e){var t=e.el,a=fe(e.width,e.height,be),n=Object(i.a)(a,2),r=n[0],c=n[1];return de.l(t).append("svg").attr("width",r).attr("height",c)},Be=function(e){var t=e.svg,a=e.x,n=e.y,r=e.data,c=de.f().defined(function(e){return!isNaN(e.data)}).x(function(e){return a(e.label)}).y(function(e){return n(e.data)});t.append("path").datum(r).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("d",c)},Re=[{label:0,data:4},{label:1,data:1},{label:2,data:3},{label:3,data:2},{label:4,data:4},{label:5,data:2.5},{label:6,data:1},{label:7,data:4}],Le=function(e){var t=e.data,a=e.width,n=e.height,r=e.el,c=fe(a,n,be),o=Object(i.a)(c,2),l=o[0],u=o[1],s=de.i().domain([0,de.g(t,function(e){return e.label})]).nice().range([be.left,l-be.right]),m=de.i().domain([0,de.g(t,function(e){return e.data})]).nice().range([u-be.bottom,be.top]),d=Se({el:r,width:a,height:n});Be({svg:d,x:s,y:m,data:t}),Be({svg:d,x:s,y:m,data:Re}),d.append("g").call(function(e){return e.attr("transform","translate(0,".concat(u-be.bottom,")")).call(de.a(s).ticks(l/80).tickSizeOuter(0))}),d.append("g").call(function(e){return e.attr("transform","translate(".concat(be.left,",0)")).call(de.b(m))})},De=ue(Ee,xe)(Le),Ae=a(80),Ue=de.j(de.k),Te=function(e){return Ue(e.replace(/ .*/,""))},Ge=de.d(",.0f"),He=function(e){return"".concat(Ge(e)," TWh")},ze=function(e){var t=e.data,a=e.width,n=e.height,r=e.el,c=fe(a,n,be),o=Object(i.a)(c,2),l=o[0],u=o[1],s=de.l(r).append("svg").attr("width",l).attr("height",u),m=Object(Ae.a)().nodeWidth(15).nodePadding(10).extent([[1,1],[l-1,u-5]]),d=function(e){var t=e.nodes,a=e.links;return m({nodes:t.map(function(e){return Object(pe.a)({},e)}),links:a.map(function(e){return Object(pe.a)({},e)})})}(t),p=d.nodes,f=d.links;s.append("g").selectAll("rect").data(p).enter().append("rect").attr("x",function(e){return e.x0}).attr("y",function(e){return e.y0}).attr("height",function(e){return e.y1-e.y0}).attr("width",function(e){return e.x1-e.x0}).attr("fill",function(e){return Ue(e.name)}).append("title").text(function(e){return"".concat(e.name,"\n").concat(He(e.value))});var h=s.append("g").attr("fill","none").attr("stroke-opacity",.5).selectAll("g").data(f).enter().append("g").style("mix-blend-mode","multiply"),b=h.append("linearGradient").attr("id",function(e){return e.id}).attr("gradientUnits","userSpaceOnUse").attr("x1",function(e){return e.source.x1}).attr("x2",function(e){return e.target.x0});b.append("stop").attr("offset","0%").attr("stop-color",function(e){return Te(e.source.name)}),b.append("stop").attr("offset","100%").attr("stop-color",function(e){return Te(e.target.name)}),h.append("path").attr("d",Object(Ae.b)()).attr("stroke",function(e){return Ue(e.source.name)}).attr("stroke-width",function(e){return Math.max(1,e.width)}),h.append("title").text(function(e){return"".concat(e.source.name," \u2192 ").concat(e.target.name,"\n").concat(He(e.value))}),s.append("g").style("font","10px sans-serif").selectAll("text").data(p).enter().append("text").attr("x",function(e){return e.x0<a/2?e.x1+6:e.x0-6}).attr("y",function(e){return(e.y1+e.y0)/2}).attr("dy","0.35em").attr("text-anchor",function(e){return e.x0<a/2?"start":"end"}).text(function(e){return e.name})},Ie=ue(Ee,xe)(ze),Me=a(124),We=function(e){return Object(Me.a)().attr("class","d3-tip").html(e)},$e={emoji:"http://127.0.0.1:5000/emoji",feedback:"http://127.0.0.1:5000/feedback",votes:"http://127.0.0.1:5000/votes"},Fe="https://gist.githubusercontent.com/justin0022/2bfbe3a4ad08788ec294264b7187cd52/raw/cbcf2e93337bdbbc0585c50546a87cabdd53f2fd/barChartData.json",Je="https://gist.githubusercontent.com/justin0022/4c920762e52cdcef952ab0fa83a99145/raw/183f1a013e1c90c32ea1f28fc4c4347612f8a14e/groupedBarChartData.json",Pe="https://gist.githubusercontent.com/justin0022/10ccef7ce6bf43d5fb5024fad43277bd/raw/31d402104f5820b5a07733942d3eb89b6f4eb424/lineChartData.json",qe=[{emojicon:"\ud83d\udc80",emotion:"skull"},{emojicon:"\ud83d\udc7b",emotion:"boo"},{emojicon:"\ud83d\udc7d",emotion:"alien"},{emojicon:"\ud83e\udd16",emotion:"robot"},{emojicon:"\ud83d\udca9",emotion:"poop"}],Ke=Object(s.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(function(e){var t=e.classes,a=We(function(e){return"<p>".concat(e.data,"</p>")});return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{container:!0,spacing:24},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(x.a,null,"Grouped Bar Chart"),r.a.createElement(Oe,{dataURL:Je,tip:a,aspectRatio:.5}),r.a.createElement(me,{id:"groupedBarChartFeedback",popoverText:"give feedback",endpoints:$e,options:{emojis:qe}}))),r.a.createElement(U.a,{item:!0,xs:12,sm:6},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(x.a,null,"Sankey Diagram"),r.a.createElement(Ie,{dataURL:"https://gist.githubusercontent.com/justin0022/3488c5c59adfd986c06710cbf5f71ade/raw/ed9c1477a10cb460cd3706f4b2516f78285d3194/sankeyData.json"}),r.a.createElement(me,{id:"sankeyFeedback",popoverText:"give feedback",endpoints:$e}))),r.a.createElement(U.a,{item:!0,xs:12,sm:6},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(x.a,null,"Bar Chart"),r.a.createElement(we,{dataURL:Fe,tip:a}))),r.a.createElement(U.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(x.a,null,"Histogram"),r.a.createElement(Ce,{dataURL:"https://gist.githubusercontent.com/justin0022/a9ead72a838e6510d6f2d10332ad3698/raw/20c7caae737221166a454158da4bf81366a75362/histogram.json",tip:We(function(e){return"<p>".concat(e.length,"</p>")})}))),r.a.createElement(U.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(x.a,null,"Line Chart"),r.a.createElement(De,{dataURL:Pe}))),r.a.createElement(U.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(x.a,null,"Bar Chart"),r.a.createElement(we,{dataURL:Fe,tip:a})))))}),Ve=Object(s.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{container:!0,spacing:24},r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(ce.a,{className:t.paper},r.a.createElement(x.a,null,"Grouped Bar Chart"),r.a.createElement(Oe,{dataURL:Je,aspectRatio:.5})))))}),Xe=a(128),Qe=a.n(Xe),Ye=function(e,t){return function(a){var n=a.classes,c=a.feedbackId,o=a.dataURL,i=a.xs,l=void 0===i?12:i,u=a.sm,s=void 0===u?6:u,m=a.md,d=void 0===m?4:m;return r.a.createElement(U.a,{item:!0,xs:l,sm:s,md:d},r.a.createElement(ce.a,{className:n.paper},a.children,r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(e,{dataURL:o})),void 0!==t?r.a.createElement(t,{id:c,popoverText:"give feedback",endpoints:$e}):null))}},Ze=a(9),_e=a.n(Ze),et=a(125),tt=a.n(et),at=a(126),nt=a.n(at),rt=a(78),ct=a.n(rt),ot=a(127),it=a.n(ot),lt=a(79),ut=a.n(lt),st=_e()(function(e){return{table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:{color:"inherit",fontSize:"1em"},tableCell:{lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle"},tableResponsive:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"}}})(function(e){var t=e.classes,a=e.tableHead,n=e.tableData;return r.a.createElement("div",{className:t.tableResponsive},r.a.createElement(tt.a,{className:t.table},void 0!==a?r.a.createElement(nt.a,null,r.a.createElement(ct.a,null,a.map(function(e,a){return r.a.createElement(ut.a,{className:t.tableCell+" "+t.tableHeadCell,key:a},e)}))):null,r.a.createElement(it.a,null,n.map(function(e,a){return r.a.createElement(ct.a,{key:a},e.map(function(e,a){return r.a.createElement(ut.a,{className:t.tableCell,key:a},e)}))}))))}),mt=function(e,t){return function(a){var n=a.classes,c=a.feedbackId,o=a.tableHead,i=a.tableData,l=a.xs,u=void 0===l?12:l,s=a.sm,m=void 0===s?6:s,d=a.md,p=void 0===d?4:d;return r.a.createElement(U.a,{item:!0,xs:u,sm:m,md:p},r.a.createElement(ce.a,{className:n.paper},a.children,r.a.createElement(U.a,{item:!0,xs:12},r.a.createElement(e,{tableHead:o,tableData:i})),void 0!==t?r.a.createElement(t,{id:c,popoverText:"give feedback",endpoints:$e}):null))}},dt=Object(s.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,color:e.palette.text.secondary},feedback:{width:"310px",height:"350px",padding:"12px"}}})(function(e){var t=e.classes,a=Ye(De,me),n=Ye(we,me),c=Ye(Oe,me),o=mt(st,me);return r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{container:!0,spacing:16},r.a.createElement(a,{dataURL:Pe,feedbackId:"lineChartId",classes:t},r.a.createElement(U.a,{item:!0,container:!0},r.a.createElement(U.a,{item:!0,xs:12,container:!0,direction:"column",spacing:8},r.a.createElement(U.a,{item:!0},r.a.createElement(x.a,{gutterBottom:!0,variant:"h6"},"Active Users"))))),r.a.createElement(n,{dataURL:Fe,feedbackId:"barChart",classes:t}),r.a.createElement(c,{dataURL:Je,feedbackId:"groupedBarChart",classes:t}),r.a.createElement(o,{tableHead:["ID","Name","Salary","Country"],tableData:[["1","Dakota Rice","$36,738","Niger"],["2","Minerva Hooper","$23,789","Cura\xe7ao"],["3","Sage Rodriguez","$56,142","Netherlands"],["4","Philip Chaney","$38,735","Korea, South"]],classes:t,feedbackId:"table"},r.a.createElement(U.a,{item:!0,container:!0},r.a.createElement(U.a,{item:!0,xs:6,container:!0,direction:"column",spacing:8},r.a.createElement(U.a,{item:!0},r.a.createElement(x.a,{gutterBottom:!0,variant:"subtitle2"},"Table")),r.a.createElement(U.a,{item:!0},r.a.createElement(x.a,{gutterBottom:!0,variant:"h6"},"423"))),r.a.createElement(U.a,{item:!0,xs:6,container:!0,direction:"column",spacing:8},r.a.createElement(U.a,{item:!0},r.a.createElement(x.a,{gutterBottom:!0,variant:"subtitle2",align:"right"},r.a.createElement(Qe.a,null,"View Report"))),r.a.createElement(U.a,{item:!0},r.a.createElement(x.a,{gutterBottom:!0,variant:"h6",align:"right"},"82.6%")))))))}),pt=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(l.a,{basename:"/dashboard/"},r.a.createElement("div",null,r.a.createElement(Z,{onMenuBarClick:c,sideDrawerState:a,user:{firstName:"Justin",lastName:"Lee",email:"something@something.ca"}}),r.a.createElement(ne,{toggleDrawer:c,sideDrawerState:a}),r.a.createElement(u.a,{path:"/",exact:!0,component:dt}),r.a.createElement(u.a,{path:"/Grades/",component:Ke}),r.a.createElement(u.a,{path:"/Assignments/",component:Ve})))};a(5493),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5340,2,1]]]);
//# sourceMappingURL=main.0030d1be.chunk.js.map
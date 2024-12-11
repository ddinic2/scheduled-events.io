(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5908)}])},5908:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>E});var o=t(4848),a=t(3368),s=t.n(a),i=t(2440),r=t(6540);let l=e=>{let{children:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:"Scheduled events"}),(0,o.jsx)("meta",{name:"description",content:"Scheduled events"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, minimum-scale=1, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(i.s,{display:"block",direction:"column",h:"100%",children:n})]})};var c=t(1305),d=t(1994),m=t(285),f=t(9280),v=t(5093),_=t.n(v),h=t(4335),x=t(7836);let u=x.env.NEXT_PUBLIC_DATABASE_URL,A=x.env.NEXT_PUBLIC_AUTH_URL,p=e=>{if(e instanceof Date)return _()(e).format("YYYY-MM-DDTHH:mm:ss");if(Array.isArray(e))return e.map(e=>p(e));if("object"==typeof e&&null!==e)for(let n in e)e.hasOwnProperty(n)&&(e[n]=p(e[n]));return e};h.A.interceptors.request.use(e=>(e.data&&(e.data=p(e.data)),e),e=>Promise.reject(e)),h.A.defaults.baseURL=u,h.A.defaults.headers.common["Content-Type"]="application/json";let j=h.A;h.A.create({baseURL:A,headers:{"Content-Type":"application/x-www-form-urlencoded"}});var g=t(5942),T=t(2424);let M=()=>{let{from:e,to:n}=(0,T.a)(),t=async()=>{let t=await j.get("/dashboard/overview?from="+_()(e).format("YYYY-MM-DDTHH:mm:ss")+"&to="+_()(n).format("YYYY-MM-DDTHH:mm:ss"));try{return t.data}catch(e){console.error("error msg",e)}};return{from:e,to:n,readHomeData:(0,g.useQuery)(["homeData"],t)}};var X=t(9415),D=t(1303);let y=[{user_name:"Dejan Dinic",id:(0,D.A)(),max_col:10,events:[{event_name:"Meeting",from:7,to:12,offset:0,colspan:6,id:(0,D.A)()}]},{user_name:"Jovan Kovacina",max_col:10,id:(0,D.A)(),events:[{event_name:"Presentation",from:10,to:12,offset:3,colspan:2,id:(0,D.A)()}]},{user_name:"Marko Markovic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:11,to:14,offset:4,colspan:4,id:(0,D.A)()}]},{user_name:"Nikola Nikolic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:7,to:8,offset:0,colspan:1,id:(0,D.A)()}]},{user_name:"Jovan Jovanovic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:13,to:15,offset:6,colspan:2,id:(0,D.A)()}]},{user_name:"Petar Kovacina",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:8,to:9,offset:1,colspan:1,id:(0,D.A)()},{event_name:"Training",from:11,to:12,offset:2,colspan:1,id:(0,D.A)()}]},{user_name:"Vukasin Dinic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:7,to:16,offset:0,colspan:9,id:(0,D.A)()}]},{user_name:"Zivota Zivotic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:8,to:17,offset:1,colspan:9,id:(0,D.A)()}]},{user_name:"Pera Zdera",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:12,to:17,offset:5,colspan:5,id:(0,D.A)()}]},{user_name:"Dusko Dugousko",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:10,to:15,offset:3,colspan:5,id:(0,D.A)()}]}],k=[{user_name:"Dejan Dinic",id:(0,D.A)(),max_col:10,events:[{event_name:"Meeting",from:7,to:12,offset:0,colspan:6,id:(0,D.A)()}]},{user_name:"Jovan Kovacina",max_col:10,id:(0,D.A)(),events:[{event_name:"Presentation",from:10,to:12,offset:2,colspan:3,id:(0,D.A)()}]},{user_name:"Marko Markovic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:11,to:14,offset:0,colspan:7,id:(0,D.A)()}]},{user_name:"Nikola Nikolic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:7,to:8,offset:3,colspan:2,id:(0,D.A)()}]},{user_name:"Jovan Jovanovic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:13,to:15,offset:5,colspan:1,id:(0,D.A)()}]},{user_name:"Petar Kovacina",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:8,to:9,offset:0,colspan:2,id:(0,D.A)()},{event_name:"Training",from:11,to:12,offset:1,colspan:3,id:(0,D.A)()}]},{user_name:"Vukasin Dinic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:7,to:16,offset:5,colspan:2,id:(0,D.A)()}]},{user_name:"Zivota Zivotic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:8,to:17,offset:4,colspan:3,id:(0,D.A)()}]},{user_name:"Pera Zdera",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:12,to:17,offset:6,colspan:1,id:(0,D.A)()}]},{user_name:"Dusko Dugousko",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:10,to:15,offset:0,colspan:7,id:(0,D.A)()}]}],w=[{user_name:"Dejan Dinic",id:(0,D.A)(),max_col:10,events:[{event_name:"Meeting",from:7,to:12,offset:0,colspan:11,id:(0,D.A)()}]},{user_name:"Jovan Kovacina",max_col:10,id:(0,D.A)(),events:[{event_name:"Presentation",from:10,to:12,offset:1,colspan:3,id:(0,D.A)()},{event_name:"Presentation",from:10,to:12,offset:7,colspan:6,id:(0,D.A)()},{event_name:"Presentation",from:10,to:12,offset:2,colspan:4,id:(0,D.A)()}]},{user_name:"Marko Markovic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:11,to:14,offset:0,colspan:7,id:(0,D.A)()},{event_name:"Meeting",from:11,to:14,offset:5,colspan:12,id:(0,D.A)()}]},{user_name:"Nikola Nikolic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:7,to:8,offset:3,colspan:22,id:(0,D.A)()}]},{user_name:"Jovan Jovanovic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:13,to:15,offset:25,colspan:5,id:(0,D.A)()}]},{user_name:"Petar Kovacina",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:8,to:9,offset:0,colspan:2,id:(0,D.A)()},{event_name:"Training",from:11,to:12,offset:1,colspan:3,id:(0,D.A)()}]},{user_name:"Vukasin Dinic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:7,to:16,offset:5,colspan:2,id:(0,D.A)()}]},{user_name:"Zivota Zivotic",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:8,to:17,offset:4,colspan:3,id:(0,D.A)()}]},{user_name:"Pera Zdera",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:12,to:17,offset:6,colspan:1,id:(0,D.A)()}]},{user_name:"Dusko Dugousko",max_col:10,id:(0,D.A)(),events:[{event_name:"Meeting",from:10,to:15,offset:0,colspan:7,id:(0,D.A)()}]}],Y=()=>{let e=_()(),n=e.startOf("month").startOf("day").toDate(),t=e.endOf("month").endOf("day").toDate(),a=_()().startOf("day").toDate(),s=_()().endOf("day").toDate(),i=_()().startOf("week").toDate(),l=_()().endOf("week").toDate(),{readHomeData:{data:v,isLoading:h,isError:x,refetch:u}}=M(),{setFrom:A,from:p,setTo:j,to:g}=(0,T.a)(),{mode:D}=(0,X.i)();(0,r.useEffect)(()=>{"DAY"===D?(A(a),j(s)):"MONTH"===D?(A(n),j(t)):"WEEK"===D&&(A(i),j(l))},[D]),(0,r.useEffect)(()=>{"WEEK"===D&&E()},[p,g]);let Y=()=>{let e="#";for(let n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},E=()=>{let e=_()(p,"YYYY-MM-DD"),n=_()(g,"YYYY-MM-DD"),t=[];for(;e.isSameOrBefore(n);){let n=e.format("dd"),o=e.format("DD");t.push("".concat(n," ").concat(o)),e.add(1,"day")}return t},b=()=>{if("DAY"===D)return(0,o.jsxs)(c.X.Tr,{children:[(0,o.jsx)(c.X.Th,{children:"User"},"User"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"07h"},"07h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"08h"},"08h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"09h"},"09h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"10h"},"10h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"11h"},"11h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"12h"},"12h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"13h"},"13h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"14h"},"14h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"15h"},"15h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"16h"},"16h"),(0,o.jsx)(c.X.Th,{style:{textAlign:"center"},children:"17h"},"17h")]});if("WEEK"===D||"MONTH"===D){var e;return(0,o.jsxs)(c.X.Tr,{children:[(0,o.jsx)(c.X.Th,{style:{position:"sticky"},children:"User"}),null===(e=E())||void 0===e?void 0:e.map(e=>(0,o.jsx)(c.X.Th,{style:{textAlign:"center",minWidth:"50px"},children:e},e))]})}},N=()=>"DAY"===D?null==y?void 0:y.map(e=>(0,o.jsxs)(c.X.Tr,{children:[(0,o.jsx)(c.X.Td,{style:{position:"sticky",left:0,background:"white"},children:e.user_name},e.user_name),0===e.events.length&&(0,o.jsx)(c.X.Td,{colSpan:e.max_col}),e.events.length>0&&e.events.map(e=>(0,o.jsxs)(o.Fragment,{children:[e.offset>0&&(0,o.jsx)(c.X.Td,{colSpan:e.offset},e.id),e.colspan>0&&(0,o.jsx)(c.X.Td,{colSpan:e.colspan,children:(0,o.jsx)(d.a,{onClick:()=>{alert(e.event_name)},ta:"center",style:{borderRadius:"5px",cursor:"pointer"},c:"white",bg:Y(),children:e.event_name})},e.id+"_colspan")]}))]},e.id)):"WEEK"===D?null==k?void 0:k.map(e=>(0,o.jsxs)(c.X.Tr,{children:[(0,o.jsx)(c.X.Td,{children:e.user_name},e.user_name),0===e.events.length&&(0,o.jsx)(c.X.Td,{colSpan:e.max_col}),e.events.length>0&&e.events.map(e=>(0,o.jsxs)(o.Fragment,{children:[e.offset>0&&(0,o.jsx)(c.X.Td,{colSpan:e.offset},e.id),e.colspan>0&&(0,o.jsx)(c.X.Td,{colSpan:e.colspan,children:(0,o.jsx)(d.a,{onClick:()=>{alert(e.event_name)},ta:"center",style:{borderRadius:"5px",cursor:"pointer"},c:"white",bg:Y(),children:e.event_name})},e.id+"_colspan")]}))]},e.id)):"MONTH"===D?null==w?void 0:w.map(e=>(0,o.jsxs)(c.X.Tr,{children:[(0,o.jsx)(c.X.Td,{style:{position:"sticky",left:0,background:"white"},children:e.user_name},e.user_name),0===e.events.length&&(0,o.jsx)(c.X.Td,{colSpan:e.max_col}),e.events.length>0&&e.events.map(e=>(0,o.jsxs)(o.Fragment,{children:[e.offset>0&&(0,o.jsx)(c.X.Td,{colSpan:e.offset},e.id),e.colspan>0&&(0,o.jsx)(c.X.Td,{colSpan:e.colspan,children:(0,o.jsx)(d.a,{onClick:()=>{alert(e.event_name)},ta:"center",style:{borderRadius:"5px",cursor:"pointer"},c:"white",bg:Y(),children:e.event_name})},e.id+"_colspan")]}))]},e.id)):void 0;return h?(0,o.jsx)(m.o,{h:"100%",children:(0,o.jsx)(f.a,{})}):(0,o.jsxs)(o.Fragment,{children:["DAY"===D&&(0,o.jsxs)(c.X,{children:[(0,o.jsx)(c.X.Thead,{children:b()}),(0,o.jsx)(c.X.Tbody,{children:N()})]}),"WEEK"===D&&(0,o.jsxs)(c.X,{children:[(0,o.jsx)(c.X.Thead,{children:b()}),(0,o.jsx)(c.X.Tbody,{children:N()})]}),"MONTH"===D&&(0,o.jsxs)(c.X,{children:[(0,o.jsx)(c.X.Thead,{children:b()}),(0,o.jsx)(c.X.Tbody,{children:N()})]})]})};function E(){return(0,o.jsxs)(l,{title:"app.home.title",children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:"Scheduled events"}),(0,o.jsx)("meta",{name:"description",content:"Scheduled events"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, minimum-scale=1, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(Y,{})]})}Y.requireAuth=!0}},e=>{var n=n=>e(e.s=n);e.O(0,[510,636,593,792],()=>n(2022)),_N_E=e.O()}]);
(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{164:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),o=n(20),c=n.n(o),s=(n(65),n(2)),l=n(3);function d(){var e=Object(s.a)(["\n    padding: 0 0 0 50px;\n"]);return d=function(){return e},e}function u(){var e=Object(s.a)(["\n    width: 25%;\n    white-space: nowrap;\n    font-weight: bold;\n"]);return u=function(){return e},e}function p(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row\n"]);return p=function(){return e},e}var b=l.a.div(p()),j=l.a.div(u()),f=l.a.div(d()),h=function(){return Object(a.jsxs)(b,{children:[Object(a.jsx)(j,{children:"PERSONAL PROFILE"}),Object(a.jsx)(f,{children:"I am a dedicated and hardworking person. I have gone over to Silicon Valley as a software engineer intern and have used that time to learn to develop web applications with the industries' best practices. I have also used EmberJS and React with Typescript to create large scale applications for Standard Chartered Bank. I enjoy looking for new challenges and tackling and solving them. I am currently looking for new opportunities to utilise my skills in a new challenging working environment"})]})},g=n(22),v=n(7),O="GET_GIT_HUB_DATA",x=function(){return function(e){fetch("https://api.github.com/users/bengeh/repos ",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return console.log("This is the data...."),console.log(t),e({type:O,payload:t}),t}))}},m=n(21);function y(){var e=Object(s.a)(["\n    height: 250px;\n"]);return y=function(){return e},e}var w=l.a.div(y()),D=function(){var e,t=Object(v.b)(),n=[],i=[],o=Object(r.useState)(!1),c=Object(g.a)(o,2),s=c[0],l=c[1],d=Object(v.c)((function(e){return e.gitHubData}));for(var u in console.log("this the github data..."),console.log(d),Object(r.useEffect)((function(){t(x()),l(!0)}),[t]),d.gitHubData)n.push(u),i.push(d.gitHubData[u]);return console.log("setting chart data..."),console.log(i),e={labels:n,datasets:[{data:i,backgroundColor:["#B21F00","#C9DE00","#2FDE00","#CCFFCC","#FF3399","#0080FF","#FF6666"]}]},console.log("this the chart data..."),console.log(e),Object(a.jsx)(w,{children:s?Object(a.jsx)(m.Doughnut,{data:e,options:{title:{display:!0,text:"Git Hub Info",fontSize:20},legend:{display:!0,position:"top"}}}):Object(a.jsx)(a.Fragment,{children:"SPINNER"})})},S="GET_LEET_CODE_DATA",C=n(23),k=function(){return function(e){return console.log(C),e({type:S,payload:C}),C}},T=function(){var e,t=Object(v.b)(),n=Object(r.useState)(!1),i=Object(g.a)(n,2),o=(i[0],i[1],Object(v.c)((function(e){return e.leetCodeData})));return Object(r.useEffect)((function(){t(k())}),[t]),e={labels:["easy","medium","hard"],datasets:[{label:"Question Difficulty",data:[o.leetCodeData.easyQns,o.leetCodeData.medQns,o.leetCodeData.hardQns],backgroundColor:["#B21F00","#C9DE00","#2FDE00"]}]},Object(a.jsx)("div",{children:Object(a.jsx)(m.Doughnut,{data:e,options:{title:{display:!0,text:"Leet Code questions done",fontSize:20}}})})};function E(){var e=Object(s.a)(["\n    width: 50%;\n    border: 2px solid;\n    border-radius: 25px;\n    text-align: center;\n    background: linear-gradient(to right, lightgreen ","%, gray 0);\n"]);return E=function(){return e},e}function P(){var e=Object(s.a)([""]);return P=function(){return e},e}function I(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 0 10px 0;\n"]);return I=function(){return e},e}function F(){var e=Object(s.a)([""]);return F=function(){return e},e}var J=[{desc:"Leadership",currentLevel:40},{desc:"Fast Learner",currentLevel:80},{desc:"Git, Jenkins, MongoDB",currentLevel:40},{desc:"React, Typescript, JavaSCript, Python, Html, CSS",currentLevel:60},{desc:"MySQL",currentLevel:50}],L=l.a.div(F()),B=l.a.div(I()),M=l.a.div(P()),R=l.a.div(E(),(function(e){return e.currentLevel})),A=function(){return Object(a.jsx)(L,{children:J.map((function(e){return Object(a.jsxs)(B,{children:[Object(a.jsx)(M,{children:e.desc}),Object(a.jsxs)(R,{currentLevel:e.currentLevel,children:[e.currentLevel,"%"]})]},e.desc)}))})};function U(){var e=Object(s.a)([""]);return U=function(){return e},e}function N(){var e=Object(s.a)(["\n    padding: 0 0 0 150px;\n"]);return N=function(){return e},e}function H(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]);return H=function(){return e},e}function Q(){var e=Object(s.a)([""]);return Q=function(){return e},e}function G(){var e=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return G=function(){return e},e}function _(){var e=Object(s.a)(["\n    font-weight: bold;\n"]);return _=function(){return e},e}function W(){var e=Object(s.a)([""]);return W=function(){return e},e}function z(){var e=Object(s.a)([""]);return z=function(){return e},e}var K=[{roleTitle:"Standard Chartered Bank - Changi Business Park, Singapore",rolePos:"Software Developer",date:"Mar 2020 - Present",jobDesc:["Used Flask and React to develop an internal application to help engineers in the bank navigate their carrer","Develop wealth lending dash board using TypeScript and React to help hundereds of RMs to sell wealth lending products easily"]},{roleTitle:"Standard Chartered Bank - Changi Business Park, Singapore ",rolePos:"Associate Software Developer",date:"Aug 2018 - Mar 2020",jobDesc:["Develop client facing application using EMberJS which is used by thousands of SCB's Singapore Clients","Develop internal facing application for Bank's Management Team to track hundreds of team's KPI using Kafka and Java","Displaying the data set from Kafka's topic using Grafana","Used Typescript and react to develop existing internal portal","Collaboration done using Confluence, Jira and Bitbucket","Develop wealth lending simulator using Typescript and React to help make lending simulation easier for thousands of SCB's clients and RMs","Used PHP and content management system (CMS) to allow faster deployment of projects"]},{roleTitle:"Stratio | LinkSquare | BeyondSense - San Jose, Silicon Valley",rolePos:"Full Stack Developer - Intern",date:"Jan 2018 - Jul 2018",jobDesc:["Developed new back-end logic to existing web applcaition using Django to cater to the growing amount of end-users","Improved user experience to existing web application using JavaScript and HTML","Added new design and model to existing database","CRUD data with MySQL","Integrated website with Stripe API to ease payment","Designed different webhooks to cater to different events from Stripe","Used Python Cron to automate script","Documentations","Improved part of company's existing pitch deck"]},{roleTitle:"Standard Chartered Bank - Changi Business Park, Singapore  ",rolePos:"Retail Bank ITO Intern",date:"May 2017 - Aug 2017",jobDesc:["Develop internal application for bank using Java and Javascript","Design database for internal application","Write documentations for codes","Involved in sprint planning and discussions with product owners, scrum masters and business owners","Write automated test cases with Cucumber and Ruby","Update sprint backlogs, sprint stories, user points, etc"]},{roleTitle:"CrossTrack Pte Ltd - Jalan Rajah, Singapore",rolePos:"IT Developer Intern",date:"Jun 2016 - Aug 2016",jobDesc:["Debug existing software","Added new functions to existing software using Python","Handle database updates","Update server after bug fixes","Liaised with overseas developer to ensure work is done using Slack","Documentations"]}],Y=[{schoolName:"Nanyang Techonological University",date:"Jan 2014 - Jan 2018",projects:["Studied Computer Science","Used Java to develop cinema application","Used Flask to develop a game to help elderly with dementia","Used Spring Boot to develop web application to test against OWASP database for Final Year Project"]},{schoolName:"Pioneer Junior College",date:"Jan 2010 - Dec 2011",projects:["Studied in Science stream","Member of the welfare community in student council","Organized events such as J1 Orientation day, Teachers' Day, Graduation Night, etc."]}],q=l.a.ul(z()),V=l.a.div(W()),X=l.a.div(_()),Z=l.a.div(G()),$=l.a.div(Q()),ee=l.a.div(H()),te=l.a.div(N()),ne=l.a.div(U()),ae=function(e){return Object(a.jsxs)(V,{children:[Object(a.jsx)(X,{children:e.title}),"EXPERIENCE"===e.title?K.map((function(e){return Object(a.jsxs)(Z,{children:[Object(a.jsx)(ne,{children:e.roleTitle}),Object(a.jsxs)(ee,{children:[Object(a.jsx)($,{children:e.rolePos}),Object(a.jsx)(te,{children:e.date})]}),Object(a.jsx)(q,{children:e.jobDesc.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]},e.roleTitle)})):"EDUCATION"===e.title?Y.map((function(e){return Object(a.jsxs)(Z,{children:[Object(a.jsxs)(ee,{children:[Object(a.jsx)($,{children:e.schoolName}),Object(a.jsx)(te,{children:e.date})]}),Object(a.jsx)(q,{children:e.projects.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})]},e.schoolName)})):"SUMMARY"===e.title?Object(a.jsx)(A,{}):""]})};n(164);function re(){var e=Object(s.a)(["\n  width: 50%;\n  padding: 0 0 0 15px;\n"]);return re=function(){return e},e}function ie(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 25%\n"]);return ie=function(){return e},e}function oe(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return oe=function(){return e},e}function ce(){var e=Object(s.a)(["\n  border-color: orange;\n"]);return ce=function(){return e},e}var se=l.a.hr(ce()),le=l.a.div(oe()),de=l.a.div(ie()),ue=l.a.div(re()),pe=function(){return Object(a.jsxs)(le,{children:[Object(a.jsxs)(de,{children:[Object(a.jsx)(D,{}),Object(a.jsx)(T,{})]}),Object(a.jsxs)(ue,{children:[Object(a.jsx)(h,{}),Object(a.jsx)(se,{}),Object(a.jsx)(ae,{title:"EXPERIENCE"}),Object(a.jsx)(se,{}),Object(a.jsx)(ae,{title:"EDUCATION"}),Object(a.jsx)(se,{}),Object(a.jsx)(ae,{title:"SUMMARY"})]})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))},je=n(6),fe=n(58),he=n(11),ge={leetCodeData:{numSolved:0,easyQns:0,medQns:0,hardQns:0}},ve={gitHubData:[]},Oe=Object(je.combineReducers)({leetCodeData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(he.a)(Object(he.a)({},e),{},{leetCodeData:t.payload});default:return e}},gitHubData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n={};return t.payload.map((function(e){e.language&&(n[e.language]?n[e.language]+=1:n[e.language]=1)})),console.log("this the language map..."),console.log(n),Object(he.a)(Object(he.a)({},e),{},{gitHubData:n});default:return e}}}),xe=n(59),me=Object(je.createStore)(Oe,Object(xe.composeWithDevTools)(Object(je.applyMiddleware)(fe.a)));c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(v.a,{store:me,children:Object(a.jsx)(pe,{})})}),document.getElementById("root")),be()},23:function(e){e.exports=JSON.parse('{"numSolved":163,"easyQns":97,"medQns":59,"hardQns":7}')},65:function(e,t,n){}},[[165,1,2]]]);
//# sourceMappingURL=main.1ecff23b.chunk.js.map
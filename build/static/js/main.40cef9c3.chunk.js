(this.webpackJsonpconf_frontend=this.webpackJsonpconf_frontend||[]).push([[0],{235:function(e,t,n){},396:function(e,t,n){},426:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(62),r=n.n(s),c=(n(235),n(36)),i=n(10),o=n(429),l=n(430),j=n(106),u=n(15),b=n(37),h=n(434),m=n(16),d=n(2),O=function(e){var t=e.profile;return Object(d.jsxs)(o.a,{className:"m-3",children:[Object(d.jsx)(h.a.Img,{src:"https://avatars.githubusercontent.com/u/48760865?v=4",className:"mr-2",style:{borderRadius:"50%",width:"50px",height:"50px"}}),Object(d.jsxs)(h.a.Text,{children:[t.username,Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"mb-2 text-muted",children:"".concat(t.fname," ").concat(t.lname)})]}),Object(d.jsx)(l.a,{children:Object(d.jsx)(m.LinkContainer,{to:"/profile/edit",children:Object(d.jsx)(h.a.Link,{className:"float-right text-white",children:Object(d.jsx)("i",{className:"fas fa-edit"})})})})]})},x=function(e){var t=e.suggestion;return Object(d.jsxs)(o.a,{className:"m-auto",children:[Object(d.jsx)(h.a.Img,{src:"https://avatars.githubusercontent.com/u/48760865?v=4",className:"mr-2",style:{borderRadius:"50%",width:"50px",height:"50px"}}),Object(d.jsxs)(h.a.Text,{children:[t.username,Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"mb-2 text-muted",children:"".concat(t.fname," ").concat(t.lname)})]}),Object(d.jsx)(l.a,{children:Object(d.jsx)(h.a.Text,{className:"float-right",children:"Follow"})})]})},p=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(l.a,{className:"float-left m-2",children:Object(d.jsx)("p",{className:"lead",children:"Suggestions"})}),Object(d.jsx)(l.a,{children:Object(d.jsx)("p",{className:"float-right m-2 lead",children:"See all"})})]})},f=Object(u.b)((function(e){return console.log(e),{profile:e.firebase.profile}}))((function(e){var t=e.profile,n=Object(a.useState)([{username:"animesharm4",fname:"Animesh",lname:"Sharma"},{username:"animesharm4",fname:"Animesh",lname:"Sharma"},{username:"animesharm4",fname:"Animesh",lname:"Sharma"}]),s=Object(j.a)(n,2),r=s[0];s[1];return Object(d.jsx)("div",{children:Object(d.jsxs)(h.a,{className:"bg-dark",children:[Object(d.jsx)(O,{profile:t}),Object(d.jsx)(p,{}),Object(d.jsx)(l.a,{children:r.map((function(e,t){return Object(d.jsx)(x,{suggestion:e},t)}))})]})})})),g=n(27),v=n(431),N=function(e){var t=e.confession;return Object(d.jsxs)(h.a,{className:"bg-dark",children:[Object(d.jsxs)(o.a,{className:"ml-2",children:[Object(d.jsx)(h.a.Img,{src:"https://avatars.githubusercontent.com/u/48760865?v=4",className:"mr-2",style:{borderRadius:"50%",width:"50px",height:"50px"}}),Object(d.jsxs)(h.a.Text,{children:[t.username,Object(d.jsx)("br",{}),Object(d.jsx)("span",{className:"mb-2 text-muted",children:"".concat(t.userFname," ").concat(t.userLname)})]})]}),Object(d.jsx)(v.a,{children:t.content.substring(0,100)})]})},S=n(38),C=n(58),k=n(59),y=n(61),w=n(60),E=n(33),L=n.n(E),I=n(63),F="CREATE_CONFESSION_ERROR",R="CREATE_CONFESSION_SUCCESS",A=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={content:"",location:e.props.location.pathname},e.handleChange=function(t){e.setState(Object(S.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createConfession(e.state),e.reset()},e.reset=function(t){e.setState({content:""})},e}return Object(k.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("textarea",{type:"text",id:"content",rows:5,cols:20,value:this.state.content,className:"form-control bg-dark text-white",placeholder:"Confess here".concat("/explore"===this.props.location.pathname?" Anonymously":"","..."),onChange:this.handleChange})}),Object(d.jsx)("button",{type:"submit",className:"btn btn-secondary btn-block btn-sm",children:"Submit"})]}),Object(d.jsx)("br",{})]})}}]),n}(a.Component),U=Object(u.b)(null,(function(e){return{createConfession:function(t){return e(function(e){return function(){var t=Object(I.a)(L.a.mark((function t(n,a,s){var r,c,i,o;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.getFirebase,r=s.getFirestore,t.prev=1,c=r(),"/explore"!==e.location){t.next=8;break}return t.next=6,c.collection("confessions").add({content:e.content,createdAt:new Date,username:"anonymous",userFname:"Anonymous",userLname:"User",userId:"XBODMyuxsjQCw7LDM6ivYt0Atqq1"});case 6:t.next=12;break;case 8:return i=a().firebase.profile,o=a().firebase.auth.uid,t.next=12,c.collection("confessions").add({content:e.content,createdAt:new Date,username:i.username,userFname:i.fname,userLname:i.lname,userId:o});case 12:n({type:R,confession:e}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),n({type:F,error:t.t0});case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,n,a){return t.apply(this,arguments)}}()}(t))}}}))(Object(i.o)(A)),_=Object(g.d)(Object(u.b)((function(e){return{confessions:e.firestore.ordered.confessions}})),Object(b.firestoreConnect)([{collection:"confessions"}]))((function(e){var t=e.confessions;return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(l.a,{sm:12,md:12,lg:8,xl:8,children:Object(d.jsx)(U,{})}),t&&t.map((function(e,t){return Object(d.jsx)(l.a,{sm:12,md:8,lg:8,xl:4,className:"mb-2",children:Object(d.jsx)(N,{confession:e})},t)}))]})})),T=Object(u.b)((function(e){return console.log(e),{auth:e.firebase.auth}}))((function(e){return e.auth.uid?Object(d.jsxs)(o.a,{children:[Object(d.jsx)(l.a,{sm:12,md:12,lg:7,xl:8,children:Object(d.jsx)(_,{})}),Object(d.jsx)(l.a,{sm:12,md:12,lg:5,xl:4,children:Object(d.jsx)(f,{})})]}):Object(d.jsx)(i.c,{to:"/explore"})})),P=n(432),D=n(433),G="SIGNIN_SUCCESS",B="SIGNIN_ERROR",J="SIGNUP_ERROR",M="SIGNUP_SUCCESS",W="SIGNOUT_SUCCESS",q="SIGNOUT_ERROR",z=Object(u.b)(null,(function(e){return{signOut:function(){return e(function(){var e=Object(I.a)(L.a.mark((function e(t,n,a){var s,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.getFirebase,r=s(),e.next=4,r.auth().signOut();case 4:t({type:W});case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.signOut;return Object(d.jsx)(P.a,{id:"basic-navbar-nav",className:"right",children:Object(d.jsxs)(D.a,{className:"mr-auto",children:[Object(d.jsx)(m.LinkContainer,{to:"/",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-home"})})}),Object(d.jsx)(m.LinkContainer,{to:"/messenger",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-comments"})})}),Object(d.jsx)(m.LinkContainer,{to:"/likes",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-heart"})})}),Object(d.jsx)(m.LinkContainer,{to:"/explore",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-compass"})})}),Object(d.jsx)(m.LinkContainer,{to:"/explore",children:Object(d.jsx)(D.a.Link,{onClick:t,children:Object(d.jsx)("i",{className:"fas fa-sign-out-alt"})})}),Object(d.jsx)(m.LinkContainer,{to:"/account",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("img",{src:"https://avatars.githubusercontent.com/u/48760865?v=4",style:{borderRadius:"50%",width:"40px",height:"40px",marginTop:"-7px"}})})})]})})})),K=function(){return Object(d.jsx)(P.a,{id:"basic-navbar-nav",className:"right",children:Object(d.jsxs)(D.a,{className:"mr-auto",children:[Object(d.jsx)(m.LinkContainer,{to:"/",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-home"})})}),Object(d.jsx)(m.LinkContainer,{to:"/explore",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-compass"})})}),Object(d.jsx)(m.LinkContainer,{to:"/signin",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-sign-in-alt"})})}),Object(d.jsx)(m.LinkContainer,{to:"/signup",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("i",{className:"fas fa-user-plus"})})}),Object(d.jsx)(m.LinkContainer,{to:"/account",children:Object(d.jsx)(D.a.Link,{children:Object(d.jsx)("img",{src:"https://static.thenounproject.com/png/302770-200.png",style:{borderRadius:"50%",width:"40px",height:"40px",marginTop:"-7px"}})})})]})})},X=Object(u.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth,n=Object(a.useState)([{profilePic:"https://avatars.githubusercontent.com/u/48760865?v=4"}]),s=Object(j.a)(n,2);s[0],s[1];return Object(d.jsx)("header",{children:Object(d.jsx)(P.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(m.LinkContainer,{to:"/",children:Object(d.jsx)(P.a.Brand,{children:"Confession"})}),t.uid?Object(d.jsx)(z,{}):Object(d.jsx)(K,{})]})})})})),Y=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(S.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(k.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(d.jsx)(i.c,{to:"/"}):Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("h3",{children:"Sign In"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Email address"}),Object(d.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter email",onChange:this.handleChange})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter password",onChange:this.handleChange})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(d.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})})}}]),n}(a.Component),Q=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e(function(e){return function(){var t=Object(I.a)(L.a.mark((function t(n,a,s){var r,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.getFirebase,t.prev=1,c=r(),t.next=5,c.auth().signInWithEmailAndPassword(e.email,e.password);case 5:n({type:G}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:B,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n,a){return t.apply(this,arguments)}}()}(t))}}}))(Y),V=function(e){Object(y.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",fname:"",lname:"",username:""},e.handleChange=function(t){e.setState(Object(S.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(k.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(d.jsx)(i.c,{to:"/"}):Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("h3",{children:"Register"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"First Name"}),Object(d.jsx)("input",{type:"text",id:"fname",className:"form-control",placeholder:"Enter First Name",onChange:this.handleChange})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Last Name"}),Object(d.jsx)("input",{type:"text",id:"lname",className:"form-control",placeholder:"Enter Last Name",onChange:this.handleChange})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Email address"}),Object(d.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Enter email",onChange:this.handleChange})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Enter password",onChange:this.handleChange})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(d.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(d.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign Up"})]})})}}]),n}(a.Component),H=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signUp:function(t){return e(function(e){return function(){var t=Object(I.a)(L.a.mark((function t(n,a,s){var r,c,i,o,l;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.getFirebase,c=s.getFirestore,t.prev=1,i=r(),o=c(),t.next=6,i.auth().createUserWithEmailAndPassword(e.email,e.password);case 6:return l=t.sent,t.next=9,o.collection("profile").doc(l.user.uid).set({fname:e.fname,lname:e.lname,username:e.email.split("@")[0]});case 9:n({type:"SIGNUP_SUCCESS"}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n({type:J,error:t.t0});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n,a){return t.apply(this,arguments)}}()}(t))}}}))(V),Z=function(){return Object(d.jsx)(_,{})},$=(n(396),function(){return Object(d.jsxs)(c.BrowserRouter,{children:[Object(d.jsx)(X,{}),Object(d.jsxs)("main",{className:"py-3 text-white container-fluid",children:[Object(d.jsx)(i.d,{path:"/",exact:!0,component:T}),Object(d.jsx)(i.d,{path:"/signin",component:Q}),Object(d.jsx)(i.d,{path:"/signup",component:H}),Object(d.jsx)(i.d,{path:"/confess",component:U}),Object(d.jsx)(i.d,{path:"/explore",component:Z})]})]})}),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,435)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},te=n(230),ne=n(77),ae=n(24),se={auth:{authError:null}},re=Object(g.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return console.log("Signin Success"),Object(ae.a)(Object(ae.a)({},e),{},{authError:null});case B:return console.log("Signin Error"),Object(ae.a)(Object(ae.a)({},e),{},{authError:t.error});case M:return console.log("Signup Success"),Object(ae.a)(Object(ae.a)({},e),{},{authError:null});case J:return console.log("Signup Error"),Object(ae.a)(Object(ae.a)({},e),{},{authError:t.error});case W:return console.log("Signout Success"),Object(ae.a)(Object(ae.a)({},e),{},{authError:null});case q:return console.log("Signout Error"),Object(ae.a)(Object(ae.a)({},e),{},{authError:t.error});default:return e}},confessions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return console.log(t.confession),e;case F:return console.log(t.error),e;default:return e}},firestore:ne.firestoreReducer,firebase:b.firebaseReducer}),ce=n(109);n(427),n(424);ce.a.initializeApp({apiKey:"AIzaSyAxvrD76ypETsfy64vEjDjYvIFJvX_se8w",authDomain:"confessions-ef73b.firebaseapp.com",projectId:"confessions-ef73b",storageBucket:"confessions-ef73b.appspot.com",messagingSenderId:"180663555283",appId:"1:180663555283:web:51a8ddab09d8372e803026",measurementId:"G-S5KVS39SWM"}),ce.a.firestore().settings({timeStampsInSnapshots:!0});var ie=ce.a,oe=Object(g.e)(re,Object(g.d)(Object(g.a)(te.a.withExtraArgument({getFirebase:b.getFirebase,getFirestore:ne.getFirestore})),Object(b.reactReduxFirebase)(ie,{attachAuthIsReady:!0,useFirestoreForProfile:!0,userProfile:"profile"}),Object(ne.reduxFirestore)(ie)));oe.firebaseAuthIsReady.then((function(){r.a.render(Object(d.jsx)(u.a,{store:oe,children:Object(d.jsx)($,{})}),document.getElementById("root"))})),ee()}},[[426,1,2]]]);
//# sourceMappingURL=main.40cef9c3.chunk.js.map
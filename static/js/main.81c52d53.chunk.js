(this["webpackJsonpgazi-jarin"]=this["webpackJsonpgazi-jarin"]||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/test.37fbe20d.jpg"},166:function(e,t,a){e.exports=a(329)},171:function(e,t,a){},172:function(e,t,a){},296:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){e.exports=a.p+"static/media/me.c874fabb.jpg"},301:function(e,t,a){},302:function(e,t,a){e.exports=a.p+"static/media/1.f23adc2a.jpg"},303:function(e,t,a){e.exports=a.p+"static/media/2.1135d3ce.jpg"},304:function(e,t,a){e.exports=a.p+"static/media/3.c679b7e6.jpg"},305:function(e,t,a){e.exports=a.p+"static/media/4.3ae8c918.jpg"},306:function(e,t,a){e.exports=a.p+"static/media/5.f790dd49.jpg"},307:function(e,t,a){e.exports=a.p+"static/media/6.76af778b.jpg"},308:function(e,t,a){e.exports=a.p+"static/media/7.b896614c.jpg"},309:function(e,t,a){e.exports=a.p+"static/media/8.2a04789d.jpg"},310:function(e,t,a){e.exports=a.p+"static/media/9.53672516.jpg"},311:function(e,t,a){e.exports=a.p+"static/media/10.f3d0b89e.jpg"},312:function(e,t,a){e.exports=a.p+"static/media/11.75492e2f.jpg"},313:function(e,t,a){e.exports=a.p+"static/media/12.068ab93c.jpg"},314:function(e,t,a){e.exports=a.p+"static/media/13.43fe4247.jpg"},315:function(e,t,a){e.exports=a.p+"static/media/14.705341db.jpg"},316:function(e,t,a){e.exports=a.p+"static/media/15.2d75d035.jpg"},317:function(e,t,a){e.exports=a.p+"static/media/16.309b2d38.jpg"},318:function(e,t,a){e.exports=a.p+"static/media/17.1ad8e14e.jpg"},319:function(e,t,a){e.exports=a.p+"static/media/18.469ab9ff.jpg"},320:function(e,t,a){e.exports=a.p+"static/media/19.78605de2.jpg"},321:function(e,t,a){e.exports=a.p+"static/media/20.fd8541f7.jpg"},322:function(e,t,a){e.exports=a.p+"static/media/1.6487c6fb.mp4"},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(26),r=a.n(c),o=(a(171),a(1)),l=a(5),s=a(14),d=a(3),m=a(4),u=a(347),h=a(67),p=a.n(h),g=a(153),f=a.n(g),b=a(71),v=a.n(b),E=(a(172),a(109),a(22));function y(e){var t=i.a.useState(!1),a=Object(E.a)(t,2),n=a[0],c=a[1],r=i.a.useRef();return i.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return c(e.isIntersecting)}))})).observe(r.current)}),[]),i.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:r},e.children)}var w=window.innerWidth<600,j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.expanded,t=[i.a.createElement("a",{href:"/hao"},"/home"),i.a.createElement("a",{href:"#about"},"/about"),i.a.createElement("a",{href:"#experience"},"/AACC"),i.a.createElement("a",{href:"#projects"},"/projects"),i.a.createElement("a",{hretf:""},"zoom out to 75% for the best experience!")];return i.a.createElement("div",{className:"sidebar-nav"},!w&&i.a.createElement(u.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle"},i.a.createElement(u.a.Body,null,i.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("div",null,e))}))))),i.a.createElement("div",{className:"sidebar-logos",href:"/"},i.a.createElement("a",{href:"mailto:haowangbright@gmail.com"},i.a.createElement(p.a,{style:{fontSize:20}})),i.a.createElement("a",{href:"https://github.com/ihatecfishes"},i.a.createElement(v.a,{style:{fontSize:19}})),i.a.createElement("a",{href:""},i.a.createElement(f.a,{style:{fontSize:21}}))))}}]),a}(i.a.Component),k=(a(296),a(154)),S=a.n(k),x=a(6),N=a(155),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){!function(){var e,t,a,n,i,c,r,o=new x.i;function l(e,t,a){var n=function(e,t,a){var n=0,i=0,c={x:window.innerWidth,y:window.innerHeight};e<=c.x/2&&(n=a*((c.x/2-e)/(c.x/2)*100)/100*-1);e>=c.x/2&&(n=a*((e-c.x/2)/(c.x/2)*100)/100);t<=c.y/2&&(i=.5*a*((c.y/2-t)/(c.y/2)*100)/100*-1);t>=c.y/2&&(i=a*((t-c.y/2)/(c.y/2)*100)/100);return{x:n,y:i}}(e.x,e.y,a);t.rotation.y=x.G.degToRad(n.x),t.rotation.x=x.G.degToRad(n.y)}!function(){(e=new x.eb).background=new x.j(661807),e.fog=null,(t=new x.rb({alpha:!0})).shadowMap.enabled=!0,t.setSize(.35*window.innerWidth,.35*window.innerHeight),document.getElementById("gazi-model").appendChild(t.domElement),(a=new x.V(65,window.innerWidth/window.innerHeight,.1,1e3)).position.z=30,a.position.x=0,a.position.y=-3;var o=new x.L({color:13424374,skinning:!0});(new N.a).load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb",(function(t){n=t.scene;var a=t.animations;n.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material=o),e.isBone&&"mixamorigNeck"===e.name&&(i=e),e.isBone&&"mixamorigSpine"===e.name&&(c=e)})),n.scale.set(15,15,15),n.position.y=-23,e.add(n),r=new x.b(n);var l=x.a.findByName(a,"idle");l.tracks.splice(3,3),l.tracks.splice(9,3),r.clipAction(l).play()}),void 0,(function(e){console.error(e)}));var l=new x.p(16777215,16777215,.61);l.position.set(0,50,0),e.add(l);var s=8.25,d=new x.k(16777215,.54);d.position.set(-8,12,8),d.castShadow=!0,d.shadow.mapSize=new x.ob(1024,1024),d.shadow.camera.near=.1,d.shadow.camera.far=1500,d.shadow.camera.left=-8.25,d.shadow.camera.right=s,d.shadow.camera.top=s,d.shadow.camera.bottom=-8.25,e.add(d);var m=new x.W(5e3,5e3,1,1),u=new x.L({color:661807,shininess:0}),h=new x.J(m,u);h.rotation.x=-.5*Math.PI,h.receiveShadow=!0,h.position.y=-11,e.add(h);var p=new x.ib(16,46,46),g=new x.K({color:6619098}),f=new x.J(p,g);f.position.z=-30,f.position.y=-2.5,f.position.x=-.25,e.add(f)}(),function n(){if(r&&r.update(o.getDelta()),function(e){var t=e.domElement,a=window.innerWidth,n=window.innerHeight,i=t.width/window.devicePixelRatio,c=t.height/window.devicePixelRatio,r=i!==a||c!==n;r&&e.setSize(a,n,!1);return r}(t)){var i=t.domElement;a.aspect=i.clientWidth/i.clientHeight,a.updateProjectionMatrix()}t.render(e,a),requestAnimationFrame(n)}(),document.addEventListener("mousemove",(function(e){var t=function(e){return{x:e.clientX,y:e.clientY}}(e);i&&c&&(l(t,i,50),l(t,c,30))}))}()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(t){return e.mount=t}})}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1",visible:!0},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"intro"},i.a.createElement("div",{id:"gazi-model"},i.a.createElement(O,null)),i.a.createElement(S.a,{avgTypingDelay:120},i.a.createElement("span",{className:"intro-title"},"Welcome to ",i.a.createElement("span",{className:"intro-name"},"Hao"),"'s Portfolio")),i.a.createElement(y,null,i.a.createElement("div",{className:"intro-subtitle"},"Humble in our aspirations, gracious in our success, resilient in our failure."),i.a.createElement("div",{className:"intro-desc"},"I'm a highschool student at Nguyen Thi Minh Khai Highschool. I have profound fascination in Artificial Intelligence, Computer Science, Computer Vision, and everything related."),i.a.createElement("a",{href:"mailto:haowangbright@gmail.com",className:"intro-contact"},i.a.createElement(p.a,null),"  Say hello")))}}]),a}(i.a.Component),A=a(37),T=a(345),P=a(349),I=a(346),M=a(344),K=a(348),R=window.innerWidth<600;function z(e){var t=e.children,a=e.value,n=e.index,c=Object(A.a)(e,["children","value","index"]);return R?i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),a===n&&i.a.createElement(K.a,{p:3},i.a.createElement(M.a,null,t))):i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},c),a===n&&i.a.createElement(K.a,{p:3},i.a.createElement(M.a,null,t)))}var H=Object(T.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),W=function(){var e=H(),t=i.a.useState(0),a=Object(E.a)(t,2),n=a[0],c=a[1],r={cuutruyen:{jobTitle:"Translator @",duration:"MAR 2020 - NOV 2021",desc:["Translate raw mangas/light novels from English to Vietnamese for cuutruyen.net website.","Perform high precision and consistent traslations.","Plan on joining the current website development team after highschool graduation.","Learnt many soft and communicating skills."]},NTMK:{jobTitle:"An Active Student @",duration:"AUG 2019 - current",desc:["Parcitipate in many social/science activities and competitions.","Member of MEU - Miki English Union Club (social) and head of STEAMK - Minh Khai Steam Club (science & robotics).","Member of English & Informatics selection team - Bronze medal in 30 April Olympic Contest (English). ","Maintain consistent grades & fair GPA."]},Activities:{jobTitle:"Knowledge Seeking @",duration:"Since i was born",desc:["Parcitipate in the Massive Open Online Course (MOOC) Web Programming at the American Center HCM city - June to July 2019","Parcitipate in the Summer Tech Camp organized by the American Center HCM city - August 2020","Parcitipate in the Global MakeCode Arcade Game Jam at the American Center HCM city (U.S Consulate x Steam for VietNam) - December 2021.",'Parcitipate in the English Language Teacher Professional Development Webinar: "Applying technology in the English language classroom" - August 2020.',"Part of many events & programs of different fields, especially science."]},STEAMK:{jobTitle:"Head Student @",duration:"NOV 2021 - current",desc:["Parcitipate and assisted/hosted knowledge sharing/teaching events.","Pioneer in new technologies and inform to others: Machine Learning, Raspberry Pi, Jetson Nano,...","Cleaner/Furnisher of the workplace."]},Competitions:{jobTitle:"A Fierce Competitor @",duration:"Since i was born",desc:["IELTS 7.0 at Grade 9.","IELTS 7.5 at Grade 12.","Runner-up prize (silver trophy) in the RMIT's National Techgenius Competition - Engineering category.","Honorable Award from the National Speaking English Contest 2020.","First place in the Scientific Research Competition of the school.","Third place in the Scientific Research Competition of the city.","Bronze medal in 30 April Olympic Contest (English).","Bronze medal in the city's excellent student English contest."]}};return i.a.createElement("div",{className:e.root},i.a.createElement(P.a,{orientation:R?null:"vertical",variant:R?"fullWidth":"scrollable",value:n,onChange:function(e,t){c(t)},className:e.tabs},Object.keys(r).map((function(e,t){return i.a.createElement(I.a,Object.assign({label:R?"0".concat(t,"."):e},(a=t,R?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(r).map((function(e,t){return i.a.createElement(z,{value:n,index:t},i.a.createElement("span",{className:"joblist-job-title"},r[e].jobTitle+" "),i.a.createElement("span",{className:"joblist-job-company"},e),i.a.createElement("div",{className:"joblist-duration"},r[e].duration),i.a.createElement("ul",{className:"job-description"},r[e].desc.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",{key:t},e))}))))})))},V=window.innerWidth<600;function G(e){var t=e.children,a=e.value,n=e.index,c=Object(A.a)(e,["children","value","index"]);return V?i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),a===n&&i.a.createElement(K.a,{p:3},i.a.createElement(M.a,null,t))):i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},c),a===n&&i.a.createElement(K.a,{p:3},i.a.createElement(M.a,null,t)))}var J=Object(T.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),L=function(){var e=J(),t=i.a.useState(0),a=Object(E.a)(t,2),n=a[0],c=a[1],r={Ability:{jobTitle:"",duration:"",desc:["Good at Programming & Science as well as Critical and Logical Thinking. Unique research ability, high adaptability, responsibility and curiosity. Self-studied Computer Vision, Web Programming, Algorithms, Python, C++, Raspberry Pi, Jetson Nano, Deep Learning, Robotics, etc.. Experienced with diverse types of hardware and software and have done many projects competitions with them."]},Aspiration:{jobTitle:"",duration:"",desc:["Humble in our aspirations, gracious in our success, resilient in our failure. I want to bring AI closer and more approachable to youngsters, specifically highschool students to make AI integrate into Vietnam better. Work in a professional environment and use my knowledge to improve Vietnamese people\u2019s daily lives."]},Creativity:{jobTitle:"",duration:"",desc:["Have the ability to create technological products that serves different needs (attendance check, object detection, facemask detection, etc.. ). Have creative ways of approaching and executing problems. Volunteered in the frontline against Covid-19 to see problems that I could help solving with my inventions. Planned and designed \u201cThe Anti-Covid Intelligent Machine\u201d\u2019s functionalities, mechanism, etc.."]},Commitment:{jobTitle:"",duration:"",desc:["Spent 7 months to create \u201cThe Anti-Covid Intelligent Machine\u201d from scratch. Become an influencer in the Vietnamese AI field and make AI more popular and developmental especially to younger technology enthusiasts since AI could make a big impact on the society through its applications."]}};return i.a.createElement("div",{className:e.root},i.a.createElement(P.a,{orientation:V?null:"vertical",variant:V?"fullWidth":"scrollable",value:n,onChange:function(e,t){c(t)},className:e.tabs},Object.keys(r).map((function(e,t){return i.a.createElement(I.a,Object.assign({label:V?"0".concat(t,"."):e},(a=t,V?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(r).map((function(e,t){return i.a.createElement(G,{value:n,index:t},i.a.createElement("span",{className:"joblist-job-title"},r[e].jobTitle+" "),i.a.createElement("span",{className:"joblist-job-company"},e),i.a.createElement("div",{className:"joblist-duration"},r[e].duration),i.a.createElement("ul",{className:"job-description"},r[e].desc.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",{key:t},e))}))))})))};window.innerWidth;Object(T.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),a(298);var B=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"experience"},i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ AACC")),i.a.createElement(L,null)),i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ experience")),i.a.createElement(W,null)))}}]),a}(i.a.Component),D=(a(299),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=i.a.createElement("p",null,"I'm currently a ",i.a.createElement("b",null,"Highschool Student")," at"," ",i.a.createElement("b",null," Nguyen Thi Minh Khai Highschool "),", with a focus in Computer Science and Artificial Intelligence. Recently, I parcitipated in the"," ",i.a.createElement("a",{href:"https://www.event.rmit.edu.vn/techgenius2021-en"}," National TechGenius Competition")," and won"," ",i.a.createElement("b",null,"Silver Trophy")," in Engineering category."),t=i.a.createElement("p",null,"I'm into any sort of ",i.a.createElement("b",null,"software development")," that requires creativity and logic. My other areas of interest include ",i.a.createElement("b",null,"machine learning"),","," ",i.a.createElement("b",null,"computer vision"),","," "," ",i.a.createElement("b",null,"competitive programming")," and ",i.a.createElement("b",null,"game development"),". I also like digital drawing and video editing. In my free time, I enjoy gourmet plates and play games."),n=[e,t],c=["Python","HTML & CSS","C/C++","React.js","Tensorflow","Keras","Jetson Nano","Raspberry Pi"],r=(c.map((function(e){return i.a.createElement("li",null,e)})),a(300));return i.a.createElement("div",{id:"about"},i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ about me")),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-description"},n,"Here are some technologies I have been working with:",i.a.createElement("ul",{className:"tech-stack"},c.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))})))),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:r})))))}}]),n}(i.a.Component)),F=(a(301),a(156)),U=a.n(F),q=a(157),Z=a.n(q),_=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(n,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e={"Anti-Covid Intelligent Machine":{desc:"A machine that detect facemasks, track faces, measure temperature, check attendance through personal QRCodes.",techStack:"Python, C++, ESP, Raspberry Pi, Jetson Nano, Tensorflow, Keras",link:"https://github.com/ihatecfishes/Intelligent-Anti-Covid-Machine",open:""},Portfolio:{desc:"What you are currently in, a static website that contains all my infomations, projects and ambitions.",techStack:"Javascript, HTML / CSS, Node.js, React.js",link:"https://github.com/ihatecfishes/hao",open:""},"Facemask Detection":{desc:"Detects whether you are wearing a mask or not. Using Deep Learning Sequential Model to train the detection process.",techStack:"Python, Tensorflow, Keras, OpenCV",link:"https://github.com/ihatecfishes/facemask-detection",open:""},"Face-Tracking Camera":{desc:"A camera that follows your face in both axes. Using the Viola Jones Algorithm to detect faces and coordinates management to track the face.",techStack:"Python, Raspberry Pi, OpenCV, Viola Jones Algorithm",link:"https://github.com/ihatecfishes/Face-Tracking_Raspberry-pi",open:""},"My Project References and Pictures":{desc:"Pictures I caught throughout my stem journey and the final results.",techStack:"(Click the open icon to access)",link:"",open:"https://drive.google.com/drive/folders/1VR-rZBIPcZpfj-u3E7G-LdEwhIq7oooq?usp=sharing"}},t=(a(147),a(302)),n=a(303),c=a(304),r=a(305),o=a(306),l=(a(307),a(308),a(309)),s=a(310),d=(a(311),a(312)),m=a(313),u=(a(314),a(315)),h=a(316),p=(a(317),a(318)),g=a(319),f=a(320),b=a(321),E=a(322);return i.a.createElement("div",{id:"projects"},i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ projects")),i.a.createElement("div",{className:"project-container"},i.a.createElement("ul",{className:"projects-grid"},Object.keys(e).map((function(t,a){return i.a.createElement(y,{delay:"".concat(a+1,"00ms")},i.a.createElement("li",{className:"projects-card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"folder-icon"},i.a.createElement(U.a,{style:{fontSize:35}})),i.a.createElement("span",{className:"external-links"},i.a.createElement("a",{className:"github-icon",href:e[t].link},i.a.createElement(v.a,{style:{fontSize:20,color:"var(--lightest-slate)"}})),e[t].open&&i.a.createElement("a",{className:"open-icon",href:e[t].open},i.a.createElement(Z.a,{style:{fontSize:25,color:"var(--lightest-slate)"}})))),i.a.createElement("div",{className:"card-title"},t),i.a.createElement("div",{className:"card-desc"},e[t].desc),i.a.createElement("div",{className:"card-tech"},e[t].techStack)))})))),i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ my journey")),i.a.createElement("div",{className:"about-image"},i.a.createElement("video",{src:E,controls:!0})),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:c,width:"500",height:"500"}),i.a.createElement("img",{src:r,width:"500",height:"500"}),i.a.createElement("img",{src:s,width:"500",height:"900"})),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:l,width:"500",height:"500"}),i.a.createElement("img",{src:o,width:"500",height:"500"}),i.a.createElement("img",{src:t,width:"500",height:"600"})),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:d,width:"500",height:"500"}),i.a.createElement("img",{src:m,width:"500",height:"500"}),i.a.createElement("img",{src:u,width:"500",height:"500"})),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:p,width:"500",height:"500"}),i.a.createElement("img",{src:h,width:"500",height:"500"}),i.a.createElement("img",{src:f,width:"500",height:"500"})),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:b,width:"500",height:"500"}),i.a.createElement("img",{src:n,width:"500",height:"500"}),i.a.createElement("img",{src:g,width:"500",height:"500"}))))}}]),n}(i.a.Component),Q=(a(323),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement(y,null,i.a.createElement("div",{id:"credits"},i.a.createElement("div",{className:"ending-credits"},i.a.createElement("div",null,"Built and designed by Vuong Chi Hao. Inspired by Gazi Jarin."),i.a.createElement("div",null,"All rights reserved. \xa9"))))}}]),a}(i.a.Component));a(324),a(325),a(326);var X=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"content"},i.a.createElement(C,null),i.a.createElement(D,null),i.a.createElement(B,null),i.a.createElement(_,null),i.a.createElement(Q,null)),i.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(327);var Y=a(159);r.a.render(i.a.createElement(Y.a,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.81c52d53.chunk.js.map
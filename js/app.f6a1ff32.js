(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/my-first-project/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3f09":function(e,t,n){},"4d82":function(e,t,n){"use strict";var a=n("3f09"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("main-container")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"template"}},[n("v-content",[n("v-container",{staticClass:"pa-0",attrs:{"fill-height":"",fluid:""}},[n("v-row",{staticClass:"ma-0",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("sidebar-container")],1),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("content-container")],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("timeline-container")],1)],1)],1)],1)],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{height:"100%"}},[n("v-card-text",[n("v-row",[n("v-col",{staticClass:"pa-0"},[n("v-row",{staticClass:"ma-4",attrs:{justify:"center"}},[n("avatar")],1),n("v-row",{staticClass:"ma-2",attrs:{justify:"center"}},[n("h1",[e._v(" Georgi "),n("span",{staticClass:"indigo--text text--lighten-1"},[e._v(" Kolev ")])])]),n("v-row",{staticClass:"ma-0 pb-4",attrs:{justify:"center"}},[n("span",[e._v(" web developer ")])])],1)],1),n("sidebar-section",{attrs:{sections:e.sections.info}}),n("sidebar-section",{attrs:{sections:e.sections.socials}}),n("sidebar-section",{attrs:{sections:e.sections.hobbies},scopedSlots:e._u([{key:"hobbies",fn:function(){return[n("v-row",{staticClass:"ml-1 mr-1",attrs:{justify:"center"}},[e._l(e.sections.hobbies.items,(function(t,a){return[n("v-col",{key:a,staticClass:"pa-1",attrs:{xs:"12",sm:"12",md:"6",lg:"4",align:"center"}},[n("v-chip",{staticClass:"pa-4 mt-1 mb-1",attrs:{outlined:"",color:"indigo"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[e._v(" "+e._s(t.icon)+" ")])],1),e._v(" "+e._s(t.text)+" ")],1)],1)]}))],2)]},proxy:!0}])}),n("sidebar-section",{attrs:{sections:e.sections.languages},scopedSlots:e._u([{key:"languages",fn:function(){return[n("v-row",{attrs:{justify:"center"}},[e._l(e.sections.languages.items,(function(t,a){return[n("v-col",{key:a,staticClass:"pa-2",attrs:{align:"center"}},[n("v-progress-circular",{attrs:{value:t.value,size:"100",width:"8",rotate:"270",color:"#7874f2"}},[e._v(" "+e._s(t.text)+" ")])],1)]}))],2)]},proxy:!0}])})],1)],1)},c=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-avatar",{staticClass:"avatar",attrs:{size:"100%","max-height":"200","max-width":"200","min-height":"50","min-width":"50"}},[a("img",{attrs:{src:n("bd86"),alt:"Georgi Kolev"}})])},u=[],m={},p=m,h=(n("80e6"),n("2877")),v=n("6544"),f=n.n(v),g=n("8212"),b=Object(h["a"])(p,d,u,!1,null,"12616c4a",null),y=b.exports;f()(b,{VAvatar:g["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"title pt-2 pb-2"},[e._v(" "+e._s(e.sections.title)+" ")]),e.$slots.hobbies?[e._t("hobbies")]:e.$slots.languages?[e._t("languages")]:[e._t("default",e._l(e.sections.items,(function(e,t){return n("section-item",{key:t,attrs:{item:e}})})))]],2)},_=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[e.hasIcon?n("v-col",{attrs:{cols:"2","align-self":"center"}},[n("v-icon",{attrs:{color:"indigo"}},[e._v(" "+e._s(e.item.icon)+" ")])],1):e._e(),n("v-col",{staticClass:"pa-0",attrs:{cols:"10","align-self":"center"}},[n("div",[e._v(" "+e._s(e.item.name)+" ")]),n("p",{staticClass:"ma-0"},[e.item.link?n("a",{staticClass:"grey--text",attrs:{href:e.item.link,target:"_blank"}},[e._v(" "+e._s(e.item.text)+" ")]):n("span",[e._v(" "+e._s(e.item.text)+" ")])])])],1)},x=[],C={props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return this.item.icon}}},I=C,S=n("62ad"),j=n("132d"),V=n("0fd9"),A=Object(h["a"])(I,k,x,!1,null,"e64e3310",null),T=A.exports;f()(A,{VCol:S["a"],VIcon:j["a"],VRow:V["a"]});var O={components:{SectionItem:T},props:{sections:{type:Object,default:function(){}}}},G=O,D=Object(h["a"])(G,w,_,!1,null,"5e60915b",null),M=D.exports,B={components:{Avatar:y,SidebarSection:M},data:function(){return{sections:{info:{title:"Info",items:[{icon:"mdi-email",text:"georgi.lyubomirov.kolev@gmail.com"},{icon:"mdi-cake-variant",text:"Sept 8, 1992"},{icon:"mdi-map-marker",text:"Sofia, Bulgaria"}]},socials:{title:"Socials",items:[{icon:"mdi-linkedin",text:"linkedin.com/in/georgi-kolev",link:"https://www.linkedin.com/in/georgi-kolev-03656619b"},{icon:"mdi-github",text:"github.com/geoeg",link:"https://github.com/geoeg"},{icon:"mdi-chess-knight",text:"lichess.org/geoeg",link:"https://lichess.org/@/geoeg"}]},hobbies:{title:"Hobbies",items:[{icon:"mdi-chef-hat",text:"Cook"},{icon:"mdi-soccer",text:"Sport"},{icon:"mdi-code-tags",text:"Code"},{icon:"mdi-music-circle",text:"Music"},{icon:"mdi-image-filter-hdr",text:"Travel"},{icon:"mdi-brush",text:"Draw"}]},languages:{title:"Languages",items:[{text:"Bulgarian",value:100},{text:"German",value:90},{text:"English",value:80}]}}}}},E=B,$=n("b0af"),J=n("99d9"),P=n("cc20"),L=n("490a"),R=Object(h["a"])(E,l,c,!1,null,"36a1b88d",null),F=R.exports;f()(R,{VAvatar:g["a"],VCard:$["a"],VCardText:J["b"],VChip:P["a"],VCol:S["a"],VIcon:j["a"],VProgressCircular:L["a"],VRow:V["a"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-4",attrs:{height:"100%"}},[n("content-section",{attrs:{title:"About me"}},[n("v-card",{attrs:{hover:""}},[n("v-card-text",{staticClass:"text-justify"},[e._v(" As a well-organized, responsible and open-minded person, I am eager to develop and to learn. In recent years I gained interest in web development. Since then, I have learned JavaScript and common technologies like Vue.js and Vuetify. At the end of 2019 I submitted my thesis with main focus at web component development with ccm.js. That gave me the possibility to explore a part of the web development world and gain a huge interest in it. After the journey of living and studying business informatics abroad, now I'm looking for new opportunities in my home country. The enthusiasm and optimism that I’m filled with, give me energy to chase my dreams with positivity and passion. ")])],1)],1),n("content-section",{attrs:{title:"Education"}},e._l(e.educations,(function(t,a){return n("v-row",{key:a},[n("v-col",{staticClass:"pt-0"},[n("v-card",{attrs:{hover:""}},[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"2","align-self":"center"}},[n("v-row",{attrs:{justify:"center"}},[n("v-icon",{attrs:{large:"",color:"indigo"}},[e._v(" "+e._s(t.icon)+" ")])],1)],1),n("v-col",{staticClass:"pt-0 pb-0",attrs:{cols:"10"}},[n("v-card-title",[e._v(" "+e._s(t.title)+" ")]),n("v-card-subtitle",{staticClass:"pb-0"},[e._v(" "+e._s(t.description)+" ")]),n("v-card-text",[n("v-icon",{attrs:{color:"indigo"}},[e._v("mdi-map-marker")]),e._v(" "+e._s(t.location)+" ")],1)],1)],1)],1)],1)],1)})),1),n("content-section",{attrs:{title:"Skills"}},[n("v-row",[e._l(e.skills,(function(t,a){return[n("v-col",{key:a,attrs:{cols:"12",md:"6"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var i=a.hover;return[n("v-card",{attrs:{elevation:i?6:2}},[n("v-icon",{attrs:{color:"indigo"}},[e._v(" "+e._s(t.icon)+" ")]),e._v(" "+e._s(t.title)+" "),n("v-progress-linear",{attrs:{"background-opacity":"0.3",height:"8",color:"#7874f2","buffer-value":"100",value:t.value}})],1)]}}],null,!0)})],1)]}))],2)],1)],1)},z=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mt-2",attrs:{flat:""}},[n("v-card-title",{staticClass:"pl-0"},[n("p",{staticClass:"headline ma-0"},[e._v(" "+e._s(e.title)+" ")])]),n("v-spacer"),n("v-card-text",{staticClass:"pa-0"},[e._t("default")],2)],1)},W=[],q={props:{title:{type:String,default:""}}},Q=q,K=n("2fa4"),N=Object(h["a"])(Q,H,W,!1,null,null,null),X=N.exports;f()(N,{VCard:$["a"],VCardText:J["b"],VCardTitle:J["c"],VSpacer:K["a"]});var Y={components:{ContentSection:X},data:function(){return{educations:[{icon:"mdi-school",title:"Bachelor's degree, Business Informatics",description:"Bonn-Rhein-Sieg University of Applied Sciences",location:"St. Augustin, Germany"},{icon:"mdi-school-outline",title:"Secondary Education",description:"Geo Milev Foreign Language School",location:"Dobrich, Bulgaria"}],skills:[{title:"JavaScript",icon:"mdi-language-javascript",value:90},{title:"HTML",icon:"mdi-language-html5",value:90},{title:"VueJS",icon:"mdi-vuejs",value:75},{title:"CSS",icon:"mdi-language-css3",value:80},{title:"Vuetify",icon:"mdi-vuetify",value:75},{title:"Bootstrap",icon:"mdi-bootstrap",value:75},{title:"Git",icon:"mdi-git",value:75},{title:"jQuery",icon:"mdi-jquery",value:75},{title:"Agile Development",icon:"mdi-teach",value:95},{title:"JIRA",icon:"mdi-jira",value:90},{title:"Balsamiq",icon:"mdi-brush",value:90},{title:"Adobe XD",icon:"mdi-adobe",value:60},{title:"Selenium",icon:"mdi-view-quilt",value:50},{title:"Cucumber",icon:"mdi-view-quilt",value:40}]}}},Z=Y,ee=n("ce87"),te=n("8e36"),ne=Object(h["a"])(Z,U,z,!1,null,"42bb3832",null),ae=ne.exports;f()(ne,{VCard:$["a"],VCardSubtitle:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:S["a"],VHover:ee["a"],VIcon:j["a"],VProgressLinear:te["a"],VRow:V["a"]});var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",{staticClass:"text-justify"},[n("content-section",{attrs:{id:"timeline",title:e.detailed?"My Journey":"My Experience"}},[n("div",[n("v-switch",{attrs:{color:"indigo",label:e.detailed?"Detailed":"Summary"},model:{value:e.detailed,callback:function(t){e.detailed=t},expression:"detailed"}})],1),n("v-timeline",{staticClass:"pa-0",attrs:{dense:""}},e._l(e.orderedItems,(function(t,a){return n("v-timeline-item",{key:a,class:{transparent:t.transparent},attrs:{icon:t.icon||"",color:"indigo",large:""},scopedSlots:e._u([t.iconImage?{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:e.publicPath(t.iconImage)}})])]},proxy:!0}:null,{key:"opposite",fn:function(){},proxy:!0}],null,!0)},[n("v-row",{staticClass:"pr-4"},[e.$vuetify.breakpoint.smAndUp?n("v-col",{attrs:{md:"1",sm:"2","align-self":"center"}},[n("span",[e._v(e._s(t.year))])]):e._e(),n("v-col",{staticClass:"pa-0",attrs:{md:"11",sm:"10",xs:"12"}},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"pb-0"},[n("div",[e.$vuetify.breakpoint.xsOnly?n("p",[e._v(" "+e._s(t.year)+" ")]):e._e(),n("h3",[e._v(e._s(t.title))])])]),n("v-card-text",{staticClass:"pa-4"},[n("v-row",[n("v-col",{staticClass:"pa-4 ma-0",attrs:{md7:!!t.image,md12:!t.image,xs:"12"}},[n("div",{staticClass:"ma-0"},[t.text?n("span",{staticClass:"pre"},[e._v(" "+e._s(t.text)+" ")]):t.html?n("div",{domProps:{innerHTML:e._s(t.html)}}):e._e()])])],1)],1)],1)],1)],1)],1)})),1)],1)],1)],1)},oe=[],re=(n("4de4"),n("2909")),se={components:{ContentSection:X},data:function(){return{detailed:!0,items:[{detailed:!0,transparent:!0,year:"1992",title:"Born on Sept 8, 1992",html:"With a chance of %0.00000000000512.<br>I'm completely aware of value of the life!",icon:"mdi-cake-variant"},{detailed:!1,transparent:!1,year:"2011",title:"Graduated from Geo Milev Foreign Language School",html:'\n          <p>\n            For me learning foreign languages was something really interesting I decided to join the <a target="_blank" href="https://eg-dobrich.com/">Foreign Language School Geo Milev</a>\n            where I studied german as main and english as second foreign language. The last year of high school I passed DaF (Deutsch als Fremdsprache) exam that gave me the C1 german certificate.\n            The excelent degree and the DaF certificate where a clear sign for me that I want to explore some german speaking counrty.\n          </p>\n        ',icon:"mdi-school"},{detailed:!0,transparent:!0,year:"2011",title:"BonnJour!",html:"\n          <p>\n            So after graduated from high school I decided to study in Bonn, Germany. My choice was Bonn-Rhein-Sieg University.\n          </p>          \n          ",icon:"mdi-map-marker"},{detailed:!1,transparent:!1,year:"2013",title:"Worked Web Content Assistant",html:'\n          <p>\n            I spent a year working at <a target="_blank" href="https://www.snoopmedia.com/">Snoopmedia</a>. There I supported the experienced colleagues in small tasks like updating the content of the web pages of\n            the German Academic Exchange Service (Deutscher Akademischer Austauschdienst - <a target="_blank" href="https://www.daad.de/de/">DAAD</a>) and <a target="_blank" href="https://www.das-ist-drin.de/">das-ist-drin</a>.\n            In the time there I boosted my time management skills and learned some basic web technologies like HTML, CSS and JS.\n          </p>\n        ',icon:"mdi-laptop"},{detailed:!1,transparent:!1,year:"2017",title:"Volunteered at DOAG (German Oracle User Group) Conference",html:'\n          <p>\n          My university supported yearly the IT conference organized by <a target="_blank" href="https://www.doag.org/en/home/">DOAG e.V.</a>.\n          There the students used to assist the technical preparation of scenes and support the normal workflow of the conference.\n          The visit of DOAG showed me some interesting keynotes, presentations and workshops that opened my eyes for some new IT technologies. \n          </p>\n        ',icon:"mdi-cards-heart"},{detailed:!0,transparent:!0,year:"2018",title:"Volunteered at JavaLand Conference",html:'\n          <p>\n          Similar to the DOAG conference, my university supported also the <a target="_blank" href="https://www.javaland.eu/de/home/">JavaLand</a> conference.\n          </p>\n        ',icon:"mdi-cards-heart"},{detailed:!0,transparent:!0,year:"2018",title:"Volunteered at DOAG (German Oracle User Group) Conference",html:"\n          <p>\n          As in 2017, I joined the DOAG conference the next year.  \n          </p>\n        ",icon:"mdi-cards-heart"},{detailed:!1,transparent:!1,year:"2019",title:"Worked as QA Student Intern",html:"\n          <p>\n              As a part of my study I had to find an internship with an IT core. So I got lucky and explored for 4 months the QA world supporting the university intern project ProSyWis. \n              In the time spent there I developed a test guide targeting new developers that want to join the team:\n          </p>\n              <ul>\n                <li>Practical one: Using Selenium and Cucumber I built a template for UI testing.</li>\n                <li>Theoretical one: A guide of 20 pages summarizing main conventions for writing tests for the project.</li>\n            </ul>\n        ",icon:"mdi-laptop"},{detailed:!1,transparent:!1,year:"2019",title:"Worked as Shift Supervisor",html:'\n          <p>\n          In my student years I spent quite some time working, so I could fincance my life in Germany. At <a target="_blank" href="https://anno-tubac.de/">Anno Tubac</a> I explored the restaurant world,\n          working as shift supervisor. I gained a lot of experience during the time there, working at every possible position so I could know about every details in every process happening there.\n          The time spend there some of my main tasks were:\n          </p>\n            <ul>\n                <li>Manage and organize the workflow</li>\n                <li>Ensure that the daily goals are met</li>\n                <li>Train and integrate new employees</li>\n                <li>Active guest contact</li>\n            </ul>\n        ',icon:"mdi-silverware-fork-knife"},{detailed:!1,transparent:!1,year:"2020",title:"Graduated from the Bonn-Rhein-Sieg University",html:'\n          <p>\n              In January 2020 I finished my Bachelor study in Business Informatics at <a target="_blank" href="https://www.h-brs.de/en">H-BRS</a>. The thesis I wrote in german had the topic: \'Development of an exam builder using ccmJS-Framework and -Apps\'.\n              The source code from it is available <a target="_blank" href="https://github.com/geoeg/">here</a>.\n              This topic gave me the opportunity to explore the huge world of modern web technologies like web components. Now I\'m eager to develop and jump in the depth of the IT world.\n            Some of the main topics in my study were:\n          </p>\n            <ul>\n                <li>Algorithms and Data structures</li>\n                <li>Software Engineering</li>\n                <li>Database Systems</li>\n                <li>IT-Management</li>\n                <li>E-Business</li>\n                <li>Business English</li>\n                <li>Economy basics</li>\n                <li>IT-Law basics</li>\n            </ul>\n        ',icon:"mdi-school"},{detailed:!0,transparent:!0,year:"2020",title:"Moved forward to Sofia & back to Bulgaria",html:"\n          <p>\n              After the journey living for 8.5 years abroad, I was looking for some new opportunities. \n              For me it was clear that I want to move to other city/country, so the move to Sofia was something I already decided an year ago. \n              Now I'm looking for a developer job to apply the knowledge I gained in my study and collect some new experience in modern web technologies.\n              To meet new people, to spend more time with family and childhood friends and to explore the bulgarian culture in depth are just some of the additional positives I gained with that move.\n          </p>          \n          ",icon:"mdi-map-marker"}]}},computed:{orderedItems:function(){var e=Object(re["a"])(this.items).reverse();return this.detailed?e:e.filter((function(e){return!e.detailed}))}}},le=se,ce=(n("4d82"),n("b73d")),de=n("8414"),ue=n("1e06"),me=Object(h["a"])(le,ie,oe,!1,null,"6e9a987a",null),pe=me.exports;f()(me,{VAvatar:g["a"],VCard:$["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:S["a"],VRow:V["a"],VSwitch:ce["a"],VTimeline:de["a"],VTimelineItem:ue["a"]});var he={name:"MainContainer",components:{SidebarContainer:F,ContentContainer:ae,TimelineContainer:pe}},ve=he,fe=(n("cbe2"),n("7496")),ge=n("a523"),be=n("a75b"),ye=Object(h["a"])(ve,r,s,!1,null,"72c7e45e",null),we=ye.exports;f()(ye,{VApp:fe["a"],VCol:S["a"],VContainer:ge["a"],VContent:be["a"],VRow:V["a"]});var _e={name:"App",components:{MainContainer:we},data:function(){return{}}},ke=_e,xe=Object(h["a"])(ke,i,o,!1,null,null,null),Ce=xe.exports;f()(xe,{VApp:fe["a"],VContent:be["a"]});var Ie=n("f309");a["a"].use(Ie["a"]);var Se=new Ie["a"]({iconfont:"mdi"});a["a"].config.productionTip=!1,new a["a"]({vuetify:Se,render:function(e){return e(Ce)}}).$mount("#app")},"809c":function(e,t,n){},"80e6":function(e,t,n){"use strict";var a=n("c8a4"),i=n.n(a);i.a},bd86:function(e,t,n){e.exports=n.p+"img/geoeg-avatar.ab8558d5.jpg"},c8a4:function(e,t,n){},cbe2:function(e,t,n){"use strict";var a=n("809c"),i=n.n(a);i.a}});
//# sourceMappingURL=app.f6a1ff32.js.map
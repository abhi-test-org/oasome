(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{106:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(0),o=a.n(i),c=a(93),s=a.n(c),l=a(91),u=a(104),m=a.n(u),p=a(107),d=a.n(p);function h(e){var t=e.classes,a=e.children,n=e.shade,i=e.noPadding;return r.a.createElement("div",{className:s()(t.root,!i&&t.rootPadding),style:{backgroundColor:d.a[n]}},r.a.createElement("div",{className:t.fullWidth},r.a.createElement(m.a,{container:!0,spacing:0,className:!i&&t.spacer},a)))}h.propTypes={classes:o.a.shape().isRequired,children:o.a.node.isRequired,shade:o.a.string,noPadding:o.a.bool},h.defaultProps={shade:"50",noPadding:!1},t.a=Object(l.withStyles)(function(e){return{root:{display:"flex",flexFlow:"column",alignItems:"center",minHeight:"100%",height:"100%",paddingRight:0},rootPadding:{padding:e.spacing.unit},fullWidth:{width:"100%",display:"flex",flexFlow:"column",maxWidth:1200,flex:1},spacer:{marginBottom:2*e.spacing.unit,marginTop:e.spacing.unit}}})(h)},108:function(e,t,a){var n;e.exports=(n=a(121))&&n.default||n},113:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"f",function(){return u}),a.d(t,"a",function(){return l}),a.d(t,"e",function(){return c}),a.d(t,"d",function(){return s}),a(57);var n=a(133),r=a.n(n),i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},o=function(e){return r.a.uniqBy(r.a.flatten(e.map(function(e){return e.frontmatter.coordinates.map(function(e){return e})})),function(e){return e.coordinates[0]+" "+e.coordinates[1]})},c=function(e,t){return r.a.groupBy(e,function(e){return e.frontmatter[t]})},s=function(e){return e.map(function(e){return e.node})},l=function(e){return e.reduce(function(e,t){var a=null!==t.frontmatter.itinerary?t.frontmatter.itinerary.length:0;return Object.assign({km:(e.km||0)+t.frontmatter.km||0,duration:(e.duration||0)+t.frontmatter.duration||0,stops:(e.stops||0)+a})},0)},u=function(e){return Object.assign({},Object.assign({padding:2*e.spacing.unit},e.typography.body1,{"& img":{maxWidth:"100%",display:"block",margin:"0 auto"},"& p":Object.assign({marginLeft:2*e.spacing.unit},e.typography.body1),"& h1":Object.assign({},e.typography.display1),"& h2":Object.assign({},e.typography.headline),"& h3":Object.assign({},e.typography.subheading),"& h4,h5,h6":Object.assign({},e.typography.caption),"& h1,h2,h3,h4,h5,h6":{fontFamily:"'Indie Flower', cursive"}}))}},116:function(e,t,a){"use strict";var n=a(32),r=a.n(n),i=a(1),o=a.n(i),c=a(0),s=a.n(c),l=a(91),u=a(149),m=a.n(u),p=a(119);t.a=function(e){var t=function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=null,a.muiPageContext=e.muiPageContext||Object(p.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#server-side-jss");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(l.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(m.a,null),o.a.createElement(e,this.props))},a}(o.a.Component);return t.propTypes={muiPageContext:s.a.object},t}},118:function(e,t,a){"use strict";var n=a(32),r=a.n(n),i=(a(57),a(1)),o=a.n(i),c=a(0),s=a.n(c),l=a(98),u=a(135),m=a.n(u),p=a(91),d=a(138),h=a.n(d),g=a(93),f=a.n(g),E=a(104),y=a.n(E),b=a(154),v=a.n(b),x=a(139),w=a.n(x),k=a(155),N=a.n(k),R=a(114),C=a.n(R),O=a(156),S=a.n(O),T=a(117),q=a.n(T),I=a(158),j=a.n(I),L=a(157),A=a.n(L),_=a(159),P=a.n(_),D=a(160),B=a.n(D),M=a(162),W=a.n(M),U=a(151),G=a.n(U),H=a(152),z=a.n(H),F=a(107),J=a.n(F),$=a(109),Q=a.n($),V=a(124),X=a.n(V),Y=a(153),K=a.n(Y),Z=a(161),ee=a.n(Z),te=a(115),ae=a(106),ne=a(122),re=Object(p.withStyles)(function(e){return{nested:{paddingLeft:4*e.spacing.unit}}})(function(e){return o.a.createElement(l.b,{query:"1726632599",render:function(t){return t.allMarkdownRemark.distinct.map(function(t){return o.a.createElement(l.a,{key:t,to:"/destination/"+t,style:{textDecoration:"none"}},o.a.createElement(C.a,{button:!0,className:e.nested},o.a.createElement(q.a,{inset:!0,primary:(a=t,a.charAt(0).toUpperCase()+a.slice(1))})));var a})},data:ne})}),ie=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={open:!1,expandDestinations:!1},a}r()(t,e);var a=t.prototype;return a.toggleDrawer=function(e){this.setState({open:e})},a.toggleList=function(e){var t,a=this.state[e];this.setState(((t={})[e]=!a,t))},a.render=function(){var e=this,t=this.props,a=t.classes,n=t.title,r=t.children,i=t.width,c=this.state,s=c.open,u=c.expandDestinations;return o.a.createElement("div",{className:a.wrapper},o.a.createElement(m.a,{titleTemplate:"OAsome - %s",defaultTitle:"OAsome Blog"},o.a.createElement("meta",{name:"description",content:"OAsome is a travel blog of couple. We detail out unique experiences and adventures around the world."}),o.a.createElement("html",{lang:"en"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),o.a.createElement("meta",{name:"HandheldFriendly",content:"True"})),o.a.createElement(G.a,{className:a.appBar},o.a.createElement(z.a,{className:a.appBarToolbar,disableGutters:!s},o.a.createElement(X.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return e.toggleDrawer(!0)},className:f()(a.menuButton,s&&a.hide)},o.a.createElement(K.a,null)),o.a.createElement(Q.a,{style:{padding:"0.5rem",flexGrow:1,fontWeight:400},variant:"headline",color:"inherit",noWrap:!0},n),Object(d.isWidthUp)("sm",i)&&o.a.createElement("div",null,o.a.createElement(X.a,{color:"inherit"},o.a.createElement(te.f,null)),o.a.createElement(X.a,{color:"inherit"},o.a.createElement(te.i,null)),o.a.createElement(X.a,{color:"inherit"},o.a.createElement(te.c,null)),o.a.createElement(X.a,{color:"inherit"},o.a.createElement(te.b,null))))),o.a.createElement(v.a,{anchor:"left",open:s,onOpen:function(){return e.toggleDrawer(!0)},onClose:function(){return e.toggleDrawer(!1)}},o.a.createElement("div",{className:a.toolbarIe11},o.a.createElement("div",{className:a.toolbar},o.a.createElement(Q.a,{variant:"title",color:"inherit"},"OAsome"))),o.a.createElement(N.a,null),o.a.createElement(w.a,{component:"nav"},o.a.createElement("div",null,o.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},o.a.createElement(C.a,{button:!0},o.a.createElement(S.a,null,o.a.createElement(A.a,null)),o.a.createElement(q.a,{primary:"Home"}))),o.a.createElement(l.a,{to:"/archive/",style:{textDecoration:"none"}},o.a.createElement(C.a,{button:!0},o.a.createElement(S.a,null,o.a.createElement(j.a,null)),o.a.createElement(q.a,{primary:"Archive"}))),o.a.createElement(l.a,{to:"/photos/",style:{textDecoration:"none"}},o.a.createElement(C.a,{button:!0},o.a.createElement(S.a,null,o.a.createElement(P.a,null)),o.a.createElement(q.a,{primary:"Photos"}))),o.a.createElement(C.a,{button:!0,onClick:function(){return e.toggleList("expandDestinations")}},o.a.createElement(S.a,null,o.a.createElement(B.a,null)),o.a.createElement(q.a,{primary:"Destinations"})),o.a.createElement(ee.a,{in:u,timeout:"auto",unmountOnExit:!0},o.a.createElement(w.a,{component:"div",disablePadding:!0},o.a.createElement(re,null))),o.a.createElement(l.a,{to:"/about/",style:{textDecoration:"none"}},o.a.createElement(C.a,{button:!0},o.a.createElement(S.a,null,o.a.createElement(W.a,null)),o.a.createElement(q.a,{primary:"About us"})))))),o.a.createElement("div",{className:a.appBarSpacer},r),o.a.createElement(ae.a,{shade:"900"},o.a.createElement(y.a,{item:!0,xs:12,className:a.footerIcons},o.a.createElement("ul",{className:a.list},o.a.createElement(te.f,{color:"disabled",className:a.icon}),o.a.createElement(te.i,{color:"disabled",className:a.icon}),o.a.createElement(te.d,{color:"disabled",className:a.icon}),o.a.createElement(te.b,{color:"disabled",className:a.icon}),o.a.createElement(te.c,{color:"disabled",className:a.icon}),o.a.createElement(te.h,{color:"disabled",className:a.icon}))),o.a.createElement(Q.a,{className:a.footerLink},"Both the texts and the photos are released under the ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",className:a.footerLink},"Creative Commons License"),". ",o.a.createElement("br",null),"Code of this blog is released under the ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.gnu.org/licenses/agpl-3.0.en.html",className:a.footerLink},"GNU Affero General Public License 3.0"),", and is available on ",o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/oorestisime/oasome",className:a.footerLink},"Github"))))},t}(o.a.Component);ie.propTypes={classes:s.a.shape().isRequired,children:s.a.node,title:s.a.string,width:s.a.string.isRequired},ie.defaultProps={children:null,title:"OAsome blog"},t.a=h()()(Object(p.withStyles)(function(e){return{toolbar:Object.assign({},e.mixins.toolbar,{paddingLeft:6*e.spacing.unit,display:"flex",flexGrow:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),toolbarIe11:{display:"flex"},wrapper:{height:"100%"},appBar:{flex:"none",flexWrap:"wrap",zIndex:100,flexDirection:"row"},appBarToolbar:{justifyContent:"space-between",display:"flex",flex:1},appBarSpacer:{paddingTop:6*e.spacing.unit},menuButton:{marginLeft:12,marginRight:20},footer:{paddingLeft:6*e.spacing.unit,paddingBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit,backgroundColor:"#444444"},list:{margin:0,paddingLeft:0,listStyle:"none",display:"inline"},icon:{marginRight:e.spacing.unit/2,color:"#999999","&:hover":{color:J.a[900]}},footerLink:{color:"#999999"},footerIcons:{paddingBottom:4*e.spacing.unit}}})(ie))},119:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return s}),a(75),a(58),a(143);var r=a(126),i=a(91),o=(a(145),a(146),Object(i.createMuiTheme)({typography:{fontWeightRegular:300,fontWeightMedium:400,fontFamily:"'Lato', 'Helvetica', 'Arial'",fontSize:18,display1:{fontWeight:400},title:{fontWeight:300}},MuiWithWidth:{initialWidth:"md"},palette:{primary:{main:"#EEEEEE"}}}));function c(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function s(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=c()),n.__INIT_MATERIAL_UI__):c()}}).call(this,a(134),a(112))},121:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(0),o=a.n(i),c=a(42),s=a(4),l=function(e){var t=e.location,a=s.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},122:function(e){e.exports={data:{allMarkdownRemark:{distinct:["Greece","Usa"],edges:[{node:{id:"e1771e8d-a5c9-52ef-b006-e9d17ddd66da",frontmatter:{date:"September 03, 2018",path:"/enjoying-7-nighs-sw-usa/",title:"Visiting the southwest, the land of canyons.",country:"Usa"}}},{node:{id:"fd1508d2-fe57-5715-9fc1-86c9db62aa7c",frontmatter:{date:"August 07, 2018",path:"/about",title:"About us",country:null}}},{node:{id:"0bd2e2e0-c745-54c5-b7f1-b4091fed6ca8",frontmatter:{date:"August 07, 2018",path:"/america",title:"Amerika we are coming to you it is so good",country:"Usa"}}},{node:{id:"dd409b7c-8bd5-5f84-aae5-6567d8660513",frontmatter:{date:"August 07, 2018",path:"/my-first-post",title:"My first blog post was the best of best of best",country:"Greece"}}},{node:{id:"ec4cd7a9-2a10-528c-b989-854d0561933a",frontmatter:{date:"August 06, 2018",path:"/america-2",title:"Amerika we are coming 2 coming to you youu",country:"Usa"}}},{node:{id:"599d04e8-59d9-5ded-833c-d8fe8ce9a029",frontmatter:{date:"August 06, 2018",path:"/america-3",title:"Amerika we are coming 3 coming to you youu",country:"Usa"}}},{node:{id:"30b93f4c-cf46-5050-acdf-69f558e755f9",frontmatter:{date:"August 05, 2018",path:"/paros-naxos",title:"Eperasame omorfa kai tuti ti fora hey hey hey",country:"Greece"}}}]}}}},128:function(e,t,a){"use strict";var n=a(1),r=a.n(n),i=a(0),o=a.n(i),c=a(109),s=a.n(c),l=a(91),u=a(104),m=a.n(u),p=a(132);function d(e){var t=e.classes,a=e.posts;if(a.length>0)return a.map(function(e){return r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,key:e.id,className:t.spacer},r.a.createElement(p.a,{title:e.frontmatter.title,date:e.frontmatter.date,cover:e.frontmatter.cover,tags:e.frontmatter.tags,country:e.frontmatter.country,timeToRead:e.timeToRead,content:r.a.createElement(s.a,{component:"p"},e.excerpt),path:e.frontmatter.path,expand:!0,type:"list"}))})}d.propTypes={classes:o.a.shape().isRequired,posts:o.a.arrayOf(o.a.shape()).isRequired},t.a=Object(l.withStyles)(function(e){return{media:{height:0,paddingTop:"56.25%"},chip:{margin:e.spacing.unit},title:{textDecoration:"none"},spacer:{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(d)},132:function(e,t,a){"use strict";var n=a(32),r=a.n(n),i=(a(57),a(1)),o=a.n(i),c=a(0),s=a.n(c),l=a(178),u=a.n(l),m=a(98),p=a(179),d=a.n(p),h=a(91),g=a(129),f=a.n(g),E=a(164),y=a.n(E),b=a(165),v=a.n(b),x=a(199),w=a.n(x),k=a(168),N=a.n(k),R=a(200),C=a.n(R),O=a(124),S=a.n(O),T=a(197),q=a.n(T),I=a(167),j=a.n(I),L=a(166),A=a.n(L),_=a(196),P=a.n(_),D=a(198),B=a.n(D),M=a(201),W=a.n(M),U=a(120),G=a(194),H=a.n(G),z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.createChip=function(e,t){return o.a.createElement(m.a,{key:t,to:"/tag/"+t+"/"},o.a.createElement(f.a,{className:e.chip,label:t,clickable:!0}))},t.prototype.render=function(){var e=this.props.classes;return o.a.createElement("div",{className:e.chipRow},this.props.tags.map(function(a){return t.createChip(e,a)}))},t}(i.Component);z.propTypes={classes:s.a.shape().isRequired,tags:s.a.arrayOf(s.a.string).isRequired};var F=Object(h.withStyles)(function(e){var t=H.a[50];return{chip:{margin:e.spacing.unit/3,cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(U.emphasize)(t,.08)},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(U.emphasize)(t,.12)}},stripLink:{textDecoration:"none"},chipRow:{display:"flex",flexWrap:"wrap"}}},{withTheme:!0})(z),J=a(142),$=a(107),Q=a.n($),V=a(195),X=a.n(V),Y=a(115),K=a(3407),Z=a(3408),ee=function(e,t){return""+e.siteMetadata.siteUrl+t},te=function(e){return o.a.createElement(m.b,{query:"4031252418",render:function(t){var a=e.classes,n=e.path,r=e.title;return o.a.createElement("div",null,o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.instagram.com/__arte__mis__/",style:{textDecoration:"none"}},o.a.createElement(X.a,null,o.a.createElement(Y.f,{className:a.iconHover,color:"disabled"}))),o.a.createElement(X.a,null,o.a.createElement(K.a,{url:ee(t.site,n),title:r},o.a.createElement(Y.i,{className:a.iconHover,color:"disabled"}))),o.a.createElement(X.a,null,o.a.createElement(Z.a,{url:ee(t.site,n),subject:r},o.a.createElement(Y.b,{className:a.iconHover,color:"disabled"}))),o.a.createElement(X.a,null,o.a.createElement(Y.c,{className:a.iconHover,color:"disabled"})))},data:J})};te.propTypes={classes:s.a.shape().isRequired,title:s.a.string.isRequired,path:s.a.string.isRequired};var ae=Object(h.withStyles)(function(){return{iconHover:{"&:hover":{color:Q.a[800]}}}})(te),ne=a(113),re=function(e){function t(t){var a;return a=e.call(this,t)||this,"photo"===t.type&&t.photos?a.state={shareOpen:!1,anchorEl:null,lightbox:!1,photos:t.photos.map(function(e){return Object.assign({srcSet:e.childImageSharp.fluid.srcSet})})}:a.state={shareOpen:!1,anchorEl:null,lightbox:!1},a}r()(t,e),t.createChip=function(e,t){return o.a.createElement(f.a,{className:e.chip,label:t})};var a=t.prototype;return a.handleClick=function(e){this.setState({anchorEl:e.currentTarget,shareOpen:!0})},a.handleClose=function(){this.setState({anchorEl:null,shareOpen:!1})},a.gotoPrevLightboxImage=function(){var e=this.state.photo;this.setState({photo:e-1})},a.gotoNextLightboxImage=function(){var e=this.state.photo;this.setState({photo:e+1})},a.openLightbox=function(e,t){t.preventDefault(),this.setState({lightbox:!0,photo:e})},a.closeLightbox=function(){this.setState({lightbox:!1})},a.render=function(){var e=this,t=this.props,a=t.classes,n=t.title,r=t.date,i=t.cover,c=t.tags,s=t.content,l=t.expand,p=t.path,h=t.photos,g=t.type,f=t.timeToRead,E=t.country,b=this.state,x=b.shareOpen,k=b.anchorEl;return o.a.createElement("div",null,o.a.createElement(y.a,{className:a.spacer},o.a.createElement(v.a,{title:n,classes:{title:a.header},titleTypographyProps:{variant:l?"subheading":"display1"},subheader:o.a.createElement("div",null,!l&&o.a.createElement(A.a,{className:a.headerIcon}),!l&&""+r,o.a.createElement(j.a,{className:a.headerIcon}),""+Object(ne.b)(E),o.a.createElement(P.a,{className:a.headerIcon}),f+" min read"),action:o.a.createElement("div",null,o.a.createElement(S.a,{"aria-label":"Share","aria-owns":x?"share-menu":null,"aria-haspopup":"true",onClick:function(t){return e.handleClick(t)}},o.a.createElement(q.a,{title:n,path:p})),o.a.createElement(B.a,{id:"share-menu",anchorEl:k,open:x,onClose:function(){return e.handleClose()}},o.a.createElement(ae,{title:n,path:p})))}),o.a.createElement(w.a,{title:n},o.a.createElement(u.a,{fluid:i.childImageSharp.fluid})),o.a.createElement(N.a,null,!l&&s,"photo"===g&&h&&o.a.createElement("div",null,h.map(function(t,n){return o.a.createElement("a",{key:t.childImageSharp.fluid.src,href:t.childImageSharp.fluid.src,onClick:function(t){return e.openLightbox(n,t)}},o.a.createElement(u.a,{className:a.spacer,fluid:t.childImageSharp.fluid}))}))),o.a.createElement(C.a,{className:a.actions,disableActionSpacing:!0},o.a.createElement(F,{tags:l?c.slice(0,3):c}),l&&o.a.createElement(S.a,{className:a.expand,onClick:function(){return Object(m.c)(p)},"aria-label":"Read"},o.a.createElement(W.a,null)))),"photo"===g&&h&&o.a.createElement(d.a,{backdropClosesModal:!0,images:this.state.photos,currentImage:this.state.photo,isOpen:this.state.lightbox,onClickPrev:function(){return e.gotoPrevLightboxImage()},onClickNext:function(){return e.gotoNextLightboxImage()},onClose:function(){return e.closeLightbox()}}))},t}(i.Component);re.propTypes={classes:s.a.shape().isRequired,title:s.a.string.isRequired,tags:s.a.arrayOf(s.a.string).isRequired,date:s.a.string.isRequired,path:s.a.string,content:s.a.node.isRequired,expand:s.a.bool.isRequired,type:s.a.string.isRequired,cover:s.a.shape(),photos:s.a.arrayOf(s.a.object),country:s.a.string.isRequired,timeToRead:s.a.oneOfType([s.a.string,s.a.number]).isRequired},re.defaultProps={photos:[],cover:{},path:null},t.a=Object(h.withStyles)(function(e){return{expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},header:Object.assign({},e.typography.subheading),actions:{display:"flex"},spacer:{margin:e.spacing.unit},headerIcon:{paddingLeft:e.spacing.unit,marginRight:e.spacing.unit,display:"inline-flex",alignSelf:"center",height:"1.25em",width:"1.25em",position:"relative",top:"0.3em"}}},{withTheme:!0})(re)},142:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://oasome.blog"}}}}},351:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(135),o=a.n(i),c=a(0),s=a.n(c),l=a(91),u=a(104),m=a.n(u),p=a(109),d=a.n(p),h=a(3355),g=a.n(h),f=(a(3372),a(57),a(32)),E=a.n(f),y=a(179),b=a.n(y),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={lightbox:!1,photo:void 0},a}E()(t,e);var a=t.prototype;return a.gotoPrevLightboxImage=function(){var e=this.state.photo;this.setState({photo:e-1})},a.gotoNextLightboxImage=function(){var e=this.state.photo;this.setState({photo:e+1})},a.openLightbox=function(e,t){t.preventDefault(),this.setState({lightbox:!0,photo:e})},a.closeLightbox=function(){this.setState({lightbox:!1})},a.render=function(){var e=this,t=this.props,a=t.perline,n=t.photos,i=JSON.parse(n).map(function(e){return Object.assign({src:e})});return r.a.createElement(m.a,{container:!0,spacing:24},i.map(function(t,n){return r.a.createElement(m.a,{item:!0,xs:12,sm:12/Number(a),key:t.src},r.a.createElement("a",{href:t.src,onClick:function(t){return e.openLightbox(n,t)}},r.a.createElement("img",{alt:t.src,src:t.src,style:{width:"100%",height:"auto"}})))}),i&&r.a.createElement(b.a,{backdropClosesModal:!0,images:i,currentImage:this.state.photo,isOpen:this.state.lightbox,onClickPrev:function(){return e.gotoPrevLightboxImage()},onClickNext:function(){return e.gotoNextLightboxImage()},onClose:function(){return e.closeLightbox()}}))},t}(n.Component);v.propTypes={photos:s.a.string.isRequired,perline:s.a.string.isRequired};var x=v,w=a(164),k=a.n(w),N=a(165),R=a.n(N),C=a(168),O=a.n(C),S=a(3376),T=a.n(S),q=a(3377),I=a.n(q),j=a(3375),L=a.n(j);function A(e){var t=e.title,a=e.children,n=e.classes;return r.a.createElement(k.a,{className:n.card},r.a.createElement(R.a,{classes:{root:n.header,content:n.header},avatar:r.a.createElement(T.a,{className:n.yellowAvatar},r.a.createElement(I.a,null)),title:t}),r.a.createElement(O.a,{className:n.content},r.a.createElement(d.a,{component:"p"},a)))}A.propTypes={children:s.a.node.isRequired,title:s.a.string.isRequired,classes:s.a.shape().isRequired};var _=Object(l.withStyles)(function(e){return{yellowAvatar:{color:"#fff",backgroundColor:L.a[700]},content:{paddingTop:0,paddingnBottom:0},header:{paddingnBottom:"0 !important"},card:{marginBottom:2*e.spacing.unit}}})(A),P=a(116),D=a(106),B=a(118),M=a(132),W=a(113),U=a(128),G=a(167),H=a.n(G),z=a(166),F=a.n(z),J=a(115);function $(e){var t=e.km,a=e.duration,n=e.itinerary,i=e.classes;return r.a.createElement(k.a,{className:i.card},r.a.createElement(R.a,{classes:{root:i.header,content:i.header},title:"Trip details"}),r.a.createElement(O.a,{className:i.content},r.a.createElement(d.a,{variant:"caption"},r.a.createElement(J.g,{style:{fontSize:20}})," Distance covered: "+t+"km"),r.a.createElement(d.a,{variant:"caption"},r.a.createElement(F.a,{style:{fontSize:20}})," Duration: "+a+" days"),r.a.createElement(d.a,{variant:"caption"},r.a.createElement(H.a,{style:{fontSize:20}})," Destinations: "+n.join(" -> "))))}$.propTypes={duration:s.a.number.isRequired,km:s.a.number.isRequired,itinerary:s.a.arrayOf(s.a.string).isRequired,classes:s.a.shape().isRequired};var Q=Object(l.withStyles)(function(e){return{content:{paddingTop:0,paddingnBottom:0},header:{paddingnBottom:"0 !important"},card:{margin:e.spacing.unit,marginBottom:6*e.spacing.unit}}})($);a.d(t,"pageQuery",function(){return Y});var V=new g.a({createElement:r.a.createElement,components:{"photo-composition":x,tip:_}}).Compiler;function X(e){var t=e.data,a=e.classes,n=e.pageContext,i=t.markdownRemark,c=t.site,s=n.similar,l=c.siteMetadata.siteUrl,u=i.frontmatter,p=i.htmlAst,h=i.excerpt,g=i.timeToRead,f=i.tableOfContents;return r.a.createElement(B.a,{title:"OAsome blog"},r.a.createElement(o.a,null,r.a.createElement("title",null,u.title),r.a.createElement("meta",{name:"description",content:h}),r.a.createElement("meta",{name:"keywords",content:u.tags}),r.a.createElement("meta",{property:"og:site_name",content:"OAsome secrets"}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:u.title}),r.a.createElement("meta",{property:"og:description",content:h}),r.a.createElement("meta",{property:"og:url",content:""+l+u.path}),r.a.createElement("meta",{property:"og:image",content:""+l+u.cover.childImageSharp.fluid.src}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:u.title}),r.a.createElement("meta",{name:"twitter:description",content:h}),r.a.createElement("meta",{name:"twitter:url",content:""+l+u.path}),r.a.createElement("meta",{name:"twitter:image",content:""+l+u.cover.childImageSharp.fluid.src})),r.a.createElement(D.a,null,r.a.createElement(m.a,{item:!0,xs:12,sm:9},r.a.createElement(M.a,{title:u.title,date:u.date,cover:u.cover,tags:u.tags,content:r.a.createElement("div",{className:a.text},V(p)),expand:!1,photos:u.photos||[],type:u.type,timeToRead:g,country:u.country})),r.a.createElement(m.a,{item:!0,sm:3},u.km&&r.a.createElement(Q,{km:u.km,itinerary:u.itinerary,duration:u.duration}),r.a.createElement("div",{className:a.toc},r.a.createElement(d.a,{variant:"headline",gutterBottom:!0},"Contents"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:f}})))),s.length>0&&r.a.createElement(D.a,{shade:"300"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"display1"},"Similar articles")),r.a.createElement(U.a,{posts:s.filter(function(e){return e.frontmatter.title!==u.title}).slice(0,8)})))}var Y="3321670108";X.propTypes={classes:s.a.shape().isRequired,data:s.a.shape().isRequired,pageContext:s.a.shape().isRequired},t.default=Object(P.a)(Object(l.withStyles)(function(e){var t;return{text:Object(W.f)(e),toc:(t={top:90,flexShrink:0,order:2,position:"sticky",wordBreak:"break-word",height:"calc(100vh - 70px)",overflowY:"auto",margin:e.spacing.unit,padding:4*e.spacing.unit,display:"none"},t[e.breakpoints.up("sm")]={display:"block"},t["& $ul"]={paddingLeft:3*e.spacing.unit,margin:0,listStyleType:"none"},t["& $li"]={fontSize:14,padding:e.spacing.unit/2+"px 0"},t["& $a"]={color:"rgba(0, 0, 0, 0.54)",textDecoration:"none","&:hover":{color:"black"}},t)}})(X))},98:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(1),r=a.n(n),i=a(0),o=a.n(i),c=a(96),s=a.n(c);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return c.push}),a(108);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}}]);
//# sourceMappingURL=component---src-templates-blog-template-jsx-cfa8625459057d7ec453.js.map
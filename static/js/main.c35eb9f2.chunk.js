(this.webpackJsonpghiblibrary=this.webpackJsonpghiblibrary||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var i=t(1),r=t.n(i),c=t(7),s=t.n(c),n=(t(14),t(3)),d=t(4),o=t.n(d),l=t(8),p=t(9),b=t.n(p),g=t(2),m=t.n(g),j=t(5),f=t.n(j),u=t.p+"static/media/arrietty.d35669f9.jpg",h=t.p+"static/media/castle.ababaf4f.jpg",k=t.p+"static/media/cat.e9d07063.jpg",C=t.p+"static/media/earthsea.fb8747d3.jpg",_=t.p+"static/media/grave.a36f8aff.jpg",y=t.p+"static/media/howl.6ad622e2.jpg",F=t.p+"static/media/kaguya.9da42fe0.jpg",O=t.p+"static/media/kiki.3826de17.jpg",x=t.p+"static/media/marnie.6889f44c.jpg",v=t.p+"static/media/neighbor.76ab03ad.png",w=t.p+"static/media/pompoko.f6b5afc6.jpg",I=t.p+"static/media/ponyo.feb4154a.jpeg",N=t.p+"static/media/poppy.9ec89013.jpg",L=t.p+"static/media/porco.f3db6a51.jpg",E=t.p+"static/media/princess.59129e24.jpg",B=t.p+"static/media/spirited.aa6a8eab.jpg",D=t.p+"static/media/whisper.6813a6d9.jpg",S=t.p+"static/media/wind.bb9b752d.jpg",P=t.p+"static/media/yamadas.353c9a52.jpg",A=t.p+"static/media/yesterday.1447eeb3.jpg",M=t(0),Y=[{backgroundImage:"linear-gradient(62deg, #21D4FD 0%, #B721FF 100%)"},{backgroundImage:"linear-gradient(62deg, #85FFBD 0%, #FFFB7D 100%)"},{backgroundImage:"linear-gradient(62deg, #FFE53B 0%, #FF2525 74%)"},{backgroundImage:"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"},{backgroundImage:"linear-gradient(62deg, #0093E9 0%, #80D0C7 100%)"},{backgroundImage:"linear-gradient(62deg, #8BC6EC 0%, #9599E2 100%)"},{backgroundImage:"linear-gradient(62deg, #a18cd1 0%, #fbc2eb 100%)"},{backgroundImage:"linear-gradient(62deg, #cfd9df 0%, #e2ebf0 100%)"},{backgroundImage:"linear-gradient(62deg, #f093fb 0%, #f5576c 100%)"},{backgroundImage:"linear-gradient(to top, #30cfd0 0%, #330867 100%)"}];function J(e){var a,t=e.name,r=e.randomNumber,c=e.director,s=e.releaseYear,d=e.description,o=Object(i.useState)(!1),l=Object(n.a)(o,2),p=l[0],b=l[1];switch(t.toLowerCase()){case"castle in the sky":a=h;break;case"arrietty":a=u;break;case"grave of the fireflies":a=_;break;case"my neighbor totoro":a=v;break;case"kiki's delivery service":a=O;break;case"only yesterday":a=A;break;case"porco rosso":a=L;break;case"pom poko":a=w;break;case"whisper of the heart":a=D;break;case"princess mononoke":a=E;break;case"my neighbors the yamadas":a=P;break;case"spirited away":a=B;break;case"the cat returns":a=k;break;case"howl's moving castle":a=y;break;case"tales from earthsea":a=C;break;case"ponyo":a=I;break;case"from up on poppy hill":a=N;break;case"the wind rises":a=S;break;case"the tale of the princess kaguya":a=F;break;case"when marnie was there":a=x;break;default:a=null}return Object(M.jsxs)("div",{className:m.a.filmCard,children:[Object(M.jsx)("div",{className:f()(m.a.imageFiller,p&&m.a.tabClicked),style:{backgroundImage:'url("'.concat(a,'")')}}),Object(M.jsxs)("div",{className:f()(m.a.text,p&&m.a.tabClicked),children:[Object(M.jsx)("h3",{children:t}),Object(M.jsxs)("p",{children:["Directed by ",c]}),Object(M.jsxs)("p",{children:["Released ",s]})]}),Object(M.jsx)("div",{className:f()(m.a.tab,p&&m.a.tabClicked),style:Y[r],onClick:function(){return b(!p)},children:Object(M.jsx)("p",{children:d})})]})}function R(e){var a=e.films;return Object(M.jsx)("div",{className:b.a.cardList,children:a.map((function(e,t){console.log("payton",e);var i=Math.floor(10*Math.random()+1)-1;return Object(M.jsx)(J,Object(l.a)({name:a[t].title,description:a[t].description,randomNumber:i,director:a[t].director,releaseYear:a[t].release_date},"description",a[t].description),a[t])}))})}var T=function(){var e=Object(i.useState)([]),a=Object(n.a)(e,2),t=a[0],r=a[1],c=Object(i.useState)(""),s=Object(n.a)(c,2),d=s[0],l=s[1];Object(i.useEffect)((function(){fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var p=t.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())}));return Object(M.jsxs)("div",{className:o.a.main,children:[Object(M.jsxs)("div",{className:o.a.topPortion,children:[Object(M.jsx)("h1",{children:"ghibli gallery"}),Object(M.jsx)("div",{children:Object(M.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},placeholder:"Search for a film...",value:d})})]}),Object(M.jsx)("div",{className:o.a.list,children:Object(M.jsx)(R,{films:p})})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,i=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),i(e),r(e),c(e),s(e)}))};s.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(T,{})}),document.getElementById("root")),W()},2:function(e,a,t){e.exports={filmCard:"FilmCard_filmCard__3jiio",imageFiller:"FilmCard_imageFiller__3lpls",tabClicked:"FilmCard_tabClicked__2WUdg",text:"FilmCard_text__3E6pC",fadeIn:"FilmCard_fadeIn__1WFGd",tab:"FilmCard_tab__38dvR"}},4:function(e,a,t){e.exports={main:"App_main__uN9ca",topPortion:"App_topPortion__2IHn-",list:"App_list__1SN5w"}},9:function(e,a,t){e.exports={cardList:"FilmCardList_cardList__2smYL"}}},[[16,1,2]]]);
//# sourceMappingURL=main.c35eb9f2.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[441],{441:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(439),a=r(626),c=r(689),s=r(87),i=r(184);function o(){var e=(0,c.UO)().movieId;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ul",{children:["Cast","Reviews"].map((function(t,r){return(0,i.jsx)("li",{children:(0,i.jsx)(s.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e,"/").concat(t.toLowerCase()),children:t})},r)}))}),(0,i.jsx)(c.j3,{})]})}var l=r(791);function h(){var e=(0,l.useState)(null),t=(0,n.Z)(e,2),r=t[0],h=t[1],d=(0,c.UO)().movieId,v=(0,l.useRef)((0,c.TH)().state);if((0,l.useEffect)((function(){try{(0,a.TP)(d).then((function(e){var t=e.title,r=e.overview,n=e.poster_path,a=e.vote_average,c=e.genres,s=e.release_date;h({title:t,overview:r,poster_path:n,vote_average:a,genres:c,release_date:s})}))}catch(e){}}),[d]),r){var u=r.title,p=r.overview,x=r.poster_path,j=r.vote_average,m=r.genres,f=r.release_date;return(0,i.jsxs)(i.Fragment,{children:[v.current&&(0,i.jsx)(s.rU,{to:v.current.location,state:v.current.search,children:"\u2190 Go back"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w500".concat(x):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:u}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"".concat(u," (").concat(f.slice(0,4),")")}),(0,i.jsx)("p",{children:"User score: ".concat((10*j).toFixed(2),"%")}),(0,i.jsx)("h3",{children:"Overview"}),(0,i.jsx)("p",{children:p}),(0,i.jsx)("h3",{children:"Genres"}),(0,i.jsx)("p",{children:m.map((function(e){var t=e.name;return"".concat(t," ")}))})]})]}),(0,i.jsx)("p",{children:"Additional information"}),(0,i.jsx)(o,{})]})}return null}}}]);
//# sourceMappingURL=441.0d956ca2.chunk.js.map
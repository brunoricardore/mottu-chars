import{a as h,b as x,c as y,d as M,e as k,f as D}from"./chunk-3N6YNCIL.js";import{$a as a,Ca as p,Gb as b,Hb as A,Oa as u,Qa as o,Ra as n,Sa as i,T as f,bb as v,ga as g,gb as C,ta as c}from"./chunk-TD2BBPWJ.js";var O=[{path:"home",loadComponent:()=>import("./chunk-CQMTBPQB.js").then(e=>e.HomeComponent)},{path:"fav",loadComponent:()=>import("./chunk-7TUIUQVT.js").then(e=>e.FavoritesComponent)},{path:"**",redirectTo:"home",pathMatch:"full"}];var P={providers:[C({eventCoalescing:!0}),k(O),b()]};var s=class e{value=g(0);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-badge"]],inputs:{value:[1,"value"]},decls:2,vars:1,consts:[[1,"app-badge"]],template:function(t,m){t&1&&(o(0,"span",0),a(1),n()),t&2&&(c(),v(" ",m.value(),`
`))},styles:[".app-badge[_ngcontent-%COMP%]{display:block;width:20px;height:20px;border-radius:50%;background-color:#fff;display:grid;align-content:center;font-weight:600;color:#000}"]})};var l=class e{favoriteService=f(A);get totalOfFavorites(){return this.favoriteService.currentLength}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-top-bar"]],decls:9,vars:1,consts:[[1,"topbar"],[1,"btn-group"],["routerLink","/home","routerLinkActive","btn-light text-dark",1,"btn","btn-outline-secondary"],[1,"fa-solid","fa-house"],["routerLink","/fav","routerLinkActive","btn-light text-dark",1,"btn","btn-outline-secondary","btn-fav"],[1,"fa-solid","fa-heart"],[3,"value"]],template:function(t,m){t&1&&(o(0,"div",0)(1,"div",1)(2,"a",2),i(3,"i",3),a(4," Inicio "),n(),o(5,"a",4),i(6,"i",5),a(7," Favoritos "),i(8,"app-badge",6),n()()()),t&2&&(c(8),u("value",m.totalOfFavorites))},dependencies:[s,D,y,M],styles:[".topbar[_ngcontent-%COMP%]{width:100%;height:64px;background-color:#0a0a0a;border-bottom:1px solid #3D3D3D;padding:0 24px;display:flex;align-items:center;justify-content:end}"]})};var d=class e{title="mottu-character";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=p({type:e,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"page-container"],[1,"page-box"]],template:function(t,m){t&1&&(i(0,"app-top-bar"),o(1,"div",0)(2,"div",1),i(3,"router-outlet"),n()())},dependencies:[x,l],styles:[".page-container[_ngcontent-%COMP%]{padding-top:48px;display:grid;justify-content:center;background-color:#1f1f1f;min-height:calc(100vh - 64px)}.page-container[_ngcontent-%COMP%]   .page-box[_ngcontent-%COMP%]{width:720px;padding-bottom:50px}.page-container[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{height:100%;background-color:#1f1f1f}"]})};h(d,P).catch(e=>console.error(e));

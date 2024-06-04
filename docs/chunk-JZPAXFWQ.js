import{A as v,B as f,C as D,D as w,E as M,F as N,G as ee,H as j,I as y,J as L,K as te,L as ie,P as ne,R as oe,S as re,T as J,U as I,V as O,X as ae,a as q,b as G,c as z,d as S,e as K,f as C,g as Q,h as T,i as W,j as h,k as B,l as X,m as Y,n as R,o as c,p as g,q as d,r as p,s as a,t as o,u as m,v as Z,w as b,x as u,y as F,z as s}from"./chunk-KN56I4XO.js";var ce={API_URL:"https:restcountries.com/v3.1/"};var V=ce.API_URL,$={capital:e=>`${V}/capital/${e}`,country:e=>`${V}/name/${e}`,region:e=>`${V}/region/${e}`,alpha:e=>`${V}/alpha/${e}`},x=(()=>{let t=class t{constructor(i){this.http=i,this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){let i=localStorage.getItem("cacheStore");i&&(this.cacheStore=JSON.parse(i))}getCountriesRequest(i){return this.http.get(i).pipe(z(()=>q([])))}searchByAlphaCode(i){return this.http.get($.alpha(i)).pipe(G(n=>n.length>0?n[0]:null),z(()=>q(null)))}searchCapital(i){return this.getCountriesRequest($.capital(i)).pipe(C(n=>this.cacheStore.byCapital={term:i,countries:n}),C(()=>this.saveToLocalStorage()))}searchCountry(i){return this.getCountriesRequest($.country(i)).pipe(C(n=>this.cacheStore.byCountries={term:i,countries:n}),C(()=>this.saveToLocalStorage()))}searchRegion(i){return this.getCountriesRequest($.region(i)).pipe(C(n=>this.cacheStore.byRegion={region:i,countries:n}),C(()=>this.saveToLocalStorage()))}};t.\u0275fac=function(n){return new(n||t)(W(ie))},t.\u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var he=e=>["/countries/by",e];function ge(e,t){e&1&&(a(0,"div",2),s(1,"No hay pa\xEDses que mostrar"),o())}function ye(e,t){if(e&1&&(a(0,"tr")(1,"td"),s(2),o(),a(3,"td"),m(4,"img",5),o(),a(5,"td"),s(6),o(),a(7,"td"),s(8),o(),a(9,"td"),s(10),w(11,"number"),o(),a(12,"td")(13,"a",6),s(14,"Info"),o()()()),e&2){let r=t.$implicit,i=t.index;c(2),v(i+1),c(2),p("src",r.flags.svg,R)("alt",r.name.common),c(2),v(r.name.common),c(2),v(r.capital),c(2),v(M(11,7,r.population)),c(3),p("routerLink",D(9,he,r.cca3))}}function ve(e,t){if(e&1&&(a(0,"table",3)(1,"thead")(2,"tr")(3,"th"),s(4,"#"),o(),a(5,"th"),s(6,"Bandera"),o(),a(7,"th"),s(8,"Nombre"),o(),a(9,"th"),s(10,"Capital"),o(),a(11,"th"),s(12,"Poblaci\xF3n"),o(),m(13,"th"),o()(),a(14,"tbody"),d(15,ye,15,11,"tr",4),o()()),e&2){let r=u();c(15),p("ngForOf",r.countries)}}var E=(()=>{let t=class t{constructor(){this.countries=[]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=h({type:t,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,l){if(n&1&&d(0,ge,2,0,"div",1)(1,ve,16,1,"ng-template",null,0,N),n&2){let P=F(2);p("ngIf",!l.countries.length)("ngIfElse",P)}},dependencies:[j,y,re,L],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let e=t;return e})();function Ce(e,t){e&1&&m(0,"shared-loader")}var pe=(()=>{let t=class t{constructor(i){this.countrySvc=i,this.isSearching=!1,this.countries=[],this.searchBoxInitialValue=""}ngOnInit(){this.countries=this.countrySvc.cacheStore.byCapital.countries,this.searchBoxInitialValue=this.countrySvc.cacheStore.byCapital.term}searchByCapital(i){this.isSearching||(this.isSearching=!0,this.countrySvc.searchCapital(i).pipe(S(()=>{this.isSearching=!1})).subscribe({next:n=>{this.countries=n},error:n=>{}}))}};t.\u0275fac=function(n){return new(n||t)(g(x))},t.\u0275cmp=h({type:t,selectors:[["app-by-capital-page"]],decls:11,vars:4,consts:[[1,"row"],[1,"col"],[3,"onDebounce","initialValue","placeholder"],[4,"ngIf"],[3,"countries"]],template:function(n,l){n&1&&(a(0,"h2"),s(1,"Por Capital"),o(),m(2,"hr"),a(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(U){return l.searchByCapital(U)}),o()()(),a(6,"div",0)(7,"div",1),m(8,"hr"),d(9,Ce,1,0,"shared-loader",3),m(10,"countries-table",4),o()()),n&2&&(c(5),p("initialValue",l.searchBoxInitialValue)("placeholder","Buscar por capital"),c(4),p("ngIf",l.isSearching),c(),p("countries",l.countries))},dependencies:[y,I,O,E]});let e=t;return e})();function _e(e,t){e&1&&m(0,"shared-loader")}var le=(()=>{let t=class t{constructor(i){this.countrySvc=i,this.isSearching=!1,this.countries=[],this.searchBoxInitialValue=""}ngOnInit(){this.countries=this.countrySvc.cacheStore.byCountries.countries,this.searchBoxInitialValue=this.countrySvc.cacheStore.byCountries.term}searchByCountry(i){this.isSearching||(this.isSearching=!0,this.countrySvc.searchCountry(i).pipe(S(()=>{this.isSearching=!1})).subscribe({next:n=>{this.countries=n},error:n=>{}}))}};t.\u0275fac=function(n){return new(n||t)(g(x))},t.\u0275cmp=h({type:t,selectors:[["app-by-country-page"]],decls:11,vars:4,consts:[[1,"row"],[1,"col"],[3,"onDebounce","initialValue","placeholder"],[4,"ngIf"],[3,"countries"]],template:function(n,l){n&1&&(a(0,"h2"),s(1,"Por Pa\xEDs"),o(),m(2,"hr"),a(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(U){return l.searchByCountry(U)}),o()()(),a(6,"div",0)(7,"div",1),m(8,"hr"),d(9,_e,1,0,"shared-loader",3),m(10,"countries-table",4),o()()),n&2&&(c(5),p("initialValue",l.searchBoxInitialValue)("placeholder","Buscar por pa\xEDs"),c(4),p("ngIf",l.isSearching),c(),p("countries",l.countries))},dependencies:[y,I,O,E]});let e=t;return e})();var Se=e=>({"btn-outline-primary":e});function be(e,t){if(e&1){let r=Z();a(0,"button",6),b("click",function(){let n=X(r).$implicit,l=u();return Y(l.searchByRegion(n))}),s(1),o()}if(e&2){let r=t.$implicit,i=u();p("ngClass",D(2,Se,i.selectedRegion===r)),c(),v(r)}}function Ie(e,t){e&1&&m(0,"shared-loader")}var me=(()=>{let t=class t{constructor(i){this.countrySvc=i,this.isSearching=!1,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countrySvc.cacheStore.byRegion.countries,this.selectedRegion=this.countrySvc.cacheStore.byRegion.region}searchByRegion(i){this.isSearching||(this.selectedRegion=i,this.isSearching=!0,this.countrySvc.searchRegion(i).pipe(S(()=>{this.isSearching=!1})).subscribe({next:n=>{this.countries=n},error:n=>{}}))}};t.\u0275fac=function(n){return new(n||t)(g(x))},t.\u0275cmp=h({type:t,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(n,l){n&1&&(a(0,"h2"),s(1,"Por Regi\xF3n"),o(),m(2,"hr"),a(3,"div",0)(4,"div",1),d(5,be,2,4,"button",2),o()(),a(6,"div",0)(7,"div",3),m(8,"hr"),d(9,Ie,1,0,"shared-loader",4),m(10,"countries-table",5),o()()),n&2&&(c(5),p("ngForOf",l.regions),c(4),p("ngIf",l.isSearching),c(),p("countries",l.countries))},dependencies:[ee,j,y,I,E]});let e=t;return e})();function Ee(e,t){e&1&&(a(0,"div",2),s(1," Espere por favor "),o())}function Pe(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.ara.common," ")}}function Te(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.fr.common," ")}}function Be(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.jpn.common," ")}}function Re(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.br.common," ")}}function Fe(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.spa.common," ")}}function De(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.rus.common," ")}}function we(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.kor.common," ")}}function Me(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.ita.common," ")}}function Ne(e,t){if(e&1&&(a(0,"span",13),s(1),o()),e&2){let r=u(2);c(),f(" ",r.country.translations.est.common," ")}}function je(e,t){if(e&1&&(a(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),s(4,"Pa\xEDs: "),a(5,"strong"),s(6),o()()()(),a(7,"div",3)(8,"div",5)(9,"h3"),s(10,"Bandera"),o(),m(11,"img",6),o(),a(12,"div",7)(13,"h3"),s(14,"Informaci\xF3n"),o(),a(15,"ul",8)(16,"li",9)(17,"strong"),s(18,"Problaci\xF3n:"),o(),s(19),w(20,"number"),o(),a(21,"li",9)(22,"strong"),s(23,"C\xF3digo:"),o(),s(24),o()()()(),a(25,"div",10)(26,"div",7)(27,"h3"),s(28,"Traducciones"),o(),a(29,"div",11),d(30,Pe,2,1,"span",12)(31,Te,2,1,"span",12)(32,Be,2,1,"span",12)(33,Re,2,1,"span",12)(34,Fe,2,1,"span",12)(35,De,2,1,"span",12)(36,we,2,1,"span",12)(37,Me,2,1,"span",12)(38,Ne,2,1,"span",12),o()()()()),e&2){let r=u();c(6),v(r.country.name.common),c(5),p("src",r.country.flags.svg,R)("alt",r.country.name.common),c(8),f("",M(20,14,r.country.population)," "),c(5),f(" ",r.country.cca3," "),c(6),p("ngIf",r.country.translations.ara),c(),p("ngIf",r.country.translations.fr),c(),p("ngIf",r.country.translations.jpn),c(),p("ngIf",r.country.translations.br),c(),p("ngIf",r.country.translations.spa),c(),p("ngIf",r.country.translations.rus),c(),p("ngIf",r.country.translations.kor),c(),p("ngIf",r.country.translations.ita),c(),p("ngIf",r.country.translations.est)}}var ue=(()=>{let t=class t{constructor(i,n,l){this.activatedRoute=i,this.router=n,this.countriesSvc=l}ngOnInit(){this.activatedRoute.params.pipe(K(({id:i})=>this.countriesSvc.searchByAlphaCode(i))).subscribe({next:i=>{if(!i)return this.router.navigateByUrl("");this.country=i}})}};t.\u0275fac=function(n){return new(n||t)(g(ne),g(oe),g(x))},t.\u0275cmp=h({type:t,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],["class","badge bg-primary m-1",4,"ngIf"],[1,"badge","bg-primary","m-1"]],template:function(n,l){if(n&1&&d(0,Ee,2,0,"ng-template",null,0,N)(2,je,39,16,"div",1),n&2){let P=F(1);c(2),p("ngIf",l.country)("ngIfElse",P)}},dependencies:[y,L]});let e=t;return e})();var Le=[{path:"by-capital",component:pe},{path:"by-country",component:le},{path:"by-region",component:me},{path:"by/:id",component:ue},{path:"**",redirectTo:"by-capital"}],de=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=B({type:t}),t.\u0275inj=T({imports:[J.forChild(Le),J]});let e=t;return e})();var ft=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=B({type:t}),t.\u0275inj=T({imports:[te,de,ae]});let e=t;return e})();export{ft as CountriesModule};
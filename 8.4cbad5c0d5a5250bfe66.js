(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CU7q:function(l,n,t){"use strict";t.r(n);var o=t("CcnG"),u=function(){return function(){}}(),e=t("9AJC"),r=t("pMnS"),a=t("iAfa"),i=t("RygT"),s=t("gIcY"),d=t("ue5t"),m=t("fKKE"),c=t("Ip0R"),p=t("BUTu"),g=t("t/Na"),f=t("AytR").a.api+"/registros",h={headers:new g.h({"Content-Type":"application/json"})},v=function(){function l(l){this.http=l}return l.prototype.registrar=function(l){return this.http.post(f,{matricula:l.matricula,tipoRegistro:l.tipoRegistro},h)},l.ngInjectableDef=o.defineInjectable({factory:function(){return new l(o.inject(g.c))},token:l,providedIn:"root"}),l}(),C=function(l){return l[l.entrada=1]="entrada",l[l.saida=2]="saida",l}({}),b=t("5vhM"),R=function(){return function(l,n){this.tipoRegistro=l,this.matricula=n}}(),_=t("2WpN"),F=function(){function l(l,n,t,o){this.fb=l,this.route=n,this.registrosService=t,this.alunosService=o,this.formValidation=new b.a,this.title="Entrada"}return l.prototype.ngOnInit=function(){this.tipoRegistro=this.route.snapshot.params.tipoRegistro,this.startForm(),this.loadUrlFoto()},l.prototype.startForm=function(){this.submitForm=this.fb.group({matricula:[""]})},l.prototype.ngDoCheck=function(){this.tipoRegistro!==this.route.snapshot.params.tipoRegistro&&(this.tipoRegistro=this.route.snapshot.params.tipoRegistro,this.startForm(),this.clean()),this.title=this.route.snapshot.params.tipoRegistro===C[C.saida]?"Sa\xedda":"Entrada"},l.prototype.registrar=function(){var l=this;if(this.alunoImage=null,this.registro=null,this.loading=!0,!this.submitForm.value.matricula)return this.formValidation.invalidate("Informe a matr\xedcula para registro"),void(this.loading=!1);var n=new R(C[this.route.snapshot.params.tipoRegistro],this.submitForm.value.matricula);this.registrosService.registrar(n).pipe(Object(_.a)(function(){l.loading=!1,l.loadUrlFoto()})).subscribe(function(n){l.formValidation.validate(n.messageRetorno),l.registro=n,l.startForm()},function(n){l.formValidation.invalidate(n.error.message)})},l.prototype.clean=function(){this.formValidation.reset(),this.loading=!1,this.alunoImage=null},l.prototype.loadUrlFoto=function(){var l=this;this.registro&&this.registro.urlFoto&&this.alunosService.getBase64ImageFromURL(this.registro.urlFoto).subscribe(function(n){return l.alunoImage=n})},l}(),y=t("ZYCi"),I=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function x(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"div",[["class","form-group text-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,0,"img",[["class","img-fluid img-thumbnail"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,1,0,n.component.alunoImage)})}function k(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,2,"div",[["class","d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),o["\u0275ted"](2,null,["Registro de ",""])),(l()(),o["\u0275eld"](3,0,null,null,1,"ngx-loading",[],null,null,null,a.b,a.a)),o["\u0275did"](4,114688,null,0,i.a,[i.c,o.ChangeDetectorRef],{show:[0,"show"]},null),(l()(),o["\u0275eld"](5,0,null,null,30,"form",[["class","mb-5"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var u=!0;return"submit"===n&&(u=!1!==o["\u0275nov"](l,7).onSubmit(t)&&u),"reset"===n&&(u=!1!==o["\u0275nov"](l,7).onReset()&&u),u},null,null)),o["\u0275did"](6,16384,null,0,s["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](7,540672,null,0,s.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,s.ControlContainer,null,[s.FormGroupDirective]),o["\u0275did"](9,16384,null,0,s.NgControlStatusGroup,[[4,s.ControlContainer]],null,null),(l()(),o["\u0275eld"](10,0,null,null,25,"div",[["class","col-lg"]],null,null,null,null,null)),(l()(),o["\u0275eld"](11,0,null,null,13,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),o["\u0275eld"](12,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),o["\u0275eld"](13,0,null,null,1,"label",[["for","matricula"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Matr\xedcula"])),(l()(),o["\u0275eld"](15,0,null,null,7,"input",[["class","form-control"],["formControlName","matricula"],["id","matricula"],["maxlength","20"],["type","text"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0;return"input"===n&&(u=!1!==o["\u0275nov"](l,16)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==o["\u0275nov"](l,16).onTouched()&&u),"compositionstart"===n&&(u=!1!==o["\u0275nov"](l,16)._compositionStart()&&u),"compositionend"===n&&(u=!1!==o["\u0275nov"](l,16)._compositionEnd(t.target.value)&&u),u},null,null)),o["\u0275did"](16,16384,null,0,s.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275did"](17,540672,null,0,s.MaxLengthValidator,[],{maxlength:[0,"maxlength"]},null),o["\u0275prd"](1024,null,s.NG_VALIDATORS,function(l){return[l]},[s.MaxLengthValidator]),o["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),o["\u0275did"](20,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[6,s.NG_VALIDATORS],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),o["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),o["\u0275did"](22,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),o["\u0275eld"](23,0,null,null,1,"small",[["class","form-text text-muted"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["Campo obrigat\xf3rio"])),(l()(),o["\u0275eld"](25,0,null,null,1,"app-message-form",[],null,null,null,d.b,d.a)),o["\u0275did"](26,49152,null,0,m.a,[],{formValidation:[0,"formValidation"]},null),(l()(),o["\u0275and"](16777216,null,null,1,null,x)),o["\u0275did"](28,16384,null,0,c.l,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),o["\u0275eld"](29,0,null,null,6,"div",[["class","d-flex flex-row-reverse justify-content-center m-3"]],null,null,null,null,null)),(l()(),o["\u0275eld"](30,0,null,null,2,"button",[["class","btn-clean ml-2"],["type","reset"]],null,[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.clean()&&o),o},null,null)),(l()(),o["\u0275eld"](31,0,null,null,0,"i",[["class","fas fa-eraser"]],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Limpar"])),(l()(),o["\u0275eld"](33,0,null,null,2,"button",[["class","btn btn-primary ml-2"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.registrar()&&o),o},null,null)),(l()(),o["\u0275eld"](34,0,null,null,0,"i",[["class","fas fa-check"]],null,null,null,null,null)),(l()(),o["\u0275ted"](35,null,[" Registrar ",""]))],function(l,n){var t=n.component;l(n,4,0,t.loading),l(n,7,0,t.submitForm),l(n,17,0,"20"),l(n,20,0,"matricula"),l(n,26,0,t.formValidation),l(n,28,0,null!=t.alunoImage)},function(l,n){var t=n.component;l(n,2,0,t.title),l(n,5,0,o["\u0275nov"](n,9).ngClassUntouched,o["\u0275nov"](n,9).ngClassTouched,o["\u0275nov"](n,9).ngClassPristine,o["\u0275nov"](n,9).ngClassDirty,o["\u0275nov"](n,9).ngClassValid,o["\u0275nov"](n,9).ngClassInvalid,o["\u0275nov"](n,9).ngClassPending),l(n,15,0,o["\u0275nov"](n,17).maxlength?o["\u0275nov"](n,17).maxlength:null,o["\u0275nov"](n,22).ngClassUntouched,o["\u0275nov"](n,22).ngClassTouched,o["\u0275nov"](n,22).ngClassPristine,o["\u0275nov"](n,22).ngClassDirty,o["\u0275nov"](n,22).ngClassValid,o["\u0275nov"](n,22).ngClassInvalid,o["\u0275nov"](n,22).ngClassPending),l(n,33,0,t.loading),l(n,35,0,t.title)})}function V(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-registro",[],null,null,null,k,I)),o["\u0275did"](1,376832,null,0,F,[s.FormBuilder,y.a,v,p.a],null,null)],function(l,n){l(n,1,0)},null)}var w=o["\u0275ccf"]("app-registro",F,V,{},{},[]),N=t("4GxJ"),S=t("u0tD"),M=t("OaAl"),T=t("n6sq"),j=t("YFgC"),A=t("UVXo"),D=t("PCNd"),O=function(){return function(){}}();t.d(n,"RegistrosModuleNgFactory",function(){return E});var E=o["\u0275cmf"](u,[],function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[e.b,e.a,e.l,e.i,e.j,r.a,w]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,c.n,c.m,[o.LOCALE_ID,[2,c.D]]),o["\u0275mpd"](4608,s["\u0275angular_packages_forms_forms_j"],s["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,s.FormBuilder,s.FormBuilder,[]),o["\u0275mpd"](4608,g.k,g.q,[c.d,o.PLATFORM_ID,g.o]),o["\u0275mpd"](4608,g.r,g.r,[g.k,g.p]),o["\u0275mpd"](5120,g.a,function(l){return[l]},[g.r]),o["\u0275mpd"](4608,g.n,g.n,[]),o["\u0275mpd"](6144,g.l,null,[g.n]),o["\u0275mpd"](4608,g.j,g.j,[g.l]),o["\u0275mpd"](6144,g.b,null,[g.j]),o["\u0275mpd"](4608,g.g,g.m,[g.b,o.Injector]),o["\u0275mpd"](4608,g.c,g.c,[g.g]),o["\u0275mpd"](4608,N.w,N.w,[o.ComponentFactoryResolver,o.Injector,N.Y,N.x]),o["\u0275mpd"](4608,S.a,S.a,[]),o["\u0275mpd"](4608,M.a,M.a,[]),o["\u0275mpd"](4608,T.a,T.a,[]),o["\u0275mpd"](4608,N.r,j.a,[]),o["\u0275mpd"](4608,N.o,T.a,[]),o["\u0275mpd"](4608,v,v,[g.c]),o["\u0275mpd"](1073742336,c.c,c.c,[]),o["\u0275mpd"](1073742336,s["\u0275angular_packages_forms_forms_bc"],s["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,s.FormsModule,s.FormsModule,[]),o["\u0275mpd"](1073742336,s.ReactiveFormsModule,s.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,g.e,g.e,[]),o["\u0275mpd"](1073742336,g.d,g.d,[]),o["\u0275mpd"](1073742336,N.s,N.s,[]),o["\u0275mpd"](1073742336,N.g,N.g,[]),o["\u0275mpd"](1073742336,N.C,N.C,[]),o["\u0275mpd"](1073742336,N.y,N.y,[]),o["\u0275mpd"](1073742336,A.TextMaskModule,A.TextMaskModule,[]),o["\u0275mpd"](1073742336,N.T,N.T,[]),o["\u0275mpd"](1073742336,i.b,i.b,[]),o["\u0275mpd"](1073742336,D.a,D.a,[]),o["\u0275mpd"](1073742336,y.m,y.m,[[2,y.s],[2,y.k]]),o["\u0275mpd"](1073742336,O,O,[]),o["\u0275mpd"](1073742336,u,u,[]),o["\u0275mpd"](256,g.o,"XSRF-TOKEN",[]),o["\u0275mpd"](256,g.p,"X-XSRF-TOKEN",[]),o["\u0275mpd"](256,"loadingConfig",{backdropBorderRadius:"3px"},[]),o["\u0275mpd"](1024,y.i,function(){return[[{path:":tipoRegistro",component:F}]]},[])])})}}]);
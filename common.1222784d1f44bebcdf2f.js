(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BUTu:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var a=n("t/Na"),o=n("u0tD"),r=n("6blF"),i=n("AytR"),p=n("CcnG"),c=i.a.api+"/alunos",s=function(){function t(t,e){this.http=t,this.paginationService=e}return t.prototype.search=function(t,e){var n=new a.i;return e&&(n=this.paginationService.getHttpParamsToSearch(e)),t&&(n=this.setHttpParamsToSearch(t,n)),this.http.get(c,{params:n})},t.prototype.setHttpParamsToSearch=function(t,e){return t.nome&&(e=e.set("nome",t.nome)),t.anoLetivo&&(e=e.set("anoLetivo",String(t.anoLetivo))),t.matricula&&(e=e.set("matricula",t.matricula)),e},t.prototype.save=function(t,e){t.cpf&&""!==t.cpf.trim()||(t.cpf=null);var n=new FormData;return n.append("aluno",new Blob([JSON.stringify(t)],{type:"application/json"})),n.append("file",e),null!=e&&(t.urlFoto=e.name),t.id?this.http.put(c,n):this.http.post(c,n)},t.prototype.getAluno=function(t){return this.http.get(c+"/"+t)},t.prototype.delete=function(t){return this.http.delete(c+"/"+t)},t.prototype.getBase64ImageFromURL=function(t){var e=this,n=t+"?"+(new Date).getTime();return r.a.create(function(t){var a=new Image;a.crossOrigin="Anonymous",a.src=n,a.complete?(t.next(e.getBase64Image(a)),t.complete()):(a.onload=function(){t.next(e.getBase64Image(a)),t.complete()},a.onerror=function(e){t.error(e)})})},t.prototype.getBase64Image=function(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0),"data:image/jpg;base64,"+e.toDataURL("image/jpg").replace(/^data:image\/(jpg|png);base64,/,"")},t.ngInjectableDef=p.defineInjectable({factory:function(){return new t(p.inject(a.c),p.inject(o.a))},token:t,providedIn:"root"}),t}()}}]);
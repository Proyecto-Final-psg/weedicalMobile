"use strict";(self.webpackChunkroutes=self.webpackChunkroutes||[]).push([[315],{4495:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var t=r(2600),l=r(2791),i=r(9540),o=r(1290),u=(r(77),r(4947),{height:"500px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),a=function(e){var n=function(e,n){var r=e.value,i=void 0===r?[]:r,u=e.apiRef,a=e.customTabs,c=e.tabsCss,f=e.locale,s=e.localeTranslations,d=e.localePluralize,C=e.onTabChange,L=e.onChange,v=e.onProgress,p=(0,l.useRef)(null),A=(0,l.useRef)(null),b=(0,o.u)(C),m=(0,o.u)(L),E=(0,o.u)(v);return(0,o.a)(a,n),(0,o.b)((function(){return f&&(window.UPLOADCARE_LOCALE=f),d&&(window.UPLOADCARE_LOCALE_PLURALIZE=d),s&&(window.UPLOADCARE_LOCALE_TRANSLATIONS=s),function(){f&&delete window.UPLOADCARE_LOCALE,d&&delete window.UPLOADCARE_LOCALE_PLURALIZE,s&&delete window.UPLOADCARE_LOCALE_TRANSLATIONS}}),[f,d,s]),(0,l.useEffect)((function(){n&&c&&"string"===typeof c&&(0===c.indexOf("https://")?n.tabsCss.addUrl(c):n.tabsCss.addStyle(c))}),[n,c]),(0,l.useEffect)((function(){var r=Array.isArray(i)?i:[i];A.current&&A.current.reject(),A.current=n.openPanel(p.current,r,(0,t.c)((0,t.c)({multipleMax:e.multiple?void 0:1},e),{},{multiple:!0}))}),[n,e]),(0,l.useEffect)((function(){var e=A.current;e.progress(b);var n=function(){var e=A.current.fileColl.__items.map((function(e){return e.promise()}));m(e)},r=function(){var e=A.current.fileColl.lastProgresses();E(e)};return e.fileColl.anyProgressList.add(r),e.fileColl.anyDoneList.add(n),e.fileColl.anyFailList.add(n),e.fileColl.onRemove.add(n),e.fileColl.onReplace.add(n),e.fileColl.onSort.add(n),function(){var e=A.current;e.fileColl.anyProgressList.remove(r),e.fileColl.anyDoneList.remove(n),e.fileColl.anyFailList.remove(n),e.fileColl.onRemove.remove(n),e.fileColl.onReplace.remove(n),e.fileColl.onSort.remove(n)}}),[b,m,E]),(0,l.useImperativeHandle)(u,(function(){return{onTabVisibility:function(e){return A.current.onTabVisibility(e)},hideTab:function(e){return A.current.hideTab(e)},showTab:function(e){return A.current.showTab(e)},switchTab:function(e){return A.current.switchTab(e)},addFiles:function(e){return A.current.addFiles(e)},isTabVisible:function(e){return A.current.isTabVisible(e)},getFileColl:function(){return A.current.fileColl},getRawDialogApi:function(){return A.current}}}),[]),(0,l.useEffect)((function(){return function(){return A.current&&A.current.reject()}}),[]),(0,l.useEffect)((function(){var r=!1;A.current.fileColl.clear();var l,o=(0,t.e)(i);try{for(o.s();!(l=o.n()).done;){var u=l.value;if("string"===typeof u&&u.includes("~")){n.loadFileGroup(u,e).then((function(e){if(!r){var n=e.files();A.current.addFiles(n)}}));break}A.current.fileColl.add(n.fileFrom("uploaded",u,e))}}catch(a){o.e(a)}finally{o.f()}return function(){r=!0}}),[i]),[p]}(e,i),r=(0,t.b)(n,1)[0];return l.createElement("div",{id:e.id,style:u},l.createElement("style",null,"\n  .uploadcare--preview__done, .uploadcare--panel__done {\n    display: none;\n  }\n"),l.createElement("div",{ref:r}))}}}]);
//# sourceMappingURL=ucare-panel-chunk.fe86bc14.chunk.js.map
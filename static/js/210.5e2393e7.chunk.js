(this.webpackJsonpview=this.webpackJsonpview||[]).push([[210],{1142:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),i=n(15),o=n(14),l=n(0),c=n.n(l),u=n(64),s=n(63),f=n(65),d=n(354),m=n(1143),h=n.n(m),w=n(1144),p=n.n(w),v=n(26),b=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isBasic:!1,isSuccess:!1,isWarning:!1,isError:!1,isInfo:!1,isConfirm:!1,isConfirmSuccess:!1,isConfirmCancel:!1},e.sweetAlertHandler=function(e){p()(h.a).fire({title:e.title,text:e.text,type:e.type})},e.sweetConfirmHandler=function(){var e=p()(h.a);e.fire({title:"Are you sure?",text:"Once deleted, you will not be able to recover this imaginary file!",type:"warning",showCloseButton:!0,showCancelButton:!0}).then((function(t){return t.value?e.fire("","Poof! Your imaginary file has been deleted!","success"):e.fire("","Your imaginary file is safe!","error")}))},e.sweetPromptHandler=function(){var e=p()(h.a);e.fire({text:"Write something here:",input:"text"}).then((function(t){return t.value?e.fire("","You Typed: ".concat(t.value)):e.fire("Invalid!","No message write","error")}))},e.sweetAjaxHandler=function(){var e=p()(h.a);e.fire({text:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(t){return t?fetch("//api.github.com/users/".concat(t)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){h.a.showValidationMessage("Request failed: ".concat(e))})):e.fire("Invalid!","No name enter","error")},allowOutsideClick:function(){return!h.a.isLoading()}}).then((function(t){if(t.value&&void 0!==t.value.login)return e.fire({title:"".concat(t.value.login,"'s avatar"),imageUrl:t.value.avatar_url})}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(v.a,null,c.a.createElement(u.a,null,c.a.createElement(s.a,null,c.a.createElement(f.a,null,c.a.createElement(f.a.Header,null,c.a.createElement(f.a.Title,null,"Alerts")),c.a.createElement(f.a.Body,{className:"btn-page"},c.a.createElement(d.a,{onClick:function(){return e.sweetAlertHandler({title:"",type:"",text:"Hello World!"})}},"Basic"),c.a.createElement(d.a,{variant:"success",onClick:function(){return e.sweetAlertHandler({title:"Good job!",type:"success",text:"You clicked the button!"})}},"Success"),c.a.createElement(d.a,{variant:"danger",onClick:function(){return e.sweetAlertHandler({title:"Good job!",type:"error",text:"You clicked the button!"})}},"Error"),c.a.createElement(d.a,{variant:"warning",onClick:function(){return e.sweetAlertHandler({title:"Good job!",type:"warning",text:"You clicked the button!"})}},"Warning"),c.a.createElement(d.a,{variant:"info",onClick:function(){return e.sweetAlertHandler({title:"Good job!",type:"info",text:"You clicked the button!"})}},"Info"),c.a.createElement(d.a,{onClick:this.sweetConfirmHandler},"Confirm"),c.a.createElement(d.a,{onClick:this.sweetPromptHandler},"Prompt"),c.a.createElement(d.a,{onClick:this.sweetAjaxHandler},"Ajax"))))))}}]),n}(c.a.Component);t.default=b}}]);
//# sourceMappingURL=210.5e2393e7.chunk.js.map
(this.webpackJsonpview=this.webpackJsonpview||[]).push([[190],{1231:function(e,a,t){"use strict";t.r(a);var l=t(12),n=t(13),r=t(15),m=t(14),c=t(0),o=t.n(c),s=t(64),i=t(63),d=t(65),u=t(198),E=t(321),p=t(458),b=t(111),h=t(954),C=t(517),f=t(26),y=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={validated:!1,validatedTooltip:!1,supportedCheckbox:!1,supportedRadio:!1,supportedSelect:0,supportedFile:0},e.supportedSelectHandler=function(a){e.setState({supportedSelect:parseInt(a.target.value)})},e.supportedFileHandler=function(a){e.setState({supportedFile:!!a.target.value})},e}return Object(n.a)(t,[{key:"handleSubmit",value:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validated:!0})}},{key:"handleSubmitTooltip",value:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),this.setState({validatedTooltip:!0})}},{key:"render",value:function(){var e=this,a=this.state,t=a.validated,l=a.validatedTooltip;return o.a.createElement(f.a,null,o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(d.a,null,o.a.createElement(d.a.Header,null,o.a.createElement(d.a.Title,{as:"h5"},"Basic Component")),o.a.createElement(d.a.Body,null,o.a.createElement("h5",null,"Form controls"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:6},o.a.createElement(u.a,null,o.a.createElement(u.a.Group,{controlId:"formBasicEmail"},o.a.createElement(u.a.Label,null,"Email address"),o.a.createElement(u.a.Control,{type:"email",placeholder:"Enter email"}),o.a.createElement(u.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),o.a.createElement(u.a.Group,{controlId:"formBasicPassword"},o.a.createElement(u.a.Label,null,"Password"),o.a.createElement(u.a.Control,{type:"password",placeholder:"Password"})),o.a.createElement(u.a.Group,{controlId:"formBasicChecbox"},o.a.createElement(u.a.Check,{type:"checkbox",label:"Check me out"})),o.a.createElement(E.a,{variant:"primary"},"Submit"))),o.a.createElement(i.a,{md:6},o.a.createElement(u.a.Group,{controlId:"exampleForm.ControlInput1"},o.a.createElement(u.a.Label,null,"Text"),o.a.createElement(u.a.Control,{type:"email",placeholder:"Text"})),o.a.createElement(u.a.Group,{controlId:"exampleForm.ControlSelect1"},o.a.createElement(u.a.Label,null,"Example select"),o.a.createElement(u.a.Control,{as:"select"},o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement(u.a.Group,{controlId:"exampleForm.ControlTextarea1"},o.a.createElement(u.a.Label,null,"Example textarea"),o.a.createElement(u.a.Control,{as:"textarea",rows:"3"})))),o.a.createElement("h5",{className:"mt-5"},"Sizing"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:6},o.a.createElement(u.a.Control,{size:"lg",type:"text",placeholder:"Large text",className:"mb-3"}),o.a.createElement(u.a.Control,{type:"text",placeholder:"Normal text",className:"mb-3"}),o.a.createElement(u.a.Control,{size:"sm",type:"text",placeholder:"Small text",className:"mb-3"})),o.a.createElement(i.a,{md:6},o.a.createElement(u.a.Control,{size:"lg",as:"select",className:"mb-3"},o.a.createElement("option",null,"Large select"),o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5")),o.a.createElement(u.a.Control,{as:"select",className:"mb-3"},o.a.createElement("option",null,"Default select"),o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5")))),o.a.createElement("h5",{className:"mt-5"},"Range Inputs"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a.Group,{controlId:"exampleForm.RangeInput"},o.a.createElement(u.a.Label,null,"Example Range input"),o.a.createElement(u.a.Control,{type:"range",className:"form-control-range"})))),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Readonly"),o.a.createElement("hr",null),o.a.createElement(u.a.Group,{controlId:"formPlaintextEmail"},o.a.createElement(u.a.Label,null,"Read only input"),o.a.createElement(u.a.Control,{readOnly:!0,defaultValue:"email@example.com"}))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Readonly plaintext"),o.a.createElement("hr",null),o.a.createElement(u.a.Group,{as:s.a,controlId:"formPlaintextEmail1"},o.a.createElement(u.a.Label,{column:!0,sm:"3"},"Email"),o.a.createElement(i.a,{sm:"9"},o.a.createElement(u.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"email@example.com"}))),o.a.createElement(u.a.Group,{as:s.a,controlId:"formPlaintextPassword"},o.a.createElement(u.a.Label,{column:!0,sm:"3"},"Password"),o.a.createElement(i.a,{sm:"9"},o.a.createElement(u.a.Control,{type:"password",placeholder:"Password"}))))),o.a.createElement("h5",{className:"mt-5"},"Inline"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a,{inline:!0},o.a.createElement(u.a.Group,{className:"mb-2"},o.a.createElement(u.a.Label,{srOnly:!0},"Email"),o.a.createElement(u.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"email@example.com"})),o.a.createElement(u.a.Group,{className:"mb-2 mr-5"},o.a.createElement(u.a.Label,{srOnly:!0},"Password"),o.a.createElement(u.a.Control,{type:"password",placeholder:"Password"})),o.a.createElement(u.a.Group,null,o.a.createElement(E.a,{className:"mb-0"},"Confirm Identity"))))),o.a.createElement("h5",{className:"mt-5"},"Form Grid"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a,null,o.a.createElement(u.a.Row,null,o.a.createElement(u.a.Group,{as:i.a,controlId:"formGridEmail"},o.a.createElement(u.a.Label,null,"Email"),o.a.createElement(u.a.Control,{type:"email",placeholder:"Enter email"})),o.a.createElement(u.a.Group,{as:i.a,controlId:"formGridPassword"},o.a.createElement(u.a.Label,null,"Password"),o.a.createElement(u.a.Control,{type:"password",placeholder:"Password"}))),o.a.createElement(u.a.Group,{controlId:"formGridAddress1"},o.a.createElement(u.a.Label,null,"Address"),o.a.createElement(u.a.Control,{placeholder:"1234 Main St"})),o.a.createElement(u.a.Group,{controlId:"formGridAddress2"},o.a.createElement(u.a.Label,null,"Address 2"),o.a.createElement(u.a.Control,{placeholder:"Apartment, studio, or floor"})),o.a.createElement(u.a.Row,null,o.a.createElement(u.a.Group,{as:i.a,controlId:"formGridCity"},o.a.createElement(u.a.Label,null,"City"),o.a.createElement(u.a.Control,null)),o.a.createElement(u.a.Group,{as:i.a,controlId:"formGridState"},o.a.createElement(u.a.Label,null,"State"),o.a.createElement(u.a.Control,{as:"select"},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"..."))),o.a.createElement(u.a.Group,{as:i.a,controlId:"formGridZip"},o.a.createElement(u.a.Label,null,"Zip"),o.a.createElement(u.a.Control,null))),o.a.createElement(u.a.Group,{id:"formGridCheckbox"},o.a.createElement(u.a.Check,{type:"checkbox",label:"Check me out"})),o.a.createElement(E.a,{variant:"primary"},"Sign In")))),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Horizontal Form"),o.a.createElement("hr",null),o.a.createElement(u.a,null,o.a.createElement(u.a.Group,{as:s.a,controlId:"formHorizontalEmail"},o.a.createElement(u.a.Label,{column:!0,sm:3},"Email"),o.a.createElement(i.a,{sm:9},o.a.createElement(u.a.Control,{type:"email",placeholder:"Email"}))),o.a.createElement(u.a.Group,{as:s.a,controlId:"formHorizontalPassword"},o.a.createElement(u.a.Label,{column:!0,sm:3},"Password"),o.a.createElement(i.a,{sm:9},o.a.createElement(u.a.Control,{type:"password",placeholder:"Password"}))),o.a.createElement("fieldset",null,o.a.createElement(u.a.Group,{as:s.a},o.a.createElement(u.a.Label,{as:"legend",column:!0,sm:3},"Radios"),o.a.createElement(i.a,{sm:9},o.a.createElement(u.a.Check,{type:"radio",label:"first radio",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),o.a.createElement(u.a.Check,{type:"radio",label:"second radio",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),o.a.createElement(u.a.Check,{type:"radio",label:"third radio",name:"formHorizontalRadios",id:"formHorizontalRadios3"})))),o.a.createElement(u.a.Group,{as:s.a,controlId:"formHorizontalCheck"},o.a.createElement(u.a.Label,{as:"legend",column:!0,sm:3},"Checkbox"),o.a.createElement(i.a,{sm:9},o.a.createElement(u.a.Check,{label:"Remember me"}))),o.a.createElement(u.a.Group,{as:s.a},o.a.createElement(i.a,{sm:{span:10,offset:2}},o.a.createElement(E.a,null,"Sign In"))))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Horizontal Form Label Sizing"),o.a.createElement("hr",null),o.a.createElement(u.a.Group,{as:s.a,controlId:"formHorizontalEmail1"},o.a.createElement(u.a.Label,{column:!0,sm:3},"Default"),o.a.createElement(i.a,{sm:9},o.a.createElement(u.a.Control,{type:"email",placeholder:"Email"}))),o.a.createElement(u.a.Group,{as:s.a,controlId:"formHorizontalEmail2"},o.a.createElement(u.a.Label,{className:"col-form-label-lg",column:!0,sm:3},"Large"),o.a.createElement(i.a,{sm:9},o.a.createElement(u.a.Control,{type:"email",placeholder:"Email"}))))),o.a.createElement("h5",{className:"mt-5"},"Help Text"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a.Group,{controlId:"formBasicEmail1"},o.a.createElement(u.a.Label,null,"Password"),o.a.createElement(u.a.Control,{type:"password",placeholder:"Password"}),o.a.createElement(u.a.Text,{className:"text-muted"},"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.")),o.a.createElement(u.a,{inline:!0},o.a.createElement(u.a.Group,{className:"mt-3"},o.a.createElement(u.a.Label,null,"Password"),o.a.createElement(u.a.Control,{type:"password",placeholder:"Password",className:"mx-sm-3"}),o.a.createElement(u.a.Text,{className:"text-muted"},"Must be 8-20 characters long."))))),o.a.createElement("h5",{className:"mt-5"},"Validation"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a,{noValidate:!0,validated:t},o.a.createElement(u.a.Row,null,o.a.createElement(u.a.Group,{as:i.a,md:"4",controlId:"validationCustom01"},o.a.createElement(u.a.Label,null,"First name"),o.a.createElement(u.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),o.a.createElement(u.a.Control.Feedback,null,"Looks good!")),o.a.createElement(u.a.Group,{as:i.a,md:"4",controlId:"validationCustom02"},o.a.createElement(u.a.Label,null,"Last name"),o.a.createElement(u.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),o.a.createElement(u.a.Control.Feedback,null,"Looks good!")),o.a.createElement(u.a.Group,{as:i.a,md:"4",controlId:"validationCustomUsername"},o.a.createElement(u.a.Label,null,"Username"),o.a.createElement(p.a,null,o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"inputGroupPrepend"},"@")),o.a.createElement(u.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),o.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please choose a username.")))),o.a.createElement(u.a.Row,null,o.a.createElement(u.a.Group,{as:i.a,md:"6",controlId:"validationCustom03"},o.a.createElement(u.a.Label,null,"City"),o.a.createElement(u.a.Control,{type:"text",placeholder:"City",required:!0}),o.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please provide a valid city.")),o.a.createElement(u.a.Group,{as:i.a,md:"3",controlId:"validationCustom04"},o.a.createElement(u.a.Label,null,"State"),o.a.createElement(u.a.Control,{type:"text",placeholder:"State",required:!0}),o.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please provide a valid state.")),o.a.createElement(u.a.Group,{as:i.a,md:"3",controlId:"validationCustom05"},o.a.createElement(u.a.Label,null,"Zip"),o.a.createElement(u.a.Control,{type:"text",placeholder:"Zip",required:!0}),o.a.createElement(u.a.Control.Feedback,{type:"invalid"},"Please provide a valid zip."))),o.a.createElement(u.a.Group,null,o.a.createElement(u.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})),o.a.createElement(E.a,{onClick:function(a){return e.handleSubmit(a)}},"Submit form")))),o.a.createElement("h5",{className:"mt-5"},"Supported Elements"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a.Group,null,o.a.createElement(u.a.Check,{custom:!0,required:!0,isInvalid:!this.state.supportedCheckbox,isValid:this.state.supportedCheckbox,type:"checkbox",id:"supported-checkbox",label:"Check this custom checkbox",feedback:!this.state.supportedCheckbox&&"Example invalid feedback text.",onChange:function(){return e.setState((function(e){return{supportedCheckbox:!e.supportedCheckbox}}))}})),o.a.createElement(u.a.Group,null,o.a.createElement(u.a.Check,{custom:!0,required:!0,isInvalid:!this.state.supportedRadio,isValid:this.state.supportedRadio,type:"radio",label:"Toggle this custom radio",name:"supportedRadio",id:"supportedRadio1",onChange:function(){return e.setState({supportedRadio:!0})}}),o.a.createElement(u.a.Check,{custom:!0,required:!0,isInvalid:!this.state.supportedRadio,isValid:this.state.supportedRadio,type:"radio",label:"Or toggle this other custom radio",name:"supportedRadio",id:"supportedRadio2",feedback:!this.state.supportedRadio&&"More example invalid feedback text.",onChange:function(){return e.setState({supportedRadio:!0})}})),o.a.createElement(u.a.Group,{className:"mt-3"},o.a.createElement(u.a.Control,{as:"select",required:!0,value:this.state.supportedSelect,isInvalid:0===this.state.supportedSelect,isValid:0!==this.state.supportedSelect,onChange:function(a){return e.supportedSelectHandler(a)}},o.a.createElement("option",{value:0},"Open this select menu"),o.a.createElement("option",{value:1},"1"),o.a.createElement("option",{value:2},"2"),o.a.createElement("option",{value:3},"3")),this.state.supportedSelect?"":o.a.createElement("div",{className:"invalid-feedback"},"Example invalid custom select feedback")),o.a.createElement("div",{className:"custom-file"},o.a.createElement(u.a.Control,{type:"file",className:"custom-file-input",id:"validatedCustomFile",required:!0,isInvalid:!this.state.supportedFile,isValid:this.state.supportedFile,onChange:function(a){return e.supportedFileHandler(a)}}),o.a.createElement(u.a.Label,{className:"custom-file-label",htmlFor:"validatedCustomFile"},"Choose file..."),this.state.supportedFile?"":o.a.createElement("div",{className:"invalid-feedback"},"Example invalid custom file feedback")))),o.a.createElement("h5",{className:"mt-5"},"Tooltip"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,null,o.a.createElement(u.a,{noValidate:!0,validated:l},o.a.createElement(u.a.Row,null,o.a.createElement(u.a.Group,{as:i.a,md:"4",controlId:"validationCustom011"},o.a.createElement(u.a.Label,null,"First name"),o.a.createElement(u.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),o.a.createElement("div",{className:"valid-tooltip"},"Looks good!")),o.a.createElement(u.a.Group,{as:i.a,md:"4",controlId:"validationCustom021"},o.a.createElement(u.a.Label,null,"Last name"),o.a.createElement(u.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),o.a.createElement("div",{className:"valid-tooltip"},"Looks good!")),o.a.createElement(u.a.Group,{as:i.a,md:"4",controlId:"validationCustomUsername1"},o.a.createElement(u.a.Label,null,"Username"),o.a.createElement(p.a,null,o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"inputGroupPrepend1"},"@")),o.a.createElement(u.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),o.a.createElement("div",{className:"invalid-tooltip"},"Please choose a username.")))),o.a.createElement(u.a.Row,null,o.a.createElement(u.a.Group,{as:i.a,md:"6",controlId:"validationCustom031"},o.a.createElement(u.a.Label,null,"City"),o.a.createElement(u.a.Control,{type:"text",placeholder:"City",required:!0}),o.a.createElement("div",{className:"invalid-tooltip"},"Please provide a valid city.")),o.a.createElement(u.a.Group,{as:i.a,md:"3",controlId:"validationCustom041"},o.a.createElement(u.a.Label,null,"State"),o.a.createElement(u.a.Control,{type:"text",placeholder:"State",required:!0}),o.a.createElement("div",{className:"invalid-tooltip"},"Please provide a valid state.")),o.a.createElement(u.a.Group,{as:i.a,md:"3",controlId:"validationCustom051"},o.a.createElement(u.a.Label,null,"Zip"),o.a.createElement(u.a.Control,{type:"text",placeholder:"Zip",required:!0}),o.a.createElement("div",{className:"invalid-tooltip"},"Please provide a valid zip."))),o.a.createElement(u.a.Group,null,o.a.createElement(u.a.Check,{custom:!0,required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting.",id:"tooltip-agree"})),o.a.createElement(E.a,{onClick:function(a){return e.handleSubmitTooltip(a)}},"Submit form")))),o.a.createElement("h3",{className:"mt-5"},"Checkboxes and Radios"),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:12},o.a.createElement("h5",{className:"mt-5"},"Checkboxes"),o.a.createElement("hr",null),o.a.createElement(u.a.Group,null,o.a.createElement(u.a.Check,{custom:!0,type:"checkbox",id:"checkbox1",label:"Check this custom checkbox"}))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Radios"),o.a.createElement("hr",null),o.a.createElement(u.a.Group,null,o.a.createElement(u.a.Check,{custom:!0,type:"radio",label:"Toggle this custom radio",name:"supportedRadios",id:"supportedRadio3"}),o.a.createElement(u.a.Check,{custom:!0,type:"radio",label:"Or toggle this other custom radio",name:"supportedRadios",id:"supportedRadio4"})),o.a.createElement("h5",{className:"mt-3"},"Inline"),o.a.createElement("hr",null),o.a.createElement(u.a.Group,null,o.a.createElement(u.a.Check,{inline:!0,custom:!0,type:"radio",label:"Toggle this custom radio",name:"supportedRadio",id:"supportedRadio21"}),o.a.createElement(u.a.Check,{inline:!0,custom:!0,type:"radio",label:"Or toggle this other custom radio",name:"supportedRadio",id:"supportedRadio22"}))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Range"),o.a.createElement("hr",null),o.a.createElement(u.a.Label,{htmlFor:"customRange1"},"Example range"),o.a.createElement("input",{type:"range",className:"custom-range",defaultValue:"22",id:"customRange1"}),o.a.createElement(u.a.Label,{htmlFor:"customRange2"},"Example range"),o.a.createElement("input",{type:"range",className:"custom-range",min:"0",defaultValue:"3",max:"5",id:"customRange2"}),o.a.createElement(u.a.Label,{htmlFor:"customRange3"},"Example range"),o.a.createElement("input",{type:"range",className:"custom-range",min:"0",defaultValue:"1.5",max:"5",step:"0.5",id:"customRange3"}))))),o.a.createElement(d.a,null,o.a.createElement(d.a.Header,null,o.a.createElement(d.a.Title,{as:"h5"},"Input Group")),o.a.createElement(d.a.Body,null,o.a.createElement(s.a,null,o.a.createElement(i.a,{md:12},o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"basic-addon1"},"@")),o.a.createElement(b.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(b.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement(p.a.Append,null,o.a.createElement(p.a.Text,{id:"basic-addon2"},"@example.com"))),o.a.createElement("label",{htmlFor:"basic-url"},"Your vanity URL"),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"basic-addon3"},"https://example.com/users/")),o.a.createElement(b.a,{id:"basic-url","aria-describedby":"basic-addon3"})),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,null,"$")),o.a.createElement(b.a,{"aria-label":"Amount (to the nearest dollar)"}),o.a.createElement(p.a.Append,null,o.a.createElement(p.a.Text,null,".00"))),o.a.createElement(p.a,null,o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,null,"With textarea")),o.a.createElement(b.a,{as:"textarea","aria-label":"With textarea"}))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Sizing"),o.a.createElement("hr",null),o.a.createElement(p.a,{size:"sm",className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"inputGroup-sizing-sm"},"Small")),o.a.createElement(b.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})),o.a.createElement("br",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"inputGroup-sizing-default"},"Default")),o.a.createElement(b.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})),o.a.createElement("br",null),o.a.createElement(p.a,{size:"lg"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"inputGroup-sizing-lg"},"Large")),o.a.createElement(b.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm"}))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Checkboxes and radios"),o.a.createElement("hr",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Checkbox,{"aria-label":"Checkbox for following text input"})),o.a.createElement(b.a,{"aria-label":"Text input with checkbox"})),o.a.createElement(p.a,null,o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Radio,{"aria-label":"Radio button for following text input"})),o.a.createElement(b.a,{"aria-label":"Text input with radio button"}))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Multiple inputs"),o.a.createElement("hr",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,null,"First and last name")),o.a.createElement(b.a,null),o.a.createElement(b.a,null))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Multiple addons"),o.a.createElement("hr",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,null,"$"),o.a.createElement(p.a.Text,null,"0.00")),o.a.createElement(b.a,{"aria-label":"Amount (to the nearest dollar)"})),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(b.a,{"aria-label":"Amount (to the nearest dollar)"}),o.a.createElement(p.a.Append,null,o.a.createElement(p.a.Text,null,"$"),o.a.createElement(p.a.Text,null,"0.00"))))),o.a.createElement("h5",{className:"mt-5"},"Button Addons"),o.a.createElement("hr",null),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:6},o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(E.a,null,"Button")),o.a.createElement(b.a,{"aria-describedby":"basic-addon1"})),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(b.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement(p.a.Append,null,o.a.createElement(E.a,null,"Button")))),o.a.createElement(i.a,{md:6},o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(E.a,null,"Button"),o.a.createElement(E.a,{variant:"secondary"},"Button")),o.a.createElement(b.a,{"aria-describedby":"basic-addon1"})),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(b.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement(p.a.Append,null,o.a.createElement(E.a,{variant:"secondary"},"Button"),o.a.createElement(E.a,null,"Button")))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Buttons With Dropdown"),o.a.createElement("hr",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(h.a,{as:p.a.Prepend,title:"Dropdown",id:"input-group-dropdown-1"},o.a.createElement(C.a.Item,{href:"#"},"Action"),o.a.createElement(C.a.Item,{href:"#"},"Another action"),o.a.createElement(C.a.Item,{href:"#"},"Something else here"),o.a.createElement(C.a.Divider,null),o.a.createElement(C.a.Item,{href:"#"},"Separated link")),o.a.createElement(b.a,{"aria-describedby":"basic-addon1"})),o.a.createElement(p.a,null,o.a.createElement(b.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement(h.a,{as:p.a.Append,title:"Dropdown",id:"input-group-dropdown-2"},o.a.createElement(C.a.Item,{href:"#"},"Action"),o.a.createElement(C.a.Item,{href:"#"},"Another action"),o.a.createElement(C.a.Item,{href:"#"},"Something else here"),o.a.createElement(C.a.Divider,null),o.a.createElement(C.a.Item,{href:"#"},"Separated link")))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-5"},"Segmented  Buttons"),o.a.createElement("hr",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(C.a,{as:p.a.Prepend},o.a.createElement(E.a,{variant:"secondary"},"Action"),o.a.createElement(C.a.Toggle,{split:!0,variant:"secondary",id:"dropdown-split-basic-1"}),o.a.createElement(C.a.Menu,null,o.a.createElement(C.a.Item,{hred:"#/action-1"},"Action"),o.a.createElement(C.a.Item,{hred:"#/action-2"},"Another action"),o.a.createElement(C.a.Item,{hred:"#/action-3"},"Something else"))),o.a.createElement(b.a,{"aria-describedby":"basic-addon1"})),o.a.createElement(p.a,null,o.a.createElement(b.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement(C.a,{as:p.a.Append},o.a.createElement(E.a,{variant:"secondary"},"Action"),o.a.createElement(C.a.Toggle,{split:!0,variant:"secondary",id:"dropdown-split-basic-2"}),o.a.createElement(C.a.Menu,null,o.a.createElement(C.a.Item,{hred:"#/action-1"},"Action"),o.a.createElement(C.a.Item,{hred:"#/action-2"},"Another action"),o.a.createElement(C.a.Item,{hred:"#/action-3"},"Something else")))))),o.a.createElement("h3",{className:"mt-5"},"Custom Forms"),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-3"},"Custom Select"),o.a.createElement("hr",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"custom-addons1"},"Option")),o.a.createElement(b.a,{as:"select","aria-describedby":"custom-addons1",className:"custom-select"},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(b.a,{as:"select","aria-describedby":"custom-addons2",className:"custom-select"},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5")),o.a.createElement(p.a.Append,null,o.a.createElement(p.a.Text,{id:"custom-addons2"},"Option"))),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(E.a,{id:"custom-addons3"},"Button")),o.a.createElement(b.a,{as:"select","aria-describedby":"custom-addons3",className:"custom-select"},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5"))),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(b.a,{as:"select","aria-describedby":"custom-addons4",className:"custom-select"},o.a.createElement("option",null,"Choose..."),o.a.createElement("option",null,"1"),o.a.createElement("option",null,"2"),o.a.createElement("option",null,"3"),o.a.createElement("option",null,"4"),o.a.createElement("option",null,"5")),o.a.createElement(p.a.Append,null,o.a.createElement(E.a,{id:"custom-addons4"},"Button")))),o.a.createElement(i.a,{md:6},o.a.createElement("h5",{className:"mt-3"},"Custom File Input"),o.a.createElement("hr",null),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement(p.a.Prepend,null,o.a.createElement(p.a.Text,{id:"custom-addons5"},"Upload")),o.a.createElement("div",{className:"custom-file"},o.a.createElement(u.a.Control,{"aria-describedby":"custom-addons5",type:"file",className:"custom-file-input",id:"validatedCustomFile1"}),o.a.createElement(u.a.Label,{className:"custom-file-label",htmlFor:"validatedCustomFile1"},"Choose file"))),o.a.createElement(p.a,{className:"mb-3"},o.a.createElement("div",{className:"custom-file"},o.a.createElement(u.a.Control,{"aria-describedby":"custom-addons6",type:"file",className:"custom-file-input",id:"validatedCustomFile2"}),o.a.createElement(u.a.Label,{className:"custom-file-label",htmlFor:"validatedCustomFile2"},"Choose file")),o.a.createElement(p.a.Append,null,o.a.createElement(p.a.Text,{id:"custom-addons6"},"Upload"))),o.a.createElement(p.a,{className:"mb-3 cust-file-button"},o.a.createElement(p.a.Prepend,null,o.a.createElement(E.a,{id:"custom-addons7"},"Button")),o.a.createElement("div",{className:"custom-file"},o.a.createElement(u.a.Control,{"aria-describedby":"custom-addons7",type:"file",className:"custom-file-input",id:"validatedCustomFile3"}),o.a.createElement(u.a.Label,{className:"custom-file-label",htmlFor:"validatedCustomFile3"},"Choose file"))),o.a.createElement(p.a,{className:"mb-3 cust-file-button"},o.a.createElement("div",{className:"custom-file"},o.a.createElement(u.a.Control,{"aria-describedby":"custom-addons8",type:"file",className:"custom-file-input",id:"validatedCustomFile4"}),o.a.createElement(u.a.Label,{className:"custom-file-label",htmlFor:"validatedCustomFile4"},"Choose file")),o.a.createElement(p.a.Append,null,o.a.createElement(E.a,{id:"custom-addons8"},"Button"))))))))))}}]),t}(o.a.Component);a.default=y}}]);
//# sourceMappingURL=190.8624f95a.chunk.js.map
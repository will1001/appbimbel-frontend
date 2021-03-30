(this.webpackJsonpview=this.webpackJsonpview||[]).push([[128],{139:function(e,t,a){"use strict";var n=a(6),o=a(7),r=a(9),l=a(8),s=a(0),c=a.n(s),i=a(219),d=a.n(i),u=a(220),p=a.n(u),b=a(223),m=a.n(b),f=a(224),h=a.n(f),v=a(225),y=a.n(v);function _(e){switch(e){case"classic":return p.a;case"balloon":return h.a;case"inline":return m.a;case"document":return y.a;default:return p.a}}var g=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(d.a,{editor:_(this.props.editor),data:this.props.html,onInit:function(t){"document"===e.props.editor&&(document.querySelector(".document-editor__toolbar").appendChild(t.ui.view.toolbar.element),window.editor=t)},onChange:function(e,t){},onBlur:function(e){},onFocus:function(e){}})}}]),a}(c.a.Component);t.a=g},1933:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(7),r=a(9),l=a(8),s=a(0),c=a.n(s),i=a(59),d=a(57),u=a(2019),p=a(20),b=a(139),m=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(i.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,null,c.a.createElement(u.a.Header,null,c.a.createElement(u.a.Title,{as:"h5"},"Document Editor")),c.a.createElement(u.a.Body,null,c.a.createElement("div",{className:"document-editor"},c.a.createElement("div",{className:"document-editor__toolbar"}),c.a.createElement("div",{className:"document-editor__editable-container"},c.a.createElement("div",{className:"document-editor__editable"},c.a.createElement(b.a,{html:'\n                            <h2 style="text-align:center;">The Flavorful Tuscany Meetup</h2>\n                            <h3 style="text-align:center;">Welcome letter</h3>\n                            <p>Dear Guest,</p>\n                            <p>We are delighted to welcome you to the annual <i>Flavorful Tuscany Meetup</i> and hope you will enjoy the programmer as well as your stay at the <a href="http://ckeditor.com">Bilancino Hotel</a>.</p>\n                            <p>Please find below the full schedule of the event.</p>\n                            <figure class="table ck-widget ck-widget_selectable" contenteditable="false">\n                                <table>\n                                    <thead>\n                                        <tr>\n                                            <th class="ck-editor__editable ck-editor__nested-editable" contenteditable="true" colspan="2">Saturday, July 14</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">9:30&nbsp;AM&nbsp;-&nbsp;11:30&nbsp;AM</td>\n                                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">Americano vs. Brewed - \u201cknow coffee\u201d with <strong>Stefano Garau</strong></td>\n                                        </tr>\n                                        <tr>\n                                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">1:00&nbsp;PM&nbsp;-&nbsp;3:00&nbsp;PM</td>\n                                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">Pappardelle al pomodoro -\n                                                <mark class="marker-yellow">live cooking</mark> with <strong>Rita</strong></td>\n                                        </tr>\n                                        <tr>\n                                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">5:00&nbsp;PM&nbsp;-&nbsp;8:00&nbsp;PM</td>\n                                            <td class="ck-editor__editable ck-editor__nested-editable" contenteditable="true">Tuscan vineyards at a glancewith <strong>Frederico Riscoli</strong></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </figure>\n                            <blockquote>\n                                <p>The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the\n                                    sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</p>\n                                <p>Angelina Calvino, food journalist</p>\n                            </blockquote>\n                            <p>Please arrive at the <a href="http://ckeditor.com">Bilancino Hotel</a> reception desk\n                                <mark class="marker-yellow">at least half an hour earlier</mark> to make sure that the registration process goes as smoothly as possible.</p>\n                            <p>We look forward to welcoming you to the event.</p>\n                            <p><strong>Victoria Valc</strong></p>\n                            <p><strong>Event Manager</strong></p>\n                            <p><strong>Bilancino Hotel</strong></p>\n                       ',editor:"document"})))))))))}}]),a}(c.a.Component);t.default=m},57:function(e,t,a){"use strict";var n=a(52),o=a(53),r=a(51),l=a.n(r),s=a(0),c=a.n(s),i=a(54),d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.as,u=void 0===s?"div":s,p=Object(o.a)(e,["bsPrefix","className","as"]),b=Object(i.a)(a,"col"),m=[],f=[];return d.forEach((function(e){var t,a,n,o=p[e];if(delete p[e],"object"===typeof o&&null!=o){var r=o.span;t=void 0===r||r,a=o.offset,n=o.order}else t=o;var l="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+b+l:""+b+l+"-"+t),null!=n&&f.push("order"+l+"-"+n),null!=a&&f.push("offset"+l+"-"+a)})),m.length||m.push(b),c.a.createElement(u,Object(n.a)({},p,{ref:t,className:l.a.apply(void 0,[r].concat(m,f))}))}));u.displayName="Col",t.a=u},59:function(e,t,a){"use strict";var n=a(52),o=a(53),r=a(51),l=a.n(r),s=a(0),c=a.n(s),i=a(54),d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.noGutters,u=e.as,p=void 0===u?"div":u,b=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(i.a)(a,"row"),f=m+"-cols",h=[];return d.forEach((function(e){var t,a=b[e];delete b[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&h.push(""+f+n+"-"+t)})),c.a.createElement(p,Object(n.a)({ref:t},b,{className:l.a.apply(void 0,[r,m,s&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u}}]);
//# sourceMappingURL=128.21c372fd.chunk.js.map
webpackJsonp([2],{"2mkk":function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.btn},[this._t("default")],2)},staticRenderFns:[]};var i=n("VU/8")({},r,!1,function(t){this.$style=n("UbIi")},null,null);e.a=i.exports},GZfW:function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,"\n.letter-detail-3kCC6_0 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n  padding: 0.1rem;\n}\n.letter-detail-3kCC6_0 .wrapper {\n  height: 100%;\n}\n.letter-detail-3kCC6_0 .wrapper .context {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-bottom: 0.1rem;\n  height: 1.2rem;\n  border-radius: 0.06rem;\n  text-align: center;\n  padding: 0.1rem 0;\n}\n.letter-detail-3kCC6_0 .wrapper .context .text {\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: #fff;\n}\n.letter-detail-3kCC6_0 .wrapper .input {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  height: 0.4rem;\n  color: #333;\n  border: 0.01rem solid #ccc;\n  border-radius: 0.06rem;\n  margin-bottom: 0.2rem;\n  padding-left: 0.1rem;\n}\n.letter-detail-3kCC6_0 .sticky-footer {\n  padding-bottom: 0.2rem;\n}\n",""]),e.locals={"letter-detail":"letter-detail-3kCC6_0"}},KuRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("W+FH"),i=n("2mkk"),a=n("QmSG"),o=n("ye1K"),l={components:{Btn:i.a},mixins:[o.a],data:function(){return{text:"",letterDetail:{},isSingleMode:a.a}},computed:{numberId:function(){return this.$route.params.numberId},letterId:function(){return this.$route.params.letterId}},methods:{pullingDownHandler:function(){this.getLetterDetail()},getLetterDetail:function(){var t=this;Object(r.b)(this.numberId,this.letterId).then(function(e){e.data&&1===e.data.code&&(t.letterDetail=e.data.data,t.$refs.scroll.deblocking())})},updateLetterDetail:function(){var t=this;Object(r.f)(this.numberId,this.letterId,this.text).then(function(e){e.data&&1===e.data.code&&t.getLetterDetail()})},deleteLetterDetail:function(){var t=this;Object(r.a)(this.numberId,this.letterId).then(function(e){e.data&&1===e.data.code&&(t.$routerCache.removeBackUntil({name:"mainEnter"}),t.$router.back())})},back:function(){this.$router.back()},removeCacheBack:function(){this.$routerCache.remove({name:"testCaseLetterList"}),this.$router.back()},pageTurnLetterList:function(){this.$router.push({name:"testCaseLetterList"})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vi-page",[n("vi-scroll",{ref:"scroll",staticStyle:{color:"#999"},attrs:{options:t.scrollOptions,scrollEvents:t.scrollEvents},on:{"pulling-down":t.pullingDownHandler}},[n("div",{class:t.$style["letter-detail"]},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"context",style:{background:t.letterDetail.background}},[n("div",{staticClass:"text"},[t._v("id: "+t._s(t.letterDetail.id))]),t._v(" "),n("div",{staticClass:"text"},[t._v("text: "+t._s(t.letterDetail.text))])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input",attrs:{placeholder:"输入你想修改的text值"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("btn",{staticStyle:{background:"#ff1133"},nativeOn:{click:function(e){return t.updateLetterDetail(e)}}},[t._v("修改当前列表元素的text为输入框的值")]),t._v(" "),t.isSingleMode?n("btn",{staticStyle:{background:"#ff1133"},nativeOn:{click:function(e){return t.deleteLetterDetail(e)}}},[t._v("删除并返回")]):t._e()],1),t._v(" "),n("div",{staticClass:"sticky-footer"},[t.isSingleMode?n("btn",{nativeOn:{click:function(e){return t.back(e)}}},[t._v("返回")]):t._e(),t._v(" "),t.isSingleMode?n("btn",{nativeOn:{click:function(e){return t.removeCacheBack(e)}}},[t._v("销毁上个列表页的缓存并返回")]):t._e(),t._v(" "),t.isSingleMode?t._e():n("btn",{nativeOn:{click:function(e){return t.pageTurnLetterList(e)}}},[t._v("push到新的列表页")])],1)])])],1)},staticRenderFns:[]};var c=n("VU/8")(l,s,!1,function(t){this.$style=n("n17g")},null,null);e.default=c.exports},Mpib:function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,"\n.btn-1XGM1_0 {\n  font-size: 0.16rem;\n  color: #fff;\n  border-radius: 0.05rem;\n  background: #41b883;\n  margin-bottom: 0.1rem;\n  line-height: 0.3rem;\n  text-align: center;\n  padding: 0.1rem;\n}\n",""]),e.locals={btn:"btn-1XGM1_0"}},UbIi:function(t,e,n){var r=n("Mpib");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("82ba0ef2",r,!0,{})},n17g:function(t,e,n){var r=n("GZfW");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("6ca661cc",r,!0,{})}});
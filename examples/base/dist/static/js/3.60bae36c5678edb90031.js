webpackJsonp([3],{"2mkk":function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.btn},[this._t("default")],2)},staticRenderFns:[]};var i=n("VU/8")({},r,!1,function(t){this.$style=n("UbIi")},null,null);e.a=i.exports},"52uC":function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,"\n.number-detail-2L-Vu_0 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n  padding: 0.1rem;\n}\n.number-detail-2L-Vu_0 .wrapper {\n  height: 100%;\n}\n.number-detail-2L-Vu_0 .wrapper .context {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-bottom: 0.1rem;\n  height: 1.2rem;\n  border-radius: 0.06rem;\n  text-align: center;\n  padding: 0.1rem 0;\n}\n.number-detail-2L-Vu_0 .wrapper .context .text {\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: #fff;\n}\n.number-detail-2L-Vu_0 .wrapper .input {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  height: 0.4rem;\n  color: #333;\n  border: 0.01rem solid #ccc;\n  border-radius: 0.06rem;\n  margin-bottom: 0.2rem;\n  padding-left: 0.1rem;\n}\n.number-detail-2L-Vu_0 .sticky-footer {\n  padding-bottom: 0.2rem;\n}\n",""]),e.locals={"number-detail":"number-detail-2L-Vu_0"}},GTiw:function(t,e,n){var r=n("52uC");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("a9b9523a",r,!0,{})},Mpib:function(t,e,n){(e=t.exports=n("FZ+f")(!1)).push([t.i,"\n.btn-1XGM1_0 {\n  font-size: 0.16rem;\n  color: #fff;\n  border-radius: 0.05rem;\n  background: #41b883;\n  margin-bottom: 0.1rem;\n  line-height: 0.3rem;\n  text-align: center;\n  padding: 0.1rem;\n}\n",""]),e.locals={btn:"btn-1XGM1_0"}},UbIi:function(t,e,n){var r=n("Mpib");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("82ba0ef2",r,!0,{})},oEQ0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("W+FH"),i=n("QmSG"),a=n("2mkk"),o=n("ye1K"),s={components:{Btn:a.a},mixins:[o.a],data:function(){return{text:"",numberDetail:{},isSingleMode:i.a}},computed:{numberId:function(){return this.$route.params.numberId}},methods:{pullingDownHandler:function(){this.getNumberDetail()},getNumberDetail:function(){var t=this;Object(r.d)(this.numberId).then(function(e){e.data&&1===e.data.code&&(t.numberDetail=e.data.data,t.$refs.scroll.deblocking())})},updateNumberDetail:function(){var t=this;Object(r.g)(this.numberId,this.text).then(function(e){e.data&&1===e.data.code&&t.getNumberDetail()})},back:function(){var t=this;i.a&&this.$global.confirm.show({title:"要手动删除上个页面缓存吗",text:"执行this.$routerCache.remove('/test-case/number-list')",confirmText:"确定",cancelText:"不需要",onConfirm:function(){t.$routerCache.remove("/test-case/number-list"),t.$router.back()},onCancel:function(){t.$router.back()}})},go:function(){var t=0|this.text;this.$router.go(t)},forward:function(){this.$router.forward()},pageTurnLetterList:function(){this.$router.push({name:"testCaseLetterList",params:{numberId:this.numberId}})},pageTurnNumberList:function(){this.$router.push({name:"testCaseNumberList"})},replaceNumberList:function(){this.$router.replace({name:"testCaseNumberList"})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vi-page",[n("vi-scroll",{ref:"scroll",staticStyle:{color:"#999"},attrs:{options:t.scrollOptions,scrollEvents:t.scrollEvents},on:{"pulling-down":t.pullingDownHandler}},[n("div",{class:t.$style["number-detail"]},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"context",style:{background:t.numberDetail.background}},[n("div",{staticClass:"text"},[t._v("id: "+t._s(t.numberDetail.id))]),t._v(" "),n("div",{staticClass:"text"},[t._v("text: "+t._s(t.numberDetail.text))]),t._v(" "),t.numberDetail.children?n("div",{staticClass:"text"},[t._v("子项长度: "+t._s(t.numberDetail.children.length))]):t._e()]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input",attrs:{type:"tel",placeholder:"输入你想输入的值"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("btn",{staticStyle:{background:"#ff1133"},nativeOn:{click:function(e){return t.updateNumberDetail(e)}}},[t._v("修改当前列表元素的text为输入框的值")])],1),t._v(" "),n("div",{staticClass:"sticky-footer"},[n("btn",{nativeOn:{click:function(e){return t.back(e)}}},[t._v("返回上一页(back)")]),t._v(" "),n("btn",{nativeOn:{click:function(e){return t.forward(e)}}},[t._v("前进一页(forward)")]),t._v(" "),n("btn",{nativeOn:{click:function(e){return t.go(e)}}},[t._v("导航到输入框的值的页数(go)")]),t._v(" "),n("btn",{nativeOn:{click:function(e){return t.pageTurnNumberList(e)}}},[t._v("自动更新并跳转到上一个列表页(push)")]),t._v(" "),n("btn",{nativeOn:{click:function(e){return t.replaceNumberList(e)}}},[t._v("自动更新并替换到上一个的列表页(replace)")]),t._v(" "),n("btn",{nativeOn:{click:function(e){return t.pageTurnLetterList(e)}}},[t._v("跳转到子项列表页(push)")])],1)])])],1)},staticRenderFns:[]};var c=n("VU/8")(s,u,!1,function(t){this.$style=n("GTiw")},null,null);e.default=c.exports}});
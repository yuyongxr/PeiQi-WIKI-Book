(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{2431:function(t,a,s){"use strict";s.r(a);var e=s(75),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"邮箱轰炸"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#邮箱轰炸"}},[t._v("#")]),t._v(" 邮箱轰炸")]),t._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),e("p",[t._v("漏洞挖掘过程中，常见功能点有注册或找回密码，大部分都由邮箱或手机号做验证请求，但是短信接口一个是限制了请求时间间隔，再一个是手机号格式严格限制等等。而邮箱不存在长度以及字符的限制，就存在一些有意思的绕过方法。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(990),alt:"image-20220506094512073"}})]),t._v(" "),e("h2",{attrs:{id:"大小写绕过"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大小写绕过"}},[t._v("#")]),t._v(" 大小写绕过")]),t._v(" "),e("p",[t._v("大家在发送邮件时可以注意到，当邮件地址中后缀存在大写字符时，例如 "),e("code",[t._v("xxx@qq.coM")]),t._v(" 实际也是可以成功发送邮件")]),t._v(" "),e("p",[e("img",{attrs:{src:s(991),alt:"image-20220506095926088"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(992),alt:"image-20220506100004831"}})]),t._v(" "),e("p",[t._v("开发过程中由于邮箱格式相比手机号格式存在更多的字符和长度，所以大部分接口检测重复发送是完全匹配检测，例如 "),e("code",[t._v("xxx@qq.com")]),t._v("，第一次发送后再次发送接口就会不允许发送，而修改为 "),e("code",[t._v("xxx@qq.COM")]),t._v(" 就可以绕过重复发送邮件造成邮件轰炸")]),t._v(" "),e("h2",{attrs:{id:"空白字符绕过"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#空白字符绕过"}},[t._v("#")]),t._v(" 空白字符绕过")]),t._v(" "),e("p",[t._v("延续刚刚提到的思路，当邮件变为 "),e("code",[t._v("xxx@qq.com%20")]),t._v(" 时，首先会对比 "),e("code",[t._v("xxx@qq.com")]),t._v(" 与 "),e("code",[t._v("xxx@qq.com%20")]),t._v(",发现不相同后判断为新的邮件地址，当后端进行URL解码后就重新变成 "),e("code",[t._v("xxx@qq.com")]),t._v(" 发送邮件")]),t._v(" "),e("p",[e("img",{attrs:{src:s(993),alt:"image-20220506102254536"}})]),t._v(" "),e("p",[t._v("在挖掘过程中可以通过"),e("code",[t._v("FUZZ")]),t._v("的方式确认漏洞")]),t._v(" "),e("p",[e("img",{attrs:{src:s(994),alt:"image-20220506101103276"}})])])}),[],!1,null,null,null);a.default=r.exports},990:function(t,a,s){t.exports=s.p+"assets/img/image-20220506094512073.4500c091.png"},991:function(t,a,s){t.exports=s.p+"assets/img/image-20220506095926088.616be544.png"},992:function(t,a,s){t.exports=s.p+"assets/img/image-20220506100004831.c5f7fadf.png"},993:function(t,a,s){t.exports=s.p+"assets/img/image-20220506102254536.8e4f3169.png"},994:function(t,a,s){t.exports=s.p+"assets/img/image-20220506101103276.7d97220a.png"}}]);
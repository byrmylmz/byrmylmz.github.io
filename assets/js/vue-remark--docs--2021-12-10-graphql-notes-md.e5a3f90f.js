(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0fiY":function(t,a,s){"use strict";s.r(a);var o=s("KHd+"),l=s("UQSp"),c=s("Kw5r");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}c.a.config.optionMergeStrategies;var n={VueRemarkRoot:l.a},i=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(n).forEach((function(t){"object"===e(n[t])&&"function"==typeof n[t].render||"function"==typeof n[t]&&"function"==typeof n[t].options.render?a[t]=n[t]:s[t]=function(){return n[t]}}))},r=c.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",F={excerpt:"Graphql note and some query samples!",title:"Graphql Notes",tags:["hardware","review"]};var E=function(t){t.options[p]&&(t.options[p]=F),c.a.util.defineReactive(t.options,p,F),t.options.computed=r.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},v=Object(o.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("p",[s("a",{attrs:{href:"https://github.com/byrmylmz/booksql-laravel/blob/ea44f377d7ba05a84566a9d3d611b980c3773331/graphql/schema.graphql#L7-L17",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Github repo")])]),s("blockquote",[s("p",[t._v("EndPoint "),s("a",{attrs:{href:"http://project-name.test/graphql",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("http://project-name.test/graphql")])])]),s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#2e3440ff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#81A1C1"}},[t._v("type")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Query")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("{")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    users")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" [")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("User")]),s("span",{staticStyle:{color:"#81A1C1"}},[t._v("!")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("]")]),s("span",{staticStyle:{color:"#81A1C1"}},[t._v("!")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @paginate(")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("defaultCount")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" 10) // ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("these")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("notes")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("for")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("the")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("future")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("projects")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    user(")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("id")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("ID")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("eq")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(")")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("User")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("find")])]),t._v("\n\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    books")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("[")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Book")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("] @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("all")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    book(")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("id")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("ID")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("eq")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(")")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Book")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("find")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    booksByFeatured(")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("featured")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Boolean")]),s("span",{staticStyle:{color:"#81A1C1"}},[t._v("!")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("eq")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(")")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" [")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Book")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("] @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("all")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    someComplexQuery(")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("search")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("String")]),s("span",{staticStyle:{color:"#81A1C1"}},[t._v("!")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(") [")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Book")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("]")])]),t._v("\n\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    categories")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("[")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Category")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("] @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("all")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    category(")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("id")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("ID")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("eq")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(")")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("Category")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" @")]),s("span",{staticStyle:{color:"#8FBCBB"}},[t._v("find")])])])]),s("h1",{attrs:{id:"create"}},[s("a",{attrs:{href:"#create","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("Create")]),s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#2e3440ff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#81A1C1"}},[t._v("mutation")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("{")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("  createCategory(")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    ")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("name")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v('"')]),s("span",{staticStyle:{color:"#616E88"}},[t._v('deneme"')])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("  ) ")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("{")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    name")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("  ")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("}")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("}")])])])]),s("h1",{attrs:{id:"update"}},[s("a",{attrs:{href:"#update","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("Update")]),s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#2e3440ff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#81A1C1"}},[t._v("mutation")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("{")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("  updateCategory(")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("id")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#B48EAD"}},[t._v("1")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(",")]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(" ")]),s("span",{staticStyle:{color:"#D8DEE9"}},[t._v("name")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v(":")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v('"')]),s("span",{staticStyle:{color:"#616E88"}},[t._v('new"')]),s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v(")")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("{")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    id")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    name")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("  ")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("}")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("}")])])])]),s("h1",{attrs:{id:"query-get-data"}},[s("a",{attrs:{href:"#query-get-data","aria-hidden":"true"}},[s("span",{staticClass:"icon icon-link"})]),t._v("query get data")]),s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#2e3440ff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#81A1C1"}},[t._v("query")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("{")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("  books")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("{")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("    id")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D8DEE9FF"}},[t._v("  ")]),s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("}")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#ECEFF4"}},[t._v("}")])])])]),s("p",[t._v("test")])])}),[],!1,null,null,null);"function"==typeof i&&i(v),"function"==typeof E&&E(v);a.default=v.exports},UQSp:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);
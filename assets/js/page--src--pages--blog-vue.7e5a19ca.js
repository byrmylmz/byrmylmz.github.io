(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8tYL":function(t,e,s){"use strict";s.r(e);var a={metaInfo:{title:"Blog"},components:{PaginationPosts:s("N9yt").a}},n=s("KHd+"),o=null,r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"container-inner mx-auto py-16 "},[t._l(t.$page.posts.edges,(function(e){return s("div",{key:e.id,staticClass:"post border-gray-400 border-b mb-12"},[s("h2",{staticClass:"text-3xl font-bold"},[s("g-link",{staticClass:"text-copy-primary",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1),s("div",{staticClass:"text-copy-secondary mb-4"},[s("span",[t._v(t._s(e.node.date))]),s("span",[t._v(" · ")]),s("span",[t._v(t._s(e.node.timeToRead)+" min read")])]),s("div",{staticClass:"text-lg mb-4"},[t._v("\n        "+t._s(e.node.summary)+"\n      ")]),s("div",{staticClass:"mb-8"},[s("g-link",{staticClass:"font-bold uppercase",attrs:{to:e.node.path}},[t._v("Read More")])],1)])})),t.$page.posts.pageInfo.totalPages>1?s("pagination-posts",{attrs:{base:"/blog",totalPages:t.$page.posts.pageInfo.totalPages,currentPage:t.$page.posts.pageInfo.currentPage}}):t._e()],2)])}),[],!1,null,null,null);"function"==typeof o&&o(r);e.default=r.exports},N9yt:function(t,e,s){"use strict";s("ma9I"),s("yq1k");var a={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},n=s("KHd+"),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-between text-xl items-center"},[s("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage,"data-cypress":"prev"}},[t._v("← Prev")]),s("div",{staticClass:"text-base"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),s("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage,"data-cypress":"next"}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=o.exports},yq1k:function(t,e,s){"use strict";var a=s("I+eb"),n=s("TWQb").includes,o=s("RNIs");a({target:"Array",proto:!0,forced:!s("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);
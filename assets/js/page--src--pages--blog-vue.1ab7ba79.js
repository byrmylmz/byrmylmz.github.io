(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8tYL":function(t,e,a){"use strict";a.r(e);var s={metaInfo:{title:"Blog"},components:{PaginationPosts:a("N9yt").a}},n=a("KHd+"),r=null,o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"container mx-auto py-16 "},[a("div",{},[a("div",{staticClass:"grid grid-cols-4 gap-4 mb-12"},t._l(t.$page.posts.edges,(function(e){return a("div",{key:e.id,staticClass:"post truncate border-gray-400 border-b rounded-lg border p-4 hover:border-gray-500 cursor-pointer"},[a("h2",{staticClass:" font-bold"},[a("g-link",{staticClass:"text-copy-primary",attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1),a("div",{staticClass:"text-copy-secondary mb-4"},[a("span",[t._v(t._s(e.node.date))]),a("span",[t._v(" · ")]),a("span",[t._v(t._s(e.node.timeToRead)+" min read")]),a("span",[t._v(t._s(e.node.tags.id))])])])})),0)]),t.$page.posts.pageInfo.totalPages>1?a("pagination-posts",{attrs:{base:"/blog",totalPages:t.$page.posts.pageInfo.totalPages,currentPage:t.$page.posts.pageInfo.currentPage}}):t._e()],1)])}),[],!1,null,null,null);"function"==typeof r&&r(o);e.default=o.exports},N9yt:function(t,e,a){"use strict";a("ma9I"),a("yq1k");var s={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-between text-xl items-center"},[a("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage,"data-cypress":"prev"}},[t._v("← Prev")]),a("div",{staticClass:"text-base"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),a("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage,"data-cypress":"next"}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=r.exports},yq1k:function(t,e,a){"use strict";var s=a("I+eb"),n=a("TWQb").includes,r=a("RNIs");s({target:"Array",proto:!0,forced:!a("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")}}]);
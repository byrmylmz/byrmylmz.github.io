(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8tYL":function(t,e,s){"use strict";s.r(e);var a={metaInfo:{title:"Blog"},components:{PaginationPosts:s("N9yt").a}},n=s("KHd+"),r=null,o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"container mx-auto py-16 "},[s("div",{},[s("div",{staticClass:"grid grid-cols-4 gap-4 mb-12"},t._l(t.$page.posts.edges,(function(e){return s("g-link",{key:e.id,staticClass:"\n                post \n                shadow-lg  \n                border-gray-300 \n                border-2 \n                rounded-lg \n                p-3 \n                hover:border-gray-400 \n                cursor-pointer \n                \n                ",attrs:{to:e.node.path}},[s("div",{staticClass:" font-semibold truncate text-md text-gray-800"},[t._v(t._s(e.node.title))]),s("div",{staticClass:"flex items-center space-x-2"},t._l(e.node.tags,(function(e){return s("div",{key:e.id,staticClass:"flex flex-wrap "},[s("g-link",{staticClass:"bg-blue-200\n                                   rounded-full\n                                   px-1 \n                                   hover:bg-blue-500 \n                                   text-xs\n                                   text-blue-800\n                                   hover:text-blue-100\n                                   shadow-xs \n                                   font-semibold\n                                   \n                                   ",attrs:{to:e.path}},[t._v("\n                        "+t._s(e.title)+"\n                        ")])],1)})),0)])})),1)]),t.$page.posts.pageInfo.totalPages>1?s("pagination-posts",{attrs:{base:"/blog",totalPages:t.$page.posts.pageInfo.totalPages,currentPage:t.$page.posts.pageInfo.currentPage}}):t._e()],1)])}),[],!1,null,null,null);"function"==typeof r&&r(o);e.default=o.exports},N9yt:function(t,e,s){"use strict";s("ma9I"),s("yq1k");var a={props:["base","totalPages","currentPage"],computed:{showPreviousPage:function(){return 1!==this.currentPage},previousPage:function(){return[0,1].includes(this.currentPage-1)?this.base:"".concat(this.base,"/").concat(this.currentPage-1)},showNextPage:function(){return this.currentPage!==this.totalPages},nextPage:function(t,e){return this.totalPages>this.currentPage?"".concat(this.base,"/").concat(this.currentPage+1):"".concat(this.base,"/").concat(this.currentPage)}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-between text-xl items-center"},[s("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showPreviousPage},attrs:{to:t.previousPage,"data-cypress":"prev"}},[t._v("← Prev")]),s("div",{staticClass:"text-base"},[t._v("Page "+t._s(t.currentPage)+" of "+t._s(t.totalPages))]),s("g-link",{class:{"text-gray-400 hover:text-gray-400 cursor-not-allowed":!t.showNextPage},attrs:{to:t.nextPage,"data-cypress":"next"}},[t._v("Next →")])],1)}),[],!1,null,null,null);e.a=r.exports},yq1k:function(t,e,s){"use strict";var a=s("I+eb"),n=s("TWQb").includes,r=s("RNIs");a({target:"Array",proto:!0,forced:!s("rkAj")("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")}}]);
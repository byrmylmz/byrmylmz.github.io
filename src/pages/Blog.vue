<template>
  <Layout>
    <div class="container mx-auto py-16 ">
          <div class="grid grid-cols-4 gap-4 mb-12">
                  <g-link   
                      v-for="post in $page.posts.edges" 
                      :key="post.id" 
                      :to="post.node.path" 
                      class= "post shadow-lg border-gray-300 border-2 rounded-lg p-3 hover:border-gray-400 cursor-pointer">                                                                                                                                                            
                    <div class=" font-semibold truncate text-md text-gray-800">{{ post.node.title }}</div>
                   <!--  <div class="flex items-center space-x-2">
                      TAG SECTION 
                      <div v-for="tag in post.node.tags" :key="tag.id" class="flex flex-wrap " >
                          <g-link 
                            :to="tag.path"
                             class="bg-blue-200 rounded-full px-1 hover:bg-blue-500 text-xs text-blue-800 hover:text-blue-100 shadow-xs font-semibold">
                          {{tag.title}}
                          </g-link>
                      </div>
                    </div>-->
                  </g-link >
            </div>
          <pagination-posts
            v-if="$page.posts.pageInfo.totalPages > 1"
            base="/blog"
            :totalPages="$page.posts.pageInfo.totalPages"
            :currentPage="$page.posts.pageInfo.currentPage"
          />
    </div> 
  </Layout>
</template>
<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 28, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        tags{
          id
          title
          path
        }
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
 deneme:allPost{
    edges{
      node{
        id
        date
        title
        tags{
          id
          title
          }
        }
      }
    }
  }
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  }
}
</script>


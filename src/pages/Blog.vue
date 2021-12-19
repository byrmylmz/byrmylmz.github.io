<template>
  <Layout>
    <div class="container mx-auto py-16 ">
      <div class="">
       
          <div class="grid grid-cols-4 gap-4 mb-12">
            <div v-for="post in $page.posts.edges" :key="post.id" class="post border-gray-400 border-b rounded-lg border p-4 hover:border-gray-500 cursor-pointer">
              <h2 class=" font-bold truncate"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
              <div class="text-copy-secondary mb-4">
                <span>{{ post.node.date }}</span>
                <span> &middot; </span>
                <span>{{ post.node.timeToRead }} min read</span>
                <span>{{ post.node.tags.id }}</span>
              </div>
            </div>
          </div>
      
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
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        tags{
          id
          title
        }
        timeToRead
        path
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


<template>
  <Layout>
    <div class="container-inner mx-auto py-16 ">
      <div v-for="note in $page.notes.edges" :key="note.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="note.node.path" class="text-copy-primary">{{ note.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ note.node.date }}</span>
          <span> &middot; </span>
          <span>{{ note.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ note.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="note.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->


    </div>
  </Layout>
</template>

<page-query>
query Notes ($page: Int) {
  notes: allNote (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
       
      }
    }
  }
}
</page-query>

<script>

export default {
  metaInfo: {
    title: 'Note'
  },
  components: {
    PaginationPosts
  }
}
</script>


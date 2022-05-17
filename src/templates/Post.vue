<template>
  <Layout>
    <div class="container mx-auto my-16">

      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-blue-300">
          {{ tag.title }}
        </g-link>
      </div>

         <div v-if="$page.post.youtube" class="markdown-body mb-8" > 
              <div style="width: 100%; margin: 0 auto;">
              <div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;">
              <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                :src="'https://www.youtube.com/embed/'+ $page.post.youtube"></iframe>
              </div>
              </div>
         </div>
         <div class="container-inner mx-auto markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
      <a :href="'https://github.com/byrmylmz/byrmylmz.github.io/edit/master/'+$page.post.fileInfo.path"
      class="
      text-sm
      ">
      <!-- Edit icon -->
        <div class="flex items-center space-x-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div>Edit This Page on Github.</div>
        </div>
      </a>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    youtube
    date (format: "MMMM D, Y")
    content
    fileInfo{
          extension
          directory
          path
          name
          
        }
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style src="../css/github-markdown.css" />


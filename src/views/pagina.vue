<script>
import { getNews } from "../api/noticias";

export default {
  data() {
    return {
      articles: []
    };
  },
  async mounted() {
    try {
      this.articles = await getNews("your-section");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
};
</script>

<template>
  <div class="container">
    <div v-for="(article, index) in articles" :key="index" class="card mb-3 head">
      <div class="row g-0">
       
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text">{{ article.abstract }}</p>
            <a :href="article.url" class="continue">Continue</a>
            <p class="card-text"><small class="text-muted">{{ article.published_date }}</small></p>
          </div>
        </div>
       
        <div class="col-md-4">
          <img :src="article.multimedia[2].url" class="card-img" alt="No image">
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

.continue {
  text-decoration: none;
  color: blue;
  font-weight: bold;
}

.card-img {
  width: 100%;
  height: auto;
}
</style>

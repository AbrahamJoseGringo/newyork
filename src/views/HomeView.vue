<script>
import axios from 'axios';
import NoticiasApi from '../api/noticias.js';
const noticiasapi = new NoticiasApi();

export default {
  props: ["id"],
  data() {
    return {
      archiveMetadata: {},
      articles: {},
      bestSellers: {},
      popularArticles: {},
      rssFeed: {},
      timesTags: [],
    };
  },
  components: {
      NoticiasApi,
  },
  async created() {
        this.archiveMetadata = await getArchiveMetadata();
        this.articles = await articleSearch();
        this.bestSellers = await getBestSellersList();
        this.popularArticles = await getMostPopular('all-sections');
        this.rssFeed = await getRSSFeed('home');
        this.timesTags = await getTimesTags();
        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq=${filter}&api-key=PzVx7XkcdxuMF9dzRGLMVbamDjFfQ6KQ&language=pt-BR`;
        const { data } = await axios.get(url);
        this.archiveMetadata = data;
  },
  methods: {
    getMostPopular(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    }
  }
};
</script>
<template>
  <main class="PaginaNoticia">
    <div class="DescricaoNoticia">
      <NoticiasApi
      v-model="archiveMetadata"
      :NomearquiveMetadata="archiveMetadata.title"
      :key="archiveMetadata.id"
      :Noticia="archiveMetadata.overview"/>
    </div>
    <img class="poster" :class="getPosterUrl(filme.poster_path)" alt="" />
  </main>
</template>


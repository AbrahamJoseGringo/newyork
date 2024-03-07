import axios from 'axios';
const fetch = require('node-fetch');
const apiKey = 'PzVx7XkcdxuMF9dzRGLMVbamDjFfQ6KQ&language=pt-BR';
export default class NoticiasApi{

async  getArchiveMetadata(year, month) {
    const url = `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`;
    const response = await fetch(url);
    return response.json();
}

async  articleSearch(query) {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&fq={filter}&api-key=${apiKey}`;
    const response = await fetch(url);
    return response.json();
}
async  getBestSellersList() {
    const url = `/lists/2019-01-20/hardcover-fiction.json-key=${apiKey}`;
    const response = await fetch(url);
    return response.json();
}

async  getMostPopular(section) {
    const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${section}/1.json?api-key=${apiKey}`;
    const response = await fetch(url);
    return response.json();
}

async  getRSSFeed(section) {
    const url = `https://rss.nytimes.com/services/xml/rss/nyt/${section}.xml`;
    const response = await fetch(url);
    return response.text();
}

async getTimesTags() {
    const url = `https://api.nytimes.com/svc/timestags/v2/list.json?api-key=${apiKey}`;
    const response = await fetch(url);
    return response.json();
}
}
(async () => {
    try {
        
        const archiveMetadata = await getArchiveMetadata(2024, 2);
        console.log("Archive Metadata:", archiveMetadata);

        
        const articles = await articleSearch('Bitcoin');
        console.log("Articles:", articles);

       
        const bestSellers = await getBestSellersList();
        console.log("Best Sellers:", bestSellers);

       
        const popularArticles = await getMostPopular('all-sections');
        console.log("Popular Articles:", popularArticles);

       
        const rssFeed = await getRSSFeed('home');
        console.log("RSS Feed:", rssFeed);

        
        const timesTags = await getTimesTags();
        console.log("Times Tags:", timesTags);
    } catch (error) {
        console.error("Error:", error);
    }
})();

import axios from "axios";

export async function getNews(section) {
  try {
    const apiKey = "PzVx7XkcdxuMF9dzRGLMVbamDjFfQ6KQ";
    const apiURL = `https://api.nytimes.com/svc/archive/v1/{year}/{month}.json-key=${apiKey}`;
    const response = await axios.get(apiURL);
    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
}

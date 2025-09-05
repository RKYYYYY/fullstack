// import { BASE_URL } from "../utils/url";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

export async function getBlogsFromApi() {
  try {
    const response = await fetch(`${BASE_URL}/blog`);
    const blogfromBackend = await response.json();
    return blogfromBackend;
  } catch (error) {
    console.log(error);
  }
}

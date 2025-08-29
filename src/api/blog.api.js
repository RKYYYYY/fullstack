import { BASE_URL } from "../utils/url";

export async function getBlogsFromApi() {
  try {
    const response = await fetch(`${BASE_URL}/blog`);
    const blogfromBackend = await response.json();
    return blogfromBackend;
  } catch (error) {
    console.log(error);
  }
}

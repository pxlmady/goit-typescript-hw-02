import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  params: {
    client_id: "iczhnXqpujCHa7ylFBKVjHqswLYa1gorENOMQkIKGbo",
    image_type: "photo",
    orientation: "landscape",
    content_filter: "high",
  },
});

export const photoPerPage = 12;

export interface ImageData {
  total_pages: number;
  results: any[]; // Замените any на тип изображений, которые вы используете
}

export async function requestImageGallery(
  query: string,
  pageNumber: number
): Promise<ImageData> {
  const response: AxiosResponse<ImageData> = await instance.get("", {
    params: {
      query: query,
      page: pageNumber,
      per_page: photoPerPage,
    },
  });
  return response.data;
}

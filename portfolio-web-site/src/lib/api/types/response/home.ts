interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface ImageURL {
  imageUrl: string;
}

interface ImageURLs {
  downloadURLs: string[];
}

export { IPhoto, ImageURL, ImageURLs };

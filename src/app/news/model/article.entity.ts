import {Source} from "./source.entity";

/**
 * Article entity
 * @class Article
 * @description
 * This class is used to represent the article of the news.
 * @property title: string - The title of the article.
 * @property description: string - The description of the article.
 * @property url: string - The url of the article.
 * @property urlToImage: string - The url of the article's image.
 * @property publishedAt: string - The date of the article.
 * @property source: Source - The source of the article.
 */
export class Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: Source;

  constructor() {
    this.title = "";
    this.description = "";
    this.url = "";
    this.urlToImage = "";
    this.publishedAt = "";
    this.source = new Source();
  }

}

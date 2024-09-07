/**
 * Source entity
 * @class Source
 * @description
 * This class is used to represent the source of the news.
 * @property id: string - The id of the source.
 * @property name: string - The name of the source.
 * @property url: string - The url of the source.
 * @property urlToLogo: string - The url of the source's logo.
 */
export class Source {
  id: string;
  name: string;
  url: string;
  urlToLogo: string;

  constructor() {
    this.id = "";
    this.name = "";
    this.url = "";
    this.urlToLogo = "";
  }


}

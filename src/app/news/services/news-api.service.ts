import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

/**
 * News API Service
 * @class NewsApiService
 * @description
 * This class is used to interact with the news API.
 * @property apiKey: string - The API key of the news API.
 * @property baseUrl: string - The base URL of the news API.
 * @property http: HttpClient - The HTTP client to make requests.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiKey: string = `${environment.newsApiKey}`;
  private baseUrl: string = 'https://newsapi.org/v2';
  private http: HttpClient = inject(HttpClient);

  /**
   * Get the sources of the news.
   * @method getSources
   * @returns An observable of the sources.
   */
  getSources() {
    return this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  /**
   * Get the articles by source id.
   * @method getArticlesBySourceId
   * @param sourceId: string - The id of the source.
   * @returns An observable of the articles.
   */
  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }
}

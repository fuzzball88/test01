import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: "root"
})
export class NewsService {
  currentNews: any;
  constructor(private http: HttpClient) {}

  getData(url): Observable<any> {
    var address = `${API_URL}/${url}&apiKey=${API_KEY}`;
    console.log(address);
    return this.http.get(address);
  }
}

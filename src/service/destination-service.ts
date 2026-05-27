import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DestinationService {
  constructor(private http: HttpClient) {
  }

  endpoint = 'destinations';
  apiUrl = environment.apiUrl;

  getDestinations() {
    return this.http.get(`${this.apiUrl}/${this.endpoint}`);
  }
}   
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lead } from '../model/lead.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmOptimusService {

  constructor(private http: HttpClient) { }

  crearLead(lead: Lead) : Observable<string>{
      return this.http.post(`https://54.146.241.184/leads`, lead, { responseType: 'text' });
  }
  crearLeadWebinar(lead: Lead) : Observable<string>{
    return this.http.post(`https://54.146.241.184/leads/webinar`, lead, { responseType: 'text' });
}
}

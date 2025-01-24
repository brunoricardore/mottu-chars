import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiResponse, Character } from '../models/api.models';

export interface CharacterQueryParams {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;

  page: number;
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCharacter(params?: Partial<CharacterQueryParams>) {
    return this.http.get<ApiResponse>(environment.apiURL, {
      params
    });
  }

  fetchCharacterByIds(ids: number[]) {
    return this.http.get<Character[]>(`${environment.apiURL}/[${ids.join()}]`);
  }

}

import { Injectable } from '@angular/core';
import { Region } from '../interfaces/region.type';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { environment } from '../../../environments/environment.development';

const API_URL = environment.API_URL;

const routes = {
  capital: (term: string) => `${API_URL}/capital/${term}`,
  country: (term: string) => `${API_URL}/name/${term}`,
  region: (region: string) => `${API_URL}/region/${region}`,
  alpha: (code: string) => `${API_URL}/alpha/${code}`,
};

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { countries: [] },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    let ls = localStorage.getItem('cacheStore');
    if (ls) {
      this.cacheStore = JSON.parse(ls);
    }
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(routes.alpha(code)).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.getCountriesRequest(routes.capital(term)).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.getCountriesRequest(routes.country(term)).pipe(
      tap((countries) => (this.cacheStore.byCountries = { term, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    return this.getCountriesRequest(routes.region(region)).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.saveToLocalStorage())
    );
  }
}

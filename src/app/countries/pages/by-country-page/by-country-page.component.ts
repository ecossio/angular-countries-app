import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  public isSearching: boolean = false;
  public countries: Country[] = [];
  public searchBoxInitialValue: string = '';

  constructor(private countrySvc: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countrySvc.cacheStore.byCountries.countries;
    this.searchBoxInitialValue = this.countrySvc.cacheStore.byCountries.term;
  }

  searchByCountry(value: string) {
    if (!this.isSearching) {
      this.isSearching = true;
      this.countrySvc
        .searchCountry(value)
        .pipe(
          finalize(() => {
            this.isSearching = false;
          })
        )
        .subscribe({
          next: (countries) => {
            this.countries = countries;
          },
          error: (e) => {},
        });
    }
  }
}

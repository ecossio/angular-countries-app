import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  public isSearching: boolean = false;
  public countries: Country[] = [];
  public searchBoxInitialValue: string = '';

  constructor(private countrySvc: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countrySvc.cacheStore.byCapital.countries;
    this.searchBoxInitialValue = this.countrySvc.cacheStore.byCapital.term;
  }

  searchByCapital(value: string) {
    if (!this.isSearching) {
      this.isSearching = true;
      this.countrySvc
        .searchCapital(value)
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

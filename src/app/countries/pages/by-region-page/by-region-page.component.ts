import { finalize } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Region } from '../../interfaces/region.type';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  public isSearching: boolean = false;
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countrySvc: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countrySvc.cacheStore.byRegion.countries;
    this.selectedRegion = this.countrySvc.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    if (!this.isSearching) {
      this.selectedRegion = region;
      this.isSearching = true;
      this.countrySvc
        .searchRegion(region)
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

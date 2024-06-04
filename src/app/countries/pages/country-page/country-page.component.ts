import { switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesSvc: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesSvc.searchByAlphaCode(id)))
      .subscribe({
        next: (country) => {
          if (!country) return this.router.navigateByUrl('');
          this.country = country;
          return;
        },
      });
  }
}

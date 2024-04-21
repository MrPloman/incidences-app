import { Component, inject, OnInit } from '@angular/core';
import { IncidencesListService } from '../../services/IncidencesListService.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';

@Component({
  selector: 'app-page-incidences-list',
  templateUrl: './incidences-list.component.html',
  styleUrls: ['./incidences-list.component.scss'],
})
export class IncidencesListComponent implements OnInit {
  public isLoading = true;

  public list: { userId: number; id: number; title: string; body: string }[] =
    [];
  private incidencesListService = inject(IncidencesListService);
  private loadingService = inject(LoadingService);
  private router = inject(Router);

  ngOnInit(): void {
    this.incidencesListService.observableIncidendesList$.subscribe(
      (dat: { userId: number; id: number; title: string; body: string }[]) => {
        setTimeout(() => {
          if (dat && dat.length > 0) {
            this.list = dat;
          }
          this.isLoading = false;
        }, 2000);
      }
    );
  }
  public goToIncidenceDetail(incidence: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }): void {
    this.loadingService.setTrue();
    setTimeout(() => {
      this.router.navigate([`incidences/${incidence.id}`], {});
      this.loadingService.setFalse();
    }, 1000);
  }
}

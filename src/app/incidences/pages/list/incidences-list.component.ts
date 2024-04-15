import { Component, OnInit } from '@angular/core';
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
  public router: Router;
  public _incidencesListService: IncidencesListService;
  public loadingService: LoadingService;
  public list: { userId: number; id: number; title: string; body: string }[] =
    [];
  constructor(
    incidencesListService: IncidencesListService,
    loadingService: LoadingService,
    router: Router
  ) {
    this.loadingService = loadingService;
    this._incidencesListService = incidencesListService;
    this.router = router;
  }
  ngOnInit(): void {
    this._incidencesListService.observableIncidendesList$.subscribe(
      (data: { userId: number; id: number; title: string; body: string }[]) => {
        setTimeout(() => {
          if (data && data.length > 0) {
            this.list = data;
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

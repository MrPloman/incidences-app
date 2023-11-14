import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IncidencesListService } from '../../services/IncidencesListService.service';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';

@Component({
  selector: 'page-incidences-detail',
  templateUrl: './incidences-detail.component.html',
  styleUrls: ['./incidences-detail.component.scss'],
})
export class IncidencesDetailComponent {
  public isLoading = true;

  public _incidencesListService: IncidencesListService;
  public loadingService: LoadingService;
  public incidence: {
    userId: number;
    id: number;
    title: string;
    body: string;
  } = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  constructor(
    incidencesListService: IncidencesListService,
    loadingService: LoadingService
  ) {
    this.loadingService = loadingService;
    this._incidencesListService = incidencesListService;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this._incidencesListService.observableIncidendesList$.subscribe(
      (data: { userId: number; id: number; title: string; body: string }) => {
        setTimeout(() => {
          if (data) {
            this.incidence = data;
          }
          this.isLoading = false;
          this.loadingService.setFalse();
        }, 2000);
      }
    );
  }
}

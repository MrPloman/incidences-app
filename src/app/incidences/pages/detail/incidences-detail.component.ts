import { Component, inject, OnInit } from '@angular/core';
import { IncidencesListService } from '../../services/IncidencesListService.service';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';

@Component({
  selector: 'app-page-incidences-detail',
  templateUrl: './incidences-detail.component.html',
  styleUrls: ['./incidences-detail.component.scss'],
})
export class IncidencesDetailComponent implements OnInit {
  public isLoading = true;
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
  private incidencesListService = inject(IncidencesListService);
  private loadingService = inject(LoadingService);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.incidencesListService.observableIncidendesList$.subscribe(
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

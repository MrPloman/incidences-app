import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  setUILoadingTrue,
  setUILoadingFalse,
} from 'src/app/stores/actions/UIloading.actions';
import { getFlatAction } from 'src/app/stores/actions/flatForms.actions';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'app-show-flat',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowFlatComponent implements OnInit, AfterContentChecked {
  public loadingSubscription!: Subscription;
  public flatForm = undefined;
  public loading = true;
  private store = inject(Store<AppState>);
  private route = inject(ActivatedRoute);
  private cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.store.dispatch(setUILoadingTrue());
    this.loadingSubscription = this.store
      .select('UILoadingState')
      .subscribe((state) => (this.loading = state.loading));
    this.route.paramMap.subscribe((paramMap) => {
      const id: string | null = paramMap.get('id');
      if (id) {
        this.store.dispatch(
          getFlatAction({
            id,
          })
        );
        setTimeout(() => {
          this.store.dispatch(setUILoadingFalse());
        }, 1000);
      }
    });
  }
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
}

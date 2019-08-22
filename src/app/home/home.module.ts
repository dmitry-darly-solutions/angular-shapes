import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { reducers } from '../core/store/reducers';

export const APPReducerToken = new InjectionToken(
  'APP Registered Reducers',
);

export function getReducers() {
  return reducers;
}

export const ReducerProvider = [
  { provide: APPReducerToken, useFactory: getReducers },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forRoot(APPReducerToken, {}),
  ],
  providers: [ReducerProvider]
})
export class HomeModule { }

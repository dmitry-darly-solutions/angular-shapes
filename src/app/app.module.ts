import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './core/store';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "./shared/shared.module";

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
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(APPReducerToken, {}),
  ],
  providers: [ReducerProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}

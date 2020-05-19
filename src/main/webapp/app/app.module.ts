import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CiberHealthAppSharedModule } from 'app/shared/shared.module';
import { CiberHealthAppCoreModule } from 'app/core/core.module';
import { CiberHealthAppAppRoutingModule } from './app-routing.module';
import { CiberHealthAppHomeModule } from './home/home.module';
import { CiberHealthAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CiberHealthAppSharedModule,
    CiberHealthAppCoreModule,
    CiberHealthAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CiberHealthAppEntityModule,
    CiberHealthAppAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CiberHealthAppAppModule {}

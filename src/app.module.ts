import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    ChildComponent,
    DatabindingComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

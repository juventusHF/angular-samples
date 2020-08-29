import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { ChildComponent } from './components/component-interaction/child/child.component';
import { DatabindingComponent } from './components/databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    ChildComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

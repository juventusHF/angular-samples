import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { RoutingComponent } from './components/routing/routing.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicesComponent } from './components/services/services.component';
import { HttpComponent } from './components/http/http.component';
import { TestingComponent } from './components/testing/testing.component';

const routes: Routes = [
  { path: 'data-binding', component: DatabindingComponent },
  { path: 'component-interaction', component: ComponentInteractionComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'http', component: HttpComponent },
  { path: 'testing', component: TestingComponent },
  // { path: 'path2/:id', component: SecondComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

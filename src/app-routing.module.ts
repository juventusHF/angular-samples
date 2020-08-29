import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { RoutingComponent } from './components/routing/routing.component';
import { DirectivesComponent } from './components/directives/directives.component';

const routes: Routes = [
  { path: 'databinding', component: DatabindingComponent },
  { path: 'component-interaction', component: ComponentInteractionComponent },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'directives', component: DirectivesComponent },
  // { path: 'path2/:id', component: SecondComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IAmHereComponent } from './iam-here/iam-here.component';
import { WhereYouAtComponent } from './where-you-at/where-you-at.component';

const routes: Routes = 
[
  {path: '', component: IAmHereComponent},
  {path: 'where', component: WhereYouAtComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

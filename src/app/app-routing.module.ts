import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BloglistComponent } from './blog/bloglist/bloglist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'bloglist', component: BloglistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

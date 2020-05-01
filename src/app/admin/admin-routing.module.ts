import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [{
  path: '',
  component: SettingComponent,
  canActivateChild: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

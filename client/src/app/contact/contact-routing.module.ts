import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
	{ path: "/", component: ContactComponent },
	{ path: "admin", component: AdminComponent},
	{ path: "**", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

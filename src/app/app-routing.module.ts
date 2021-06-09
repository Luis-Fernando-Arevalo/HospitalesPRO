import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Importacion del modulo de rutas hijas de pages
import { PagesRoutingModule } from "./pages/pages.routing";
// Importacion del modulo de rutas hijas de auth
import { AuthRoutingModule } from "./auth/auth.routing";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

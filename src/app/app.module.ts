import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { PagesModule } from "./pages/pages.module";
import { AuthModule } from "./auth/auth.module";

import { AppComponent } from "./app.component";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";

@NgModule({
  declarations: [AppComponent, NopagefoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Componentes
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";

// Modulos
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../components/components.module";
import { AccountSettingComponent } from "./account-setting/account-setting.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
  ],
})
export class PagesModule {}

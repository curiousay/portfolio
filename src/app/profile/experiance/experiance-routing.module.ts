import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExperianceComponent } from "./experiance.component";

const experianceRoutes: Routes = [
    {
        path: '', component: ExperianceComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(experianceRoutes)],
    exports:[RouterModule]
})
export class ExperianceRoutingModule {

}
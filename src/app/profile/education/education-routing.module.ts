import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EducationComponent } from "./education.component";

const educationRoutes: Routes = [
    {
        path: '', component: EducationComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(educationRoutes)],
    exports:[RouterModule]
})

export class EducationRoutingModule  {}
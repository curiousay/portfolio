import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectsComponent } from "./projects.component";

const projectRoutes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(projectRoutes)],
    exports:[RouterModule]
})
export class ProjectsRouingModule {}
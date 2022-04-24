import { NgModule } from "@angular/core";
import { ProjectsRouingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";

@NgModule({
    imports:[ProjectsRouingModule],
    declarations:[ProjectsComponent]
})
export class ProjectsModule {

}
import { NgModule } from "@angular/core";
import { EducationRoutingModule } from "./education-routing.module";
import { EducationComponent } from "./education.component";

@NgModule({
    imports: [EducationRoutingModule],
    declarations: [EducationComponent]
})

export class EducationModule {}
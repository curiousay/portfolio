import { NgModule } from "@angular/core";
import { ExperianceRoutingModule } from "./experiance-routing.module";
import { ExperianceComponent } from "./experiance.component";

@NgModule({
    imports: [ExperianceRoutingModule],
    declarations: [ExperianceComponent]
})
export class ExperianceModule {}
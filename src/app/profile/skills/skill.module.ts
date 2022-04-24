import { NgModule } from "@angular/core";
import { SkillRoutingModule } from "./skill-routing.module";
import { SkillComponent } from "./skill.component";

@NgModule({
    imports:[SkillRoutingModule],
    declarations:[SkillComponent]
})
export class SkillModule {}
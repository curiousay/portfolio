import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./about-me.component";

const aboutMeRoutes: Route[] = [{
path:'', component: AboutMeComponent
}];

@NgModule({
    imports: [RouterModule.forChild(aboutMeRoutes)],
    exports: [RouterModule]
})

export class AboutMeRoutingMoudle {
}


import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { IntroComponent } from "./intro.component";

const introRoutes: Route[] = [
    {
        path:'', component: IntroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(introRoutes)],
    exports: [RouterModule]
})

export class IntroRoutingModule {

}
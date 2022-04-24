import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
    {
        path:'',
        component: ProfileComponent,
        children: [
            {
                path: '', 
                redirectTo: 'intro', 
                pathMatch: 'full'
            },
            {
                path: 'intro',
                pathMatch: '',
                loadChildren: () => import('./intro/intro.module').then(mod => mod.IntroModule)
            },
            {
                path: 'aboutMe',
                loadChildren: () => import('./aboutMe/about-me.module').then(mod => mod.AboutMeModule)
            },
            {
                path: 'education',
                loadChildren: () => import('./education/education.module').then(mod => mod.EducationModule)
            },
            {
                path: 'experiance',
                loadChildren: () => import('./experiance/experiance.module').then(mod => mod.ExperianceModule)
            },
            {
                path: 'projects',
                loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule {

}
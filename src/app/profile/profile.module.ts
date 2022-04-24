import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { ProfileService } from "./profile.service";

@NgModule({
    imports: [
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [ProfileService],
    exports: [],
    entryComponents: []
})
export class ProfileModule {

}
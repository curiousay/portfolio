import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
    constructor (
        private spinner: NgxSpinnerService
    ) {

    }
    public ngOnInit(): void {
        this.loadSpinner();
    }
    private loadSpinner(){
        this.spinner.show();
        setTimeout(() => {this.spinner.hide}, 2000)
    }
    public ngOnDestroy(): void {
        
    }
}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    dropdownVisible: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    showDropdown(): void {
        this.dropdownVisible = true;
    }

    hideDropdown(): void {
        this.dropdownVisible = false;
    }
}

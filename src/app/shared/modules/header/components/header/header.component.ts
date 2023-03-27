import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { currentUserSelector } from 'src/app/auth/store/selectors';
import { ICurrentUser } from 'src/app/shared/types/current_user.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    currentUser$: Observable<ICurrentUser | null>;
    dropdownVisible: boolean = false;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.initializeValues();
    }

    initializeValues(): void {
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }

    showDropdown(): void {
        this.dropdownVisible = true;
    }

    hideDropdown(): void {
        this.dropdownVisible = false;
    }
}

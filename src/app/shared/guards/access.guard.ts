import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { LocalStorageService } from 'src/app/shared/services/local_storage.service';

@Injectable({
    providedIn: 'root',
})
export class AccessGuard implements CanActivate {
    constructor(
        private router: Router,
        private localSrorageService: LocalStorageService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (!this.localSrorageService.get('accessToken')) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}

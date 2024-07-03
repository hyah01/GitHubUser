import { Injectable, afterNextRender } from "@angular/core";
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http'

import { Observable, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = "This is for Authorization"; 
        const authreq = req.clone({
            setHeaders: { Authorization: `${token}`}
        });

        return next.handle(authreq)
    }
}
import { HttpInterceptorFn } from "@angular/common/http"
import { ToastService } from "./toast.service";
import { inject } from "@angular/core";
import { catchError } from "rxjs";

export const errorInterceptor : HttpInterceptorFn = (req, next) => {
    const toast = inject(ToastService);
    return next(req).pipe(  
        catchError((error) => {
            let message = error.message || 'Something went wrong';
            if (error.status === 0) {
                message = `Error ${error.status}: ${error.statusText}` || 'Unable to connect to the server. Please check your internet connection.';
            }else if(error.status === 401){
                message = 'Unauthorized access. Please login again';
            } else if (error.status === 403) {
                message = 'Access denied.';
            } else if (error.status === 404) {
                message = 'Resource not found.';
            } else if (error.status >= 500) {
                message = 'Server error. Please try later.';
            }
            toast.showToast({ message: message, type: 'error' });
            throw error;
        })
    );
}
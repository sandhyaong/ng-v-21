import { Injectable, signal } from "@angular/core";
import { sign } from "crypto";

export type toastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  type: toastType;
  message: string;
  duration?: number; // duration in milliseconds
}
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast = signal<Toast | null>(null);

  showToast(toast: Toast) {
    this.toast.set(toast);
    if (toast.duration) {
      setTimeout(() => this.clearToast(), toast.duration);
    }
  }
    clearToast() {  
    this.toast.set(null);
  }
}

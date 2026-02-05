import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, PLATFORM_ID, signal,  } from "@angular/core";

export type User = {
    name: string;
};
@Injectable({
    providedIn: 'root'
})
export class AuthService {

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

    private http = inject(HttpClient);

// State
   user = signal<User | null>(null);
   isLoggedIn = computed(() => !!this.user());
 // ACTIONS
    login(username: string) {
         this.user.set({ name: username });
    }
    logout() {
        this.user.set(null);
    }
  // PERSISTENCE (SSR SAFE)
  constructor() {
    if (this.isBrowser) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        this.user.set(JSON.parse(savedUser));
      }

      effect(() => {
        const u = this.user();
        if (u) {
          localStorage.setItem('user', JSON.stringify(u));
        } else {
          localStorage.removeItem('user');
        }
      });
    }
  }
}
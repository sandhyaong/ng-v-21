import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal,  } from "@angular/core";

export type User = {
    name: string;
};
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);

   user = signal<User | null>(null);
//    isLoggedIn = signal<boolean>(false);
//     login(name: string) {
//         return this.http.post<User>('/api/login', { name }).subscribe({
//             next: (user) => {
//                 this.user.set(user);
//                 this.isLoggedIn.set(true);
//             },
//             error: () => {
//                 this.user.set(null);
//                 this.isLoggedIn.set(false);
//             }
//         });
//     }
isLoggedIn = computed(() => !!this.user());
    login(username: string) {
         this.user.set({ name: username });
    }
    logout() {
        this.user.set(null);
    }

}
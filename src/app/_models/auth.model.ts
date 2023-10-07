export class AuthModel {
    email:string;
    password:string;
}

export class LoginResponse {
    token?: string;
    error?: string;
}
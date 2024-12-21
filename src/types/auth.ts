export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
  }
  
  export interface RegisterData {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    dateOfBirth?: string;
    gender?: string;
    confirmPassword?: string,
  }
  
  export interface AuthResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
  }
  
  export interface User {
    id: string;
    email: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    profileImage?: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
  }
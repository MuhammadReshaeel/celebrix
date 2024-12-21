import api from './axios';
import { LoginCredentials, RegisterData, AuthResponse } from '../../types/auth';

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      this.setTokens(response.data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>('/auth/register', data);
      this.setTokens(response.data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      await api.post('/auth/logout', { refreshToken });
      this.clearTokens();
    } catch (error) {
      this.clearTokens();
      throw this.handleError(error);
    }
  }

  async forgotPassword(email: string): Promise<void> {
    try {
      await api.post('/auth/forgot-password', { email });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    try {
      await api.post('/auth/reset-password', { token, newPassword });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async verifyEmail(token: string): Promise<void> {
    try {
      await api.post('/auth/verify-email', { token });
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async refreshToken(): Promise<AuthResponse> {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await api.post<AuthResponse>('/auth/refresh-token', {
        refreshToken,
      });
      this.setTokens(response.data);
      return response.data;
    } catch (error) {
      this.clearTokens();
      throw this.handleError(error);
    }
  }

  private setTokens(data: AuthResponse): void {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
  }

  private clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  private handleError(error: any): Error {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(error.message || 'An error occurred');
    }
  }
}

export default new AuthService();
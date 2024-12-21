import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, LoginCredentials, RegisterData } from '../types/auth';
import AuthService from '../services/api/auth.service';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      login: async (credentials) => {
        set({ loading: true, error: null });
        try {
          const response = await AuthService.login(credentials);
          set({ user: response.user });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      register: async (data) => {
        set({ loading: true, error: null });
        try {
          const response = await AuthService.register(data);
          set({ user: response.user });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      logout: async () => {
        set({ loading: true, error: null });
        try {
          await AuthService.logout();
          set({ user: null });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
);
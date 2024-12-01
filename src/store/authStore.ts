import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface User {
  id: string;
  email: string;
  username?: string;
  fullName?: string;
}

interface RegisterData {
  fullName?: string;
  username?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (identifier: string, password: string, rememberMe?: boolean) => Promise<void>;
  register: (email: string, password: string, data?: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
}

// interface AuthState {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
//   login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
//   register: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// Helper functions for local storage (mock DB)
const loadUsers = () =>
  JSON.parse(localStorage.getItem('mockAuthUsers') || '{}') as Record<string, string>;

const saveUser = (email: string, password: string) => {
  const users = loadUsers();
  users[email] = password;
  localStorage.setItem('mockAuthUsers', JSON.stringify(users));
};

const validateUser = (email: string, password: string) =>
  loadUsers()[email] === password;

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      login: async (email, password, rememberMe = false) => {
        set({ loading: true, error: null });
        try {
          if (!validateUser(email, password)) {
            throw new Error('Invalid credentials');
          }
          set({ user: { id: Date.now().toString(), email } });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      register: async (email, password, data?: RegisterData) => {
        set({ loading: true, error: null });
        try {
          if (loadUsers()[email]) {
            throw new Error('User already exists');
          }
          saveUser(email, password);
          set({ user: { id: Date.now().toString(), email } });
        } catch (error) {
          set({ error: (error as Error).message });
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      logout: async () => {
        set({ user: null });
      },
    
    }),
    {
      name: 'auth-storage', // Key for Zustand persistence
    }
  )
);

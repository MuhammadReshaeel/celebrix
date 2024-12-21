import { useState } from 'react';
import AuthService from '../services/api/auth.service';

export const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const resetPassword = async (token: string, newPassword: string) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      await AuthService.resetPassword(token, newPassword);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    resetPassword,
    loading,
    error,
    success,
    clearError,
  };
};
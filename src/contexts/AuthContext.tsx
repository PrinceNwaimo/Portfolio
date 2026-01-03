import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Profile } from '@/types/types';

interface User {
  id: string;
  email: string;
}

export async function getProfile(): Promise<Profile | null> {
  // Portfolio website doesn't use authentication
  return null;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signInWithUsername: (username: string, password: string) => Promise<{ error: Error | null }>;
  signUpWithUsername: (username: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>(null);
  const [profile] = useState<Profile | null>(null);
  const [loading] = useState(false);

  const refreshProfile = async () => {
    // Portfolio website doesn't use authentication
  };

  const signInWithUsername = async (_username: string) => {
    // Portfolio website doesn't use authentication
    return { error: new Error('Authentication not implemented') };
  };

  const signUpWithUsername = async (_username: string) => {
    // Portfolio website doesn't use authentication
    return { error: new Error('Authentication not implemented') };
  };

  const signOut = async () => {
    // Portfolio website doesn't use authentication
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signInWithUsername, signUpWithUsername, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
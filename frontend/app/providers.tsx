/**
 * Auto-generated JSDoc for providers.tsx
 * This helps maintain code documentation standards.
 */
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StacksAuthProvider } from '../contexts/StacksAuthContext';
import { ProfileProvider } from '../contexts/ProfileContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StacksAuthProvider>
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          {children}
        </ProfileProvider>
      </QueryClientProvider>
    </StacksAuthProvider>
  );
}

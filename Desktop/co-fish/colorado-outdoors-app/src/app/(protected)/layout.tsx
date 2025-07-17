import { ReactNode } from 'react'
import { AuthenticatedShell } from '@/components/authenticated-shell'

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <AuthenticatedShell>
      {children}
    </AuthenticatedShell>
  )
}
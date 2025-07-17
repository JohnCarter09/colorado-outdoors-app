'use client'

import { ReactNode, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header-protected'
import { FullPageLoading } from '@/components/loading-spinner'

interface AuthenticatedShellProps {
  children: ReactNode
}

export function AuthenticatedShell({ children }: AuthenticatedShellProps) {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in')
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return <FullPageLoading text="Loading..." />
  }

  if (!isSignedIn) {
    return <FullPageLoading text="Redirecting to sign in..." />
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
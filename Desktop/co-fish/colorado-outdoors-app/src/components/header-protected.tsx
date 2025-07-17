'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Bell, Menu, RefreshCw } from 'lucide-react'
import { useState } from 'react'

const pageNames: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/map': 'Interactive Maps',
  '/stocking-reports': 'Trout Stocking Reports',
  '/conditions': 'Water Conditions',
  '/hunting': 'Hunting Information',
  '/events': 'Outdoor Events',
  '/favorites': 'Favorite Locations',
  '/profile': 'Profile Settings',
  '/preferences': 'Preferences'
}

export function Header() {
  const pathname = usePathname()
  const { user } = useUser()
  const [isRefreshing, setIsRefreshing] = useState(false)

  const currentPageName = pageNames[pathname] || 'Colorado Outdoors'

  const handleRefresh = async () => {
    setIsRefreshing(true)
    // Simulate refresh - in real app this would trigger data refetch
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsRefreshing(false)
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Page title and breadcrumb */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {currentPageName}
            </h1>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm text-gray-500">Colorado Outdoors</span>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-700">{currentPageName}</span>
            </div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search locations, species, or data..."
              className="pl-10 pr-4"
            />
          </div>
        </div>

        {/* Right side - Actions and user */}
        <div className="flex items-center space-x-4">
          {/* Refresh button */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>

          {/* User info and avatar */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8"
                }
              }}
              showName={false}
            />
          </div>
        </div>
      </div>

      {/* Mobile search - shown on smaller screens */}
      <div className="md:hidden mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search locations, species, or data..."
            className="pl-10 pr-4"
          />
        </div>
      </div>
    </header>
  )
}
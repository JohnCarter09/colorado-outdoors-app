'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { 
  Mountain, 
  LayoutDashboard, 
  Map, 
  Fish,
  Droplets, 
  Target, 
  Calendar,
  Heart,
  User,
  Settings
} from 'lucide-react'

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: 'Overview and quick stats'
  },
  {
    name: 'Maps',
    href: '/map',
    icon: Map,
    description: 'Interactive outdoor maps'
  },
  {
    name: 'Stocking Reports',
    href: '/stocking-reports',
    icon: Fish,
    description: 'Trout stocking data',
    badge: 'New'
  },
  {
    name: 'Water Conditions',
    href: '/conditions',
    icon: Droplets,
    description: 'Current fishing conditions'
  },
  {
    name: 'Hunting',
    href: '/hunting',
    icon: Target,
    description: 'Seasons and regulations'
  },
  {
    name: 'Events',
    href: '/events',
    icon: Calendar,
    description: 'Outdoor events & workshops'
  },
  {
    name: 'Favorites',
    href: '/favorites',
    icon: Heart,
    description: 'Saved locations'
  }
]

const accountNavigation = [
  {
    name: 'Profile',
    href: '/profile',
    icon: User,
    description: 'Account settings'
  },
  {
    name: 'Preferences',
    href: '/preferences',
    icon: Settings,
    description: 'Notification settings'
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 px-4 mb-6">
          <Mountain className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-lg font-bold text-gray-900">Colorado Outdoors</span>
        </div>

        <Separator className="mx-4 mb-6" />

        {/* Main Navigation */}
        <nav className="flex-1 px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start h-auto p-3 mb-1",
                    isActive 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className={cn(
                      "text-xs mt-1",
                      isActive ? "text-green-100" : "text-gray-500"
                    )}>
                      {item.description}
                    </p>
                  </div>
                </Button>
              </Link>
            )
          })}
        </nav>

        <Separator className="mx-4 my-6" />

        {/* Account Navigation */}
        <nav className="px-4 space-y-1 pb-6">
          <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Account
          </p>
          {accountNavigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start h-auto p-3 mb-1",
                    isActive 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <span className="text-sm font-medium">{item.name}</span>
                    <p className={cn(
                      "text-xs mt-1",
                      isActive ? "text-green-100" : "text-gray-500"
                    )}>
                      {item.description}
                    </p>
                  </div>
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
import { redirect } from 'next/navigation'

export default function OnboardingPage() {
  // Simple redirect to dashboard for now
  redirect('/dashboard')
}
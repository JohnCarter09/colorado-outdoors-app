import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-green-600">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to Colorado Outdoors</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your ultimate guide to fishing, hunting, and outdoor adventures in Colorado.
            Get real-time updates on stocking reports, conditions, and more.
          </p>
          
          <SignedOut>
            <div className="space-y-4">
              <p className="text-lg">Sign up to access your personalized outdoor dashboard!</p>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="space-y-4">
              <p className="text-lg">Welcome back! Ready for your next adventure?</p>
              <Link 
                href="/dashboard" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          </SignedIn>
        </div>
      </main>
    </div>
  );
}

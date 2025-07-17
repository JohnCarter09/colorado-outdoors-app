import type { Metadata } from "next";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colorado Outdoors",
  description: "Your outdoor adventure dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-900">Colorado Outdoors</h1>
              <div className="flex items-center gap-4">
                <SignedOut>
                  <Link href="/sign-in">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
                  </Link>
                  <Link href="/sign-up">
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">Sign Up</button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

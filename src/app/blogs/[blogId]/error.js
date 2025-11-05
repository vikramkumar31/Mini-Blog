"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error caught by error.js:", error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700 font-medium">Error Details:</p>
          <p className="text-red-600 text-sm mt-1">{error.message}</p>
        </div>

        <p className="text-gray-600 mb-8">
          We encountered an unexpected error while loading this blog post. This might happen when you try to access a blog post with an invalid ID (greater than 5).
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Try Again
          </button>
          
          <Link 
            href="/blogs"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
          >
            Back to Blog List
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            If this problem persists, please{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <div className="space-y-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold">Wanna try it?</h2>
      <Button
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors w-60"
        onClick={() => window.location.href = '/api/download'}
      >
        Download Telescope (Mac Only)
      </Button>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Use command+L to summon Telescope from anywhere!
      </p>
    </div>
  );
}

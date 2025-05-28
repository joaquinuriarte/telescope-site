import SignUp from "./sign-up";
import AnimatedTagline from "@/components/AnimatedTagline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 max-w-3xl mx-auto text-center">
      <main className="flex flex-col gap-12 w-full">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Telescope</h1>
          <AnimatedTagline />
        </div>
        
        <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop
            playsInline
            controls
            preload="auto"
            src="/video.mp4"
          />
        </div>
        
        <SignUp />
      </main>
      
      <footer className="mt-20 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Telescope. All rights reserved.
      </footer>
    </div>
  );
}

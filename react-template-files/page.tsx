// app/page.tsx
// Main page component for the portfolio website
export default function Home() {
  return (
    // Main container with responsive padding and max-width
    <main className="min-h-screen p-4 flex flex-col items-center max-w-4xl mx-auto">
      {/* Hero section with name and profession (make sure to use &apos; for any ' */}
      <h1 className="text-4xl font-bold mt-8">Hi, I&apos;m [Your Name]</h1>
      <p className="mt-4 text-xl text-center">
        I am a [Your Profession]. Welcome to my portfolio!
      </p>

      {/* Projects section with a grid of project cards */}
      <section className="mt-10 w-full border-t border-gray-300 pt-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {/* Grid container for project cards with consistent spacing */}
        <div className="grid gap-6">
          {/* Individual project card with hover effects */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              {/* Project title */}
              <h3 className="text-xl font-medium text-gray-900 mb-2">Project Title</h3>
              {/* Project description */}
              <p className="text-gray-600 mb-4">Short description of the project and its key features.</p>
              {/* Technology stack tags with different colors for visual distinction */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tailwind CSS</span>
              </div>
              {/* Project links with hover effects */}
              <div className="flex gap-4">
                <a href="https://github.com" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
                <a href="https://github.com" className="text-gray-600 hover:text-gray-800 font-medium">GitHub →</a>
              </div>
            </div>
          </div>
          {/* Copt and Paste to add more project cards as needed */}
        </div>
      </section>

      {/* About Me section with personal information */}
      <section className="mt-10 w-full border-t border-gray-300 pt-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>A brief bio about you, your skills, and interests.</p>
      </section>

      {/* Contact section with email link */}
      <section className="mt-10 w-full border-t border-gray-300 pt-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          Reach me at{' '}
          <a className="text-blue-500 hover:underline" href="mailto:email@example.com">
            email@example.com
          </a>
        </p>
      </section>
    </main>
  )
}

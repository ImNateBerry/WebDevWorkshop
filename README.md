# Next.js Portfolio Workshop

Welcome to the interactive workshop! Today we'll cover the basics of HTML, how to host a simple HTML page, and dive into creating a portfolio using Next.js. You'll learn how to set up a Next.js project on your computer, modify a starter portfolio template, and deploy your site on Vercel.

## Workshop Outline

1. **HTML Basics & Hosting**  
   - Quick overview of HTML structure, tags, and elements.
   - How you could host a plain HTML file (e.g., using GitHub Pages or Netlify).

2. **Setting Up Your Next.js Project**
   - **Install Node.js:**  
     Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - **Create a Next.js App:**  
     Open your terminal and run:  
     ```
     npx create-next-app@latest my-portfolio
     cd my-portfolio
     ```
   - **Choose the following options (should be defaults):**
        ```
          What is your project named? my-portfolio
          Would you like to use TypeScript? Yes
          Would you like to use ESLint? Yes
          Would you like to use Tailwind CSS? Yes
          Would you like your code inside a `src/` directory? No
          Would you like to use App Router? (recommended) Yes
          Would you like to use Turbopack for `next dev`?  Yes
          Would you like to customize the import alias (`@/*` by default)? No
        ```
   - **Get the Template Files:**  
     Replace the contents of the following files with the ones provided in this repo:
     - `app/page.tsx` (Main portfolio page)
     - `app/layout.tsx` (Pages structure)
   - **Run development server:**
        ```
        npm run dev
        ```


3. **Customizing the Portfolio**
   - Open `app/page.tsx` in your preferred IDE/Code Editor (VS Code, Curosr, etc).
     - Update the title, headings, and content to reflect your personal info.
     - Customize the sections: "About Me", "Projects", and "Contact".
   - Modify `classNames` to change colors, layout, or fonts using Tailwind CSS.
   - Modify layout.tsx metadata to make page title say [Your Name]'s Portfolio

4. **Deploying on Vercel**
   - **Sign Up / Log In to Vercel:**  
     Visit [Vercel.com](https://vercel.com/) and create an account if you don't have one.
    - **Install GitHub Desktop:**  
     Download and install GitHub Desktop from [Github](https://desktop.github.com/download/).
   - **Push to GitHub:**  
     Commit your changes and push your project to a GitHub repository.
   - **Deploy Your Project:**  
     In Vercel, import your repository. Vercel will automatically build and deploy your site.
   - **Once deployed, you'll receive a live URL to share your portfolio!**

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Docs](https://v2.tailwindcss.com/docs)
- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)

Enjoy the workshop and have fun creating your own portfolio!

# Next.js Portfolio Workshop Live Demo

Welcome to the interactive workshop! Today we'll dive into creating a portfolio using Next.js. You'll learn how to set up a Next.js project on your computer, modify a starter portfolio template, and deploy your site on Vercel.

## Workshop Demo

1. **Setting Up Your Next.js Project**
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
          Would you like to use ESLint? No
          Would you like to use Tailwind CSS? Yes
          Would you like your code inside a `src/` directory? No
          Would you like to use App Router? (recommended) Yes
          Would you like to use Turbopack for `next dev`?  Yes
          W/ould you like to customize the import alias (`@/*` by default)? No
        ```

2. **Customizing the Portfolio**
    - Open `app/page.tsx` in your preferred IDE/Code Editor (VS Code, Cursor, etc).
    - Get the Template Files:  
     Replace the contents of the following files with the ones provided in this repo:
        - `app/page.tsx` (Main portfolio page)
        - `app/layout.tsx` (Pages structure)
   - Run development server:
        ```
        npm run dev
        ```
   -Update the title, headings, and content to reflect your personal info.
      -Customize the sections: "About Me", "Projects", and "Contact".
   - Modify `classNames` to change colors, layout, or fonts using Tailwind CSS.
   - Modify layout.tsx metadata to make page title say [Your Name]'s Portfolio

3. **Deploying on Vercel**
   - **Install GitHub Desktop:**  
     Download and install GitHub Desktop from [Github](https://desktop.github.com/download/).
   - **Push to GitHub:**  
     - Open Github Desktop and sign in
     - Click File->Add Local Repository
     - Type a Commit summary and hit commit, then Publish at the top
   - **Sign Up / Log In to Vercel:**  
     Visit [Vercel.com](https://vercel.com/) and sign in with github.
   - **Deploy Your Project:**  
     Once in vercel do the following:
     - Under import repository click install
     - Import the my-portfolio repository
     - Click deploy!
   - **Once deployed, you'll receive a live URL to share your portfolio!**


## Learn more!
- Look over and try to implement the optional component that fetchs sample api data into your app somewhere
- [Full Fullstack Web Course Youtube](https://www.youtube.com/watch?v=ZxKM3DCV2kE&ab_channel=Mehul-Codedamn)
- [Vercel's Next.js Course](https://nextjs.org/learn)
- [Next.js data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
- [React Mobile App Tutorial](https://www.youtube.com/watch?v=f8Z9JyB2EIE&ab_channel=JavaScriptMastery)


## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Download Cursor](https://cursor.com)
- [Tailwind CSS Docs](https://v2.tailwindcss.com/docs)
- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)



Enjoy the workshop and have fun creating your own portfolio!

PORTFOLIO PAGE

Page that tells a little bit about myself, about technologies I use, my past working experiences, my projects and has my contact information.

FE website build in React. 
UseRef for navigating to content (with forwardRef) and useOnScreen hook for animation.
Using Tailwind for styling and creating custom components. 
Using Bootstrap for icons.
Logo.css and contact.css files are used only for animation.
Website is responsive and linked to targeted content.













1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p
/tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

 

3. tailwind.js

  export const tw = new Proxy(
  {},
  {
    get(_, el) {
      const El = el;
      return ([classString]) =>
        ({ children, className, ...props }) =>
          (
            <El {...props} className={`${classString} ${className}`}>
              {children}
            </El>
          );
    },
  }
);


3. ctrl + shift + p (workspace settings(JSON))

{
    "tailwindCSS.includeLanguages": {
      "typescript": "javascript", // if you are using typescript
      "typescriptreact": "javascript" // if you are using typescript with react
    },
    "editor.quickSuggestions": {
      "strings": true // forces VS Code to trigger completions when editing "string" content
    },
    "tailwindCSS.experimental.classRegex": [
      "tw`([^`]*)", // tw`...`
      "tw\\.[^`]+`([^`]*)`", // tw.xxx<xxx>`...`
      "tw\\(.*?\\).*?`([^`]*)" // tw(Component)<xxx>`...`
    ]
  }

4. npm i framer-motion

5. +git checkout -b test (za nov branch z imenom: test) 
MORAS POL NAZAJ ZAMENJAT +git checkout main

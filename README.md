# smarthire
Web application for job seekers


To run the app

npm create vite@latest ai-job-app --template react
cd ai-job-app
npm install axios react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev


TODO

Edit tailwind.config.js:

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};


In src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

// const production = {
//     url: 'https://mern-task-app-foodorderingfrontend.onrender.com',
//     api: 'https://mern-task-app-foodorderingfrontend-api.onrender.com'
//   };
//   const development = {
//     url: 'http://localhost:3000',
//     api: 'http://localhost:5000'
//   };
//   export const config = process.env.NODE_ENV === 'development' ? development : production;

const production = {
  url: 'https://mern-task-app-foodorderingfrontend1.onrender.com',
  api: 'https://resumebuilderapprender-api.onrender.com'
  //api: ''
};
const development = {
  url: 'http://localhost:3000',
  // api: 'http://localhost:8000'
  api: 'https://resumebuilderapprender-api.onrender.com'
};
export const config = process.env.NODE_ENV === 'development' ? development : production;


MONGO_URL no database used

npm run start 
nodemon index.js 
npm run project
I basically use split terminals with these commands. concurrently using the npm run project.

client side has bootstrap links in index.html. create react app used.
App.js has UserForm defined and components declared. 
client has userForm which handles state with movement mechanism for Education, Experience, Extras, PersonalDetails, Projects, Success and ResumeT to show and download resume in Frontend
form takes details and provide Resume in last. 
One resume is autocomplete. clicking Next Resume to download new resume
 

https://resumebuilderapprender-api.onrender.com
above is an api link for the server. It has middleware for saving resume.pdf. render doesn't save anything. change api: 'http://localhost:8000' in constants. to auto download resume.
jsPDF, html2canvas are used on the client side to download resumes manually.

middleware has . 
backend has two middlewares create-pdf(put data to pdfTemplate and save in server) and fetch-pdf (send pdf file)
client has constants.js for static render server, (render frontend), url for production
client also has constants.js for local system server, url for development

Notes : we can increase this app according to requirement. our server is static due to which lot of things are not done here. render is used here. I took a lot of time in vercel deployment but I had issues. i had difficulty in working with css in my projects.

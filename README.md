# Angular Task Manager App

This is a simple Angular 18 single-page application developed for the course **ITE-5425: Web Programming Frameworks** (Winter 2025). The app demonstrates routing, reactive forms, and HTTP API integration using standalone components in Angular 18.

## 🔗 GitHub Repository
[https://github.com/2025-Winter-ITE-5425-IRA/angular-assignment-ScottWei0428](https://github.com/2025-Winter-ITE-5425-IRA/angular-assignment-ScottWei0428)

## 📁 Project Structure
```
ANGULAR-TASK-APP/
├── src/
│   └── app/
│       ├── components/
│       │   ├── header/          # Navigation bar
│       │   ├── footer/          # Footer section
│       │   ├── home/            # Home page
│       │   ├── task/            # API Task list page
│       │   └── form/            # Feedback Form page
│       ├── services/
│       │   └── api.service.ts   # HTTP service to fetch tasks
│       ├── app.component.ts     # Root component
│       ├── app.routes.ts        # Application routes
│       └── app.config.ts        # Standalone config providers
├── index.html                   # Main entry HTML
├── main.ts                      # Bootstraps the app
└── styles.css                   # Global styles
```

## 🚀 Live Demo (Vercel)
_Deployment URL: To be added after deployment._

## 🧰 Tech Stack
- Angular 18 (Standalone Component Architecture)
- Angular Router
- Reactive Forms
- Angular HttpClient
- TypeScript & HTML/CSS

## 📌 Features
- **Home Page**: Introduction page with welcome message
- **Task Management Page**: Fetches data from a public API and allows task filtering, marking complete/undo, and deletion
- **Feedback Form Page**: Reactive form with validation for name, email, and message
- **Reusable Layout**: Header and Footer are persistent across all views

## 📡 API Used
Data fetched from:
[https://jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)

## 🧪 Run the App Locally
```bash
npm install
npm run start  # or ng serve
```
Visit `http://localhost:4200`

## 📦 Build for Production
```bash
ng build --configuration=production
```

## 📤 Deployment to Vercel (Coming Next)
You will deploy this app via [https://vercel.com](https://vercel.com). See below for the guide.

---

## ✍️ Author
**Scott Wei**  
[Humber College - Winter 2025]  
Course: ITE-5425 Web Programming Frameworks

---

> This project is part of an assignment submission. All logic is implemented using best practices for standalone Angular apps with full client-side routing and validation.



# **Web Project**

This project is a full-stack web application built with a React frontend and an Express backend. The app includes responsive layouts, dynamic components, and utilizes Git for version control. Below is a summary of the key features, components, and steps we implemented today.

---

## **Features**

### **Frontend**
- Built with **React** using Vite for a fast and modern development experience.
- Responsive **UserForm** and **StatusBox** components:
  - UserForm allows creating new users with dynamic validation.
  - StatusBox dynamically displays the form submission status (loading, success, error).
- **ColumnsLayout** component:
  - Reusable layout for dynamically creating column-based designs.
  - Supports responsive behavior (switches to a single-column layout on smaller screens).
- Modern, responsive CSS design:
  - Uses CSS Grid for layouts.
  - Styled with best practices for accessibility and consistency.
  - Root-level CSS variables for consistent theming.

### **Backend**
- Powered by **Express.js**.
- Includes RESTful API routes for creating and fetching users.
- Middleware for parsing JSON requests.
- Static file serving for the React build.

### **Deployment**
- GitHub repository setup:
  - Added a `.gitignore` file to ignore unnecessary files (e.g., `node_modules`).
  - Configured Git remotes for proper version control.
- ReadMe creation to document today's progress and features.

---

## **Project Setup**

### **Clone the Repository**
```bash
git clone https://github.com/michaelheinzman/Web-Project.git
cd Web-Project
```

### **Install Dependencies**
Install dependencies for both the frontend and backend:

1. **Frontend (React)**:
   ```bash
   cd client
   npm install
   ```

2. **Backend (Express)**:
   ```bash
   cd server
   npm install
   ```

### **Run the Project**

1. **Start the Backend**:
   ```bash
   cd server
   npm start
   ```

2. **Start the Frontend**:
   ```bash
   cd client
   npm run dev
   ```

The app will be available at `http://localhost:5173` for the frontend, and the API will run on `http://localhost:5000`.

---

## **Components**

### **1. UserForm**
- A form component that allows users to input their name and email.
- Features:
  - Client-side validation.
  - Submission feedback (loading, success, error).

### **2. StatusBox**
- Dynamically updates based on the form submission status:
  - **Loading**: Displays a spinner.
  - **Success**: Shows a success icon and message.
  - **Error**: Displays an error icon and message.

### **3. ColumnsLayout**
- A reusable component for dynamically generating column layouts.
- Features:
  - Takes a `columns` prop to determine the number of columns.
  - Fully responsive: switches to a single column on smaller screens.
  - Content is centered and constrained by a root-level `--main-content-width` variable.

---

## **Responsive Design**
- **Full Width Layout**: The background spans the entire width of the screen.
- **Content Width Restriction**: The layout's content never exceeds the `--main-content-width` variable for readability.
- **Media Queries**: Ensures mobile-friendly layouts by stacking components on smaller screens.

---

## **Project Structure**
```plaintext
Web Project/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── assets/        # Icons and images
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Helper functions and validation
│   │   ├── App.jsx        # Main app entry point
│   │   └── main.jsx       # Vite entry point
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── server/                # Express backend
│   ├── api/               # API routes
│   ├── dist/              # Build files for serving
│   ├── server.js          # Main backend server
│   └── package.json       # Backend dependencies
├── .gitignore             # Ignore unnecessary files in Git
└── README.md              # Documentation (this file)
```

---

## **What We Accomplished Today**

1. **Frontend Development**:
   - Created the `UserForm` component with real-time validation and submission handling.
   - Built the `StatusBox` component for dynamic status updates (loading, success, error).
   - Designed a responsive `ColumnsLayout` component for reusable grid-based layouts.
   - Used CSS Grid and Flexbox for modern, responsive designs.
   - Integrated root-level CSS variables for consistent theming (`--main-content-width`).

2. **Backend Setup**:
   - Built an Express.js server to handle API requests.
   - Configured RESTful routes for creating and retrieving users.

3. **GitHub Repository Setup**:
   - Initialized a local Git repository for the project.
   - Added a `.gitignore` file to exclude unnecessary files.
   - Connected the local repository to GitHub and pushed the code.

---

## **Future Enhancements**
- Add authentication and user management features.
- Integrate a database (e.g., MongoDB or PostgreSQL) for persistent data storage.
- Deploy the app to a cloud provider (e.g., Vercel for frontend, Heroku for backend).
- Expand the `StatusBox` to handle additional states and feedback types.

---

Feel free to contribute, fork, or provide feedback for this project. Let me know if you need further guidance! 🚀

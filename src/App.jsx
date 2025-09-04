import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <AuthProvider>
        <BlogProvider>
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <Outlet />
          </main>
        </BlogProvider>
      </AuthProvider>
      <Toaster
        position="bottom-center"
        toastOptions={{ className: "bg-secondary-800 text-secondary-100" }}
      />
    </div>
  );
}

export default App;

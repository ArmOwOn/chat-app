import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster
        toastOptions={{
          error: {
            style: {
              color: "#F77B7A",
              background: "#191E24",
            },
          },
        }}
      />
    </div>
  );
}

export default App;

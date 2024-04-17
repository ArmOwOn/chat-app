import { Route, Routes } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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

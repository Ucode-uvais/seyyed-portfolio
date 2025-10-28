import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Loader } from "./components/Loader";
import { usePageLoader } from "./hooks/usePageLoader";

function App() {
  const isLoading = usePageLoader(1500); // Minimum 1.5 seconds
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

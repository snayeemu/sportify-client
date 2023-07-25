import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="bg-slate-800 overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

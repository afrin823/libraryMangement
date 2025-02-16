import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider.jsx";
import "./config/languageConfigure/i18n.js";
import "./index.css";

// Lazy loading components
const Dashboard = lazy(() => import("./MainLayout/Dashboard.jsx"));
const MainLayout = lazy(() => import("./MainLayout/MainLayout.jsx"));
const Profile = lazy(() => import("./Page/Dashboard/Profile/Profile.jsx"));
const UserSetting = lazy(() => import("./Page/Dashboard/UserSetting/UserSetting.jsx"));
const About = lazy(() => import("./Page/Public/About/About.jsx"));
const BookDetails = lazy(() => import("./Page/Public/BookDetails/BookDetails.jsx"));
const Books = lazy(() => import("./Page/Public/Books/Books.jsx"));
const ContactForm = lazy(() => import("./Page/Public/Contact/ContactForm.jsx"));
const EventDetails = lazy(() => import("./Page/Public/EventDetails/EventDetails.jsx"));
const Gallery = lazy(() => import("./Page/Public/Gallery/Gallery.jsx"));
const GalleryBanner = lazy(() => import("./Page/Public/Gallery/GalleryBanner.jsx"));
const Home = lazy(() => import("./Page/Public/Home/Home.jsx"));
const Login = lazy(() => import("./Page/Public/Login/Login.jsx"));
const NoticeBoard = lazy(() => import("./Page/Public/NoticeBoard/NoticeBoard.jsx"));
const Register = lazy(() => import("./Page/Public/register/Register.jsx"));
const Rules = lazy(() => import("./Page/Public/Rules/Rules.jsx"));
const Scholarship = lazy(() => import("./Page/Public/Scholarship/Scholarship.jsx"));
const ScholarshipInformation = lazy(() => import("./Page/Public/Scholarship/ScholarshipInformation.jsx"));
const UserRoute = lazy(() => import("./PrivateRoute/UserRoute.jsx"));

const root = document.getElementById("root");
const queryClient = new QueryClient();

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="books" element={<Books />} />
              <Route path="details/:id" element={<BookDetails />} />
              <Route path="rules" element={<Rules />} />
              <Route path="notice" element={<NoticeBoard />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="scholarship" element={<Scholarship />} />
              <Route path="scholarship-information" element={<ScholarshipInformation />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="event-details/:id" element={<EventDetails />} />
              <Route path="/gallery-banner/:id" element={<GalleryBanner />} />
            </Route>

            <Route
              path="/dashboard"
              element={
                <UserRoute>
                  <Dashboard />
                </UserRoute>
              }
            >
              <Route index element={<Profile />} />
              <Route path="user-setting" element={<UserSetting />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

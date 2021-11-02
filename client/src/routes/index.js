import React from "react";
import { Redirect } from "react-router-dom";
const Authentication = React.lazy(() => import("../pages/Authentication"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Home = React.lazy(() => import("../pages/Home"));
const Messages = React.lazy(() => import("../pages/Messages"));
const Bookmarks = React.lazy(() => import("../pages/Bookmarks"));
const Profile = React.lazy(() => import("../pages/Profile"));
const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: Authentication,
    meta: { auth: false },
  },
  {
    path: "/signin",
    exact: true,
    component: SignIn,
    meta: { auth: false },
  },
  {
    path: "/signup",
    exact: true,
    component: SignUp,
    meta: { auth: false },
  },
  {
    path: "/not-found",
    exact: true,
    component: NotFound,
    meta: { auth: false },
  },
];

const authProtectedRoutes = [
  {
    path: "/home",
    exact: true,
    component: Home,
    meta: { auth: true },
  },
  {
    path: "/messages",
    exact: true,
    component: Messages,
    meta: { auth: true },
  },
  {
    path: "/bookmarks",
    exact: true,
    component: Bookmarks,
    meta: { auth: true },
  },
  {
    path: "/profile",
    exact: true,
    component: Profile,
    meta: { auth: true },
  },
];

export { authProtectedRoutes, publicRoutes };

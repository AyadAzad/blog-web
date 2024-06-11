import { generatePath, useNavigate, Params } from "react-router-dom";
import { Containers, RouteConfig, RouteName } from "./interfaces";
import HomePage from "../../Components/homePage/HomePage";
import Blog from "../../Components/Blogs/Blog";
import AboutUs from "../../Components/AboutUs/AboutUs";
import ContactUs from "../../Components/ContactUs/ContactUs";
import BlogContent from "../../Components/BlogPost/BlogContent";
import PrivacyPolice from "../../Components/privacyPolice/PrivacyPolice";
import AyadAzad from "../../Components/author/AyadAzad";
import AlexandraRybinskaya from "../../Components/author/AlexandraRybinskaya";
import JennyWilson from "../../Components/author/JennyWilson";
import LeslieAlexander from "../../Components/author/LeslieAlexander";
import Python from "../../Components/BlogCatagory/Python.tsx";
import JavaScript from "../../Components/BlogCatagory/JavaScript.tsx";
import React from "../../Components/BlogCatagory/React.tsx";
import Podcast from "../../Components/BlogCatagory/Podcast.tsx";

export const containerPaths: { [key in Containers]: string } = {
  [RouteName.Home]: "/home",
  [RouteName.Blog]: "/blog",
  [RouteName.AboutUs]: "/aboutus",
  [RouteName.ContactUs]: "/contactus",
  [RouteName.BlogContent]: "/blog/:path",
  [RouteName.PrivacyPolice]: "/privacyPolice",
  [RouteName.AyadAzad]: "/AyadAzad",
  [RouteName.AlexandraRybinskaya]: "/AlexandraRybinskaya",
  [RouteName.JennyWilson]: "/JennyWilson",
  [RouteName.LeslieAlexander]: "/LeslieAlexander",
  [RouteName.Python]: "/Python",
  [RouteName.Javascript]: "/Javascript",
  [RouteName.React]: "/React",
  [RouteName.Podcast]: "/Python",
};

const routes: Record<RouteName, RouteConfig> = {
  [RouteName.Home]: {
    label: "Home",
    key: RouteName.Home,
    path: "/home",
    component: HomePage,
    showInMenu: true,
  },
  [RouteName.Blog]: {
    label: "Blog",
    path: "/blog",
    key: RouteName.Blog,
    component: Blog,
    showInMenu: true,
  },
  [RouteName.AboutUs]: {
    label: "About Us",
    path: "/aboutus",
    key: RouteName.AboutUs,
    component: AboutUs,
    showInMenu: true,
  },
  [RouteName.ContactUs]: {
    label: "Contact Us",
    path: "/contactus",
    key: RouteName.ContactUs,
    component: ContactUs,
    showInMenu: true,
  },
  [RouteName.BlogContent]: {
    label: "BlogContent",
    path: "/blog/:path",
    key: RouteName.BlogContent,
    component: BlogContent,
  },
  [RouteName.PrivacyPolice]: {
    label: "Privacy Police",
    path: "/privacyPolice",
    key: RouteName.PrivacyPolice,
    component: PrivacyPolice,
    showInFooter: true,
  },
  [RouteName.AyadAzad]: {
    label: "Ayad Azad",
    path: "/AyadAzad",
    key: RouteName.AyadAzad,
    component: AyadAzad,
    isAuthor: true,
  },
  [RouteName.AlexandraRybinskaya]: {
    label: "Alexa Rybinskay",
    path: "/AlexandraRybinskaya",
    key: RouteName.AlexandraRybinskaya,
    component: AlexandraRybinskaya,
    isAuthor: true,
  },
  [RouteName.JennyWilson]: {
    label: "Jenny Wilson",
    path: "/JennyWilson",
    key: RouteName.JennyWilson,
    component: JennyWilson,
    isAuthor: true,
  },
  [RouteName.LeslieAlexander]: {
    label: "Leslie Alexander",
    path: "/LeslieAlexander",
    key: RouteName.LeslieAlexander,
    component: LeslieAlexander,
    isAuthor: true,
  },
  [RouteName.Python]: {
    label: "Python",
    path: "/python",
    key: RouteName.Python,
    component: Python,
    showInChooseCategory: true,
  },
  [RouteName.Javascript]: {
    label: "Javascript",
    path: "/javascript",
    key: RouteName.Javascript,
    component: JavaScript,
    showInChooseCategory: true,
  },
  [RouteName.React]: {
    label: "React",
    path: "/react",
    key: RouteName.React,
    component: React,
    showInChooseCategory: true,
  },
  [RouteName.Podcast]: {
    label: "Podcast",
    path: "/podcast",
    key: RouteName.Podcast,
    component: Podcast,
    showInChooseCategory: true,
  },
};

export const allRoutes = Object.values(routes);

export const showInMenuRoutes = allRoutes.filter((route) => route.showInMenu);

export const footerRoutes = allRoutes.filter(
  (route) => route.showInMenu || route.showInFooter
);

export const authors = allRoutes.filter((route) => route.isAuthor);

export const chooseCategory = allRoutes.filter(
  (route) => route.showInChooseCategory
);

export function useGotoRoute(
  name: RouteName
): (params?: Params<string>) => void {
  const navigate = useNavigate();
  const route = routes[name];
  return function gotoRoute(params) {
    const path = generatePath(route.path, params);
    navigate(path);
  };
}

export function generateRoutePath({
  name,
  params,
}: {
  name: RouteName;
  params?: Params<string>;
}): string {
  const route = routes[name];
  return generatePath(route.path, params);
}

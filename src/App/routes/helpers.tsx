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
import Business from "../../Components/BlogCatagory/Business";
import Economy from "../../Components/BlogCatagory/Economy";
import Startup from "../../Components/BlogCatagory/Startup";
import Technology from "../../Components/BlogCatagory/Technology";

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
  [RouteName.Business]: "/Business",
  [RouteName.Economy]: "/Business",
  [RouteName.Startup]: "/Business",
  [RouteName.Technology]: "/Business",
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
  [RouteName.Business]: {
    label: "Business",
    path: "/business",
    key: RouteName.Business,
    component: Business,
    showInChooseCategory: true,
  },
  [RouteName.Economy]: {
    label: "Economy",
    path: "/economy",
    key: RouteName.Economy,
    component: Economy,
    showInChooseCategory: true,
  },
  [RouteName.Startup]: {
    label: "Startup",
    path: "/startup",
    key: RouteName.Startup,
    component: Startup,
    showInChooseCategory: true,
  },
  [RouteName.Technology]: {
    label: "Technology",
    path: "/technology",
    key: RouteName.Technology,
    component: Technology,
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

import { ComponentType } from "react";

export interface RouteConfig {
  label: string;
  path: string;
  key: RouteName;
  component: ComponentType;
  showInMenu?: boolean;
  showInFooter?: boolean;
  isAuthor?: boolean;
  showInChooseCategory?: boolean;
}

export enum RouteName {
  Home = "Home",
  Blog = "Blog",
  AboutUs = "AboutUs",
  ContactUs = "ContactUs",
  BlogContent = "BlogContent",
  PrivacyPolice = "PrivacyPolice",
  AyadAzad = "AyadAzad",
  AlexandraRybinskaya = "AlexandraRybinskaya",
  JennyWilson = "JennyWilson",
  LeslieAlexander = "LeslieAlexander",
  Business = "Business",
  Economy = "Economy",
  Startup = "Startup",
  Technology = "Technology",
}

export type Containers =
  | RouteName.Home
  | RouteName.Blog
  | RouteName.AboutUs
  | RouteName.ContactUs
  | RouteName.BlogContent
  | RouteName.PrivacyPolice
  | RouteName.AyadAzad
  | RouteName.AlexandraRybinskaya
  | RouteName.JennyWilson
  | RouteName.LeslieAlexander
  | RouteName.Business
  | RouteName.Economy
  | RouteName.Startup
  | RouteName.Technology;

import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { History } from "./components/pages/History";
import { Pastors } from "./components/pages/Pastors";
import { Ministries } from "./components/pages/Ministries";
import { Meetings } from "./components/pages/Meetings";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "history", Component: History },
      { path: "pastors", Component: Pastors },
      { path: "ministries", Component: Ministries },
      { path: "meetings", Component: Meetings },
      { path: "contact", Component: Contact },
    ],
  },
]);

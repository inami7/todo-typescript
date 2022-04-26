import { Home } from "../components/pages/home/Home";
import { Todo } from "../components/pages/todo/Todo";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/todo",
    exact: false,
    children: <Todo />
  }
];

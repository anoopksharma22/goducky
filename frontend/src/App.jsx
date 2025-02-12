import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Articles from "./pages/Articles.jsx";
import HowTo from "./pages/HowTo.jsx";
import CodeEditor from "./pages/CodeEditor.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />}/>
          <Route path="/articles" element={<Articles />}/>
          <Route path="/how-to" element={<HowTo />}/>
          <Route path="/code-editor" element={<CodeEditor />}/>
          <Route path="*" element={<PageNotFound />}/>
      </Route>
  )
);
const App = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
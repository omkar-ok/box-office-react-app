
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

import Starred from "./Components/Pages/Starred";
import Home from "./Components/Pages/Home";
import Show from "./Components/Pages/Show";
import Header from './Components/Common/Header'
import { GlobalTheme } from "./theme";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme childern={
        <>
        <Router>
          <Header title={"Box Office"} />
          <Routes>
            <Route exact path="/" element={<Home />}>
              {" "}
            </Route>

            <Route exact path="/starred" element={<Starred />}>
              {" "}
            </Route>

            <Route exact path="/show/:id" element={<Show />}>

            </Route>

            <Route path="*" element={<h1> 404 Page not found </h1>}>
              {" "}
            </Route>
          </Routes>
        </Router>
        </>
      } >
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;

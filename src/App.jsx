
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Show from "./Components/Pages/Show";
import Header from './Components/Common/Header'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header title={"Box Office"} />
        <Routes>
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>

          <Route exact path="/about" element={<About />}>
            {" "}
          </Route>

          <Route exact path="/show/:id" element={<Show />}>

          </Route>

          <Route path="*" element={<h1> 404 Page not found </h1>}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

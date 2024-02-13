import "./App.scss";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Settings from "./pages/Settings";

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <div className="App">
            <header className="header">
              <ul>
                <li>
                  <Link to="/">profile</Link>
                </li>
                <li>
                  <Link to="/account">account</Link>
                </li>
              </ul>
            </header>
            <Outlet />
          </div>
        }
      >
        <Route path="/" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;

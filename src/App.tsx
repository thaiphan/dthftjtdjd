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
                  <Link to="/settings">settings</Link>
                </li>
                <li>
                  <Link to="/settings/account">account</Link>
                </li>
              </ul>
            </header>
            <Outlet />
          </div>
        }
      >
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/account" element={<Account />} />
      </Route>
    </Routes>
  );
};

interface AppProps {
  basename?: string;
}

function App(props: AppProps) {
  return (
    <BrowserRouter basename={props.basename}>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;

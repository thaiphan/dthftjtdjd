import "./App.css";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter basename="settings">
      <Routes>
        <Route
          element={
            <>
              <header>
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
            </>
          }
        >
          <Route
            path="/"
            element={
              <div className="App">
                <h1>profile</h1>
              </div>
            }
          />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

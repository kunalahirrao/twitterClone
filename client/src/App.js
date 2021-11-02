// import axios from "axios";
// import Home from "./Components/Home/Home";
// import Navigationbar from "./Components/Navbar";
// import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
// http://localhost:3002/hello
import { Suspense } from "react";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import routeGuard from "./routes/route-guard";
import { history } from "./util/history";
import { authProtectedRoutes, publicRoutes } from "./routes";
import NonAuthLayout from "./layout/NonAuthLayout";
import AuthLayout from "./layout/NonAuthLayout";
import ErrorBoundary from "./layout/ErrorBoundry";
import AppLoader from "./layout/AppLoader";
const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  return (
    <GuardedRoute
      {...rest}
      render={(props) => {
        if (isAuthProtected) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        } else {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
      }}
    />
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<AppLoader />}>
            <GuardProvider guards={[routeGuard]}>
              <Router history={history}>
                <Switch>
                  {/* public route render */}
                  {publicRoutes.map((route, idx) => (
                    <AppRoute
                      path={route.path}
                      layout={NonAuthLayout}
                      component={route.component}
                      key={idx}
                      isAuthProtected={false}
                      {...route}
                    />
                  ))}
                  {/* authorised route render */}
                  {authProtectedRoutes.map((route, idx) => (
                    <AppRoute
                      path={route.path}
                      layout={AuthLayout}
                      component={route.component}
                      key={idx}
                      isAuthProtected={true}
                      {...route}
                    />
                  ))}
                </Switch>
              </Router>
            </GuardProvider>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;

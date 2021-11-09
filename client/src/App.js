import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes";
import NonAuthLayout from "./layout/NonAuthLayout";
import AppLoader from "./layout/AppLoader";
import AuthLayout from "./layout/AuthLayout";
const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthProtected) {
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
        <React.Fragment>
          <Suspense fallback={<AppLoader />}>
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
          </Suspense>
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;

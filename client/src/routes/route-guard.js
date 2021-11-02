const routeGuard = async (to, from, next) => {
  const userData = true;
  if (userData) {
    next();
  } else {
    next.redirect("/");
  }
};

export default routeGuard;

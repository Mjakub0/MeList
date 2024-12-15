module.exports = (requiredRole) => {
    return (req, res, next) => {
      const userRole = req.headers["x-user-role"]; // Predpokladáme, že role je v hlavičke požiadavky
      if (userRole === requiredRole || userRole === "Admin") {
        next();
      } else {
        res.status(403).json({
          error: "Forbidden: You do not have access to this resource",
          uuAppErrorMap: {},
        });
      }
    };
  };
  

  


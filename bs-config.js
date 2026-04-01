module.exports = {
  server: "docs",
  files: "docs",
  middleware: [
    function (req, res, next) {
      if (req.url !== "/" && /^[^.]+$/.test(req.url)) {
        req.url = req.url + ".html";
      }
      next();
    },
  ],
};

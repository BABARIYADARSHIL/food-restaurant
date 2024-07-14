const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Set custom routes
const rules = auth.rewriter({
  users: 660, // Only authenticated users can access the users endpoint
});

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);
server.listen(3002, () => {
  console.log("JSON Server is running on port 3001");
});

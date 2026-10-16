
const http = require("node:http");

function getAppStatus() {
  return {
    status: "healthy",
    application: "CI/CD Automation Platform"
  };
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(getAppStatus()));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});

module.exports = { getAppStatus };


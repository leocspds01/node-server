const http = require("http");
const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
    const tarea = [
        {
            id:1,
            description: "ir al gym",
            completed: false,
        },
        {
            id:2,
            description: "ir al parque",
            completed: false,
        },
        {
            id:3,
            description: "hacer el almuerzo",
            completed: true,
        },
    ];
    if (req.method === "GET" && req.url === "/tarea") {
        res.statusCode = 200;
        res.end(JSON.stringify(tarea));
    } else {
        res.statusCode = 404;
        res.end("Opcion no encontrada");
    }
});

server.listen(port, host, () => {
    console.log (`servidor encendido en http://localhost:${port}`);
})
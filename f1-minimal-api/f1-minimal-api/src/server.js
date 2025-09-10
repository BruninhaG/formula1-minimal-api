import Fastify from "fastify";
import driversRoutes from "./routes/drivers.js";
import teamsRoutes from "./routes/teams.js";

const fastify = Fastify({ logger: true });

// Rotas
fastify.register(driversRoutes, { prefix: "/drivers" });
fastify.register(teamsRoutes, { prefix: "/teams" });

// Iniciar servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("🚀 Servidor rodando em http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

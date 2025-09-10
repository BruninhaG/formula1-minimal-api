export default async function driversRoutes(fastify, options) {
  let drivers = [
    { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 2, name: "Max Verstappen", team: "Red Bull" },
  ];

  // Listar todos
  fastify.get("/", async () => drivers);

  // Buscar por ID
  fastify.get("/:id", async (req, reply) => {
    const driver = drivers.find(d => d.id === Number(req.params.id));
    return driver || { message: "Piloto não encontrado" };
  });

  // Criar novo
  fastify.post("/", async (req, reply) => {
    const newDriver = { id: drivers.length + 1, ...req.body };
    drivers.push(newDriver);
    return newDriver;
  });

  // Atualizar
  fastify.put("/:id", async (req, reply) => {
    const idx = drivers.findIndex(d => d.id === Number(req.params.id));
    if (idx === -1) return { message: "Piloto não encontrado" };
    drivers[idx] = { ...drivers[idx], ...req.body };
    return drivers[idx];
  });

  // Deletar
  fastify.delete("/:id", async (req, reply) => {
    drivers = drivers.filter(d => d.id !== Number(req.params.id));
    return { message: "Piloto removido" };
  });
}

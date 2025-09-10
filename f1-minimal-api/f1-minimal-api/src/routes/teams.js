export default async function teamsRoutes(fastify, options) {
  let teams = [
    { id: 1, name: "Mercedes", country: "Germany" },
    { id: 2, name: "Red Bull Racing", country: "Austria" },
  ];

  fastify.get("/", async () => teams);
}

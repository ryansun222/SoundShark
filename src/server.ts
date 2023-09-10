import { Application } from "./deps.ts"
import router from "./routes.ts"

const app = new Application()
const PORT = 3000;

app.use(router.routes()); // Implement router
app.use(router.allowedMethods()); // Allow router HTTP methods

console.log(`Server listening on port ${PORT}`);
await app.listen({ port: PORT });

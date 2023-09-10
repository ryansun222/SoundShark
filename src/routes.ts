import { Router } from "./deps.ts"
import { addSound } from "./controllers/sounds.ts"
const router = new Router();

router.post("/api/sounds", addSound)
export default router;
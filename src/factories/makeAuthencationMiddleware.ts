import { AuthenticationMiddleware } from "../application/middleware/AuthenticationMiddleware";

export function makeAuthencationMiddleware() {
    return new AuthenticationMiddleware();
}

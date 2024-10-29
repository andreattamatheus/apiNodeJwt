import { SignInController } from "../application/controllers/SignInController";
import { makeSignInUseCase } from "./makeSignInUseCase";

export function makeSignInController() {
    const signInCase = makeSignInUseCase();

    return new SignInController(signInCase);
}

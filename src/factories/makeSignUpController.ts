import { SignUpController } from "../application/controllers/SignUpController";
import { makeSignUpUseCase } from "./makeSignUpUseCase";

export function makeSignUpController() {
    const signUpCase = makeSignUpUseCase();

    return new SignUpController(signUpCase);
}

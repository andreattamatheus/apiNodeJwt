import { IController, IResponse } from "../interfaces/IController";

export class ListLeadsController implements IController {
    async handle(): Promise<IResponse> {
        const leads = [
            {
                id: 1,
                name: "John Doe",
                email: "teste",
            },
            {
                id: 2,
                name: "Jane Doe",
                email: "teste",
            },
            {
                id: 3,
                name: "John Doe",
                email: "teste",
            },
        ];

        return {
            statusCode: 200,
            body: {
                leads: leads,
            },
        };
    }
}

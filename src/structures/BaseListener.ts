import { IListener } from "../../typings";
import { Unknown } from "./Unknown";

export class BaseListener implements IListener {
    public constructor(public readonly client: Unknown, public name: IListener["name"]) {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    public execute(...args: any): void {}
}

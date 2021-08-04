import { Unknown } from "./Unknown";
import { ICommandComponent } from "../../typings";
import { Message } from "discord.js";
export class BaseCommand implements ICommandComponent {
    public constructor(public client: Unknown, public meta: ICommandComponent["meta"]) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    public execute(message: Message, args: string[]): any {}
}

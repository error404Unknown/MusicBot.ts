"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteCommand = void 0;
const tslib_1 = require("tslib");
const BaseCommand_1 = require("../structures/BaseCommand");
const DefineCommand_1 = require("../utils/decorators/DefineCommand");
const createEmbed_1 = require("../utils/createEmbed");
const config_1 = require("../config");
let InviteCommand = class InviteCommand extends BaseCommand_1.BaseCommand {
    async execute(message) {
        message.channel.send(createEmbed_1.createEmbed("info")
            .addField("Discord bot invite link", `[Click here](${await this.client.generateInvite({ permissions: 53857345 })})`)).catch(e => this.client.logger.error("PLAY_CMD_ERR:", e));
    }
};
InviteCommand = tslib_1.__decorate([
    DefineCommand_1.DefineCommand({
        name: "invite",
        description: "Send the bot's invite link",
        usage: "{prefix}invite",
        disable: config_1.disableInviteCmd
    })
], InviteCommand);
exports.InviteCommand = InviteCommand;

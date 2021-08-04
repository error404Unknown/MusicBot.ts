"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpCommand = void 0;
const tslib_1 = require("tslib");
const BaseCommand_1 = require("../structures/BaseCommand");
const discord_js_1 = require("discord.js");
const DefineCommand_1 = require("../utils/decorators/DefineCommand");
const createEmbed_1 = require("../utils/createEmbed");
let HelpCommand = class HelpCommand extends BaseCommand_1.BaseCommand {
    execute(message, args) {
        var _a, _b, _c, _d, _e;
        const command = (_a = message.client.commands.get(args[0])) !== null && _a !== void 0 ? _a : message.client.commands.get(message.client.commands.aliases.get(args[0]));
        if (command && !command.meta.disable) {
            message.channel.send(new discord_js_1.MessageEmbed()
                .setTitle(`Information for the ${command.meta.name} command`)
                .setThumbnail("https://raw.githubusercontent.com/error404Unknown/MusicBot.ts/main/question_mark.png")
                .addFields({ name: "Name", value: `\`${command.meta.name}\``, inline: true }, { name: "Description", value: command.meta.description, inline: true }, { name: "Aliases", value: `${Number((_b = command.meta.aliases) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (_c = command.meta.aliases) === null || _c === void 0 ? void 0 : _c.map(c => `\`${c}\``).join(", ") : "None."}`, inline: true }, { name: "Usage", value: `\`${(_d = command.meta.usage) === null || _d === void 0 ? void 0 : _d.replace(/{prefix}/g, message.client.config.prefix)}\``, inline: false })
                .setColor("#00FF00")).catch(e => this.client.logger.error("HELP_CMD_ERR:", e));
        }
        else {
            message.channel.send(createEmbed_1.createEmbed("info", message.client.commands.filter(cmd => !cmd.meta.disable && cmd.meta.name !== "eval").map(c => `\`${c.meta.name}\``).join(" "))
                .setTitle("Help Menu")
                .setColor("#00FF00")
                .setThumbnail((_e = message.client.user) === null || _e === void 0 ? void 0 : _e.displayAvatarURL())
                .setFooter(`Use ${message.client.config.prefix}help <command> to get more info on a specific command!`, "https://raw.githubusercontent.com/error404Unknown/MusicBot.ts/main/info.png")).catch(e => this.client.logger.error("HELP_CMD_ERR:", e));
        }
    }
};
HelpCommand = tslib_1.__decorate([
    DefineCommand_1.DefineCommand({
        aliases: ["commands", "cmds"],
        name: "help",
        description: "Shows the help menu",
        usage: "{prefix}help [command]"
    })
], HelpCommand);
exports.HelpCommand = HelpCommand;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidVoiceChannel = exports.isUserInTheVoiceChannel = exports.isSameVoiceChannel = exports.isMusicQueueExists = void 0;
const Inhibit_1 = require("./Inhibit");
const createEmbed_1 = require("../createEmbed");
function isMusicQueueExists() {
    return Inhibit_1.Inhibit(message => {
        var _a;
        if (((_a = message.guild) === null || _a === void 0 ? void 0 : _a.queue) === null)
            return message.channel.send(createEmbed_1.createEmbed("warn", "There is nothing playing."));
    });
}
exports.isMusicQueueExists = isMusicQueueExists;
function isSameVoiceChannel() {
    return Inhibit_1.Inhibit(message => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.me) === null || _b === void 0 ? void 0 : _b.voice.channel))
            return undefined;
        const botVoiceChannel = (_e = (_d = (_c = message.guild.queue) === null || _c === void 0 ? void 0 : _c.voiceChannel) === null || _d === void 0 ? void 0 : _d.id) !== null && _e !== void 0 ? _e : message.guild.me.voice.channel.id;
        if (((_g = (_f = message.member) === null || _f === void 0 ? void 0 : _f.voice.channel) === null || _g === void 0 ? void 0 : _g.id) !== botVoiceChannel) {
            return message.channel.send(createEmbed_1.createEmbed("warn", "You need to be in the same voice channel as mine"));
        }
    });
}
exports.isSameVoiceChannel = isSameVoiceChannel;
function isUserInTheVoiceChannel() {
    return Inhibit_1.Inhibit(message => {
        var _a;
        if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel)) {
            return message.channel.send(createEmbed_1.createEmbed("warn", "I'm sorry, but you need to be in a voice channel to do that"));
        }
    });
}
exports.isUserInTheVoiceChannel = isUserInTheVoiceChannel;
function isValidVoiceChannel() {
    return Inhibit_1.Inhibit(message => {
        var _a, _b, _c, _d;
        const voiceChannel = (_a = message.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
        if ((voiceChannel === null || voiceChannel === void 0 ? void 0 : voiceChannel.id) === ((_d = (_c = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.me) === null || _c === void 0 ? void 0 : _c.voice.channel) === null || _d === void 0 ? void 0 : _d.id))
            return undefined;
        if (!(voiceChannel === null || voiceChannel === void 0 ? void 0 : voiceChannel.joinable)) {
            return message.channel.send(createEmbed_1.createEmbed("error", "I'm sorry, but I can't connect to your voice channel, make sure I have the proper permissions!"));
        }
        if (!voiceChannel.speakable) {
            voiceChannel.leave();
            return message.channel.send(createEmbed_1.createEmbed("error", "I'm sorry, but I can't speak in this voice channel. make sure I have the proper permissions!"));
        }
    });
}
exports.isValidVoiceChannel = isValidVoiceChannel;

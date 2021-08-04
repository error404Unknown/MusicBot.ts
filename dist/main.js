"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const path_1 = require("path");
const discord_js_1 = require("discord.js");
const Logger_1 = require("./utils/Logger");
const config_1 = require("./config");
const log = Logger_1.createLogger(`shardingmanager`, config_1.debug);
const shardCount = config_1.totalShards === "auto" ? config_1.totalShards : Number(config_1.totalShards);
process.on("unhandledRejection", e => {
    log.error("UNHANDLED_REJECTION: ", e);
});
process.on("uncaughtException", e => {
    log.error("UNCAUGHT_EXCEPTION: ", e);
    log.warn("Uncaught Exception detected. Restarting...");
    process.exit(1);
});
const manager = new discord_js_1.ShardingManager(path_1.resolve(__dirname, "bot.js"), { totalShards: shardCount, mode: "process", respawn: true, token: process.env.SECRET_DISCORD_TOKEN });
manager.on("shardCreate", shard => {
    log.info(`[ShardManager] Shard #${shard.id} Spawned.`);
    shard.on("disconnect", () => {
        log.warn("SHARD_DISCONNECTED: ", { stack: `[ShardManager] Shard #${shard.id} Disconnected` });
    }).on("reconnecting", () => {
        log.info(`[ShardManager] Shard #${shard.id} Reconnected.`);
    });
    if (manager.shards.size === manager.totalShards)
        log.info("[ShardManager] All shards spawned successfully.");
}).spawn(shardCount).catch(e => log.error("SHARD_SPAWN_ERR: ", e));

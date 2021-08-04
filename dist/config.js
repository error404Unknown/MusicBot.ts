"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMaxResults = exports.disableSongSelection = exports.selectTimeout = exports.fetchAllUsers = exports.status = exports.debug = exports.disableInviteCmd = exports.cacheMaxLengthAllowed = exports.cacheYoutubeDownloads = exports.deleteQueueTimeout = exports.allowDuplicate = exports.maxVolume = exports.defaultVolume = exports.totalShards = exports.YouTubeDataRetrievingStrategy = exports.owners = exports.prefix = void 0;
// NOTE: Remove this when V5 is released. ///////////////////////////////////////////////////////////
if (!process.env.SECRET_DISCORD_TOKEN)
    process.env.SECRET_DISCORD_TOKEN = process.env.DISCORD_TOKEN;
if (!process.env.SECRET_YT_API_KEY)
    process.env.SECRET_YT_API_KEY = process.env.YT_API_KEY;
// //////////////////////////////////////////////////////////////////////////////////////////////////
exports.prefix = (_b = (_a = process.env.CONFIG_PREFIX) === null || _a === void 0 ? void 0 : _a.replace(/"/g, "")) !== null && _b !== void 0 ? _b : "Unknown "; // Temporary workaround for https://github.com/docker/compose/issues/6951
exports.owners = (_d = (_c = process.env.CONFIG_OWNERS) === null || _c === void 0 ? void 0 : _c.replace(/  +/g, " ").split(/,[ ]?/)) !== null && _d !== void 0 ? _d : [];
exports.YouTubeDataRetrievingStrategy = (_f = (_e = process.env.CONFIG_YOUTUBE_DATA_STRATEGY) === null || _e === void 0 ? void 0 : _e.toLowerCase()) !== null && _f !== void 0 ? _f : "scrape";
exports.totalShards = (_h = (_g = process.env.CONFIG_TOTALSHARDS) === null || _g === void 0 ? void 0 : _g.toLowerCase()) !== null && _h !== void 0 ? _h : "auto";
exports.defaultVolume = Number(process.env.CONFIG_DEFAULT_VOLUME) || 100;
exports.maxVolume = Number(process.env.CONFIG_MAX_VOLUME) || 100;
exports.allowDuplicate = ((_j = process.env.CONFIG_ALLOW_DUPLICATE) === null || _j === void 0 ? void 0 : _j.toLowerCase()) === "yes";
exports.deleteQueueTimeout = Number(process.env.CONFIG_DELETE_QUEUE_TIMEOUT) * 1000 || 180 * 1000;
exports.cacheYoutubeDownloads = ((_k = process.env.CONFIG_CACHE_YOUTUBE_DOWNLOADS) === null || _k === void 0 ? void 0 : _k.toLowerCase()) === "yes";
exports.cacheMaxLengthAllowed = Number(process.env.CONFIG_CACHE_MAX_LENGTH) || 5400;
exports.disableInviteCmd = ((_l = process.env.CONFIG_DISABLE_INVITE_CMD) === null || _l === void 0 ? void 0 : _l.toLowerCase()) === "yes";
exports.debug = ((_m = process.env.CONFIG_DEBUG) === null || _m === void 0 ? void 0 : _m.toLowerCase()) === "yes";
exports.status = {
    type: (_p = (_o = process.env.STATUS_TYPE) === null || _o === void 0 ? void 0 : _o.toUpperCase()) !== null && _p !== void 0 ? _p : "LISTENING",
    activity: (_q = process.env.CONFIG_STATUS_ACTIVITY) !== null && _q !== void 0 ? _q : "music on {guildsCount} guilds"
};
exports.fetchAllUsers = ((_r = process.env.CONFIG_FETCH_ALL_USERS) === null || _r === void 0 ? void 0 : _r.toLowerCase()) === "yes";
exports.selectTimeout = Number(process.env.CONFIG_SELECT_TIMEOUT) * 1000 || 20 * 1000;
exports.disableSongSelection = ((_s = process.env.CONFIG_DISABLE_SONG_SELECTION) === null || _s === void 0 ? void 0 : _s.toLowerCase()) === "yes";
exports.searchMaxResults = Number(process.env.CONFIG_SEARCH_MAX_RESULTS) || 12;
if (exports.searchMaxResults < 1)
    throw new Error("CONFIG_SEARCH_MAX_RESULTS cannot be smaller than 1");
if (exports.searchMaxResults > 12)
    throw new Error("CONFIG_SEARCH_MAX_RESULTS cannot be higher than 12");
if (exports.totalShards !== "auto" && isNaN(exports.totalShards))
    throw new Error("CONFIG_TOTALSHARDS must be a number or \"auto\"");
if (!["scrape", "api"].includes(exports.YouTubeDataRetrievingStrategy))
    throw new Error("CONFIG_YOUTUBE_DATA_STRATEGY must be scrape or api");

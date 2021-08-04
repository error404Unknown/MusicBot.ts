"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveYTPlaylistID = exports.resolveYTVideoID = exports.youtubeHostnames = void 0;
exports.youtubeHostnames = ["youtu.be", "youtube.com", "www.youtube.com", "music.youtube.com"];
function resolveYTVideoID(url) {
    const videoURL = new URL(url);
    if (exports.youtubeHostnames.includes(videoURL.hostname)) {
        if (videoURL.hostname === "youtu.be" && videoURL.pathname !== "/")
            return videoURL.pathname.replace("/", "");
        if (videoURL.pathname === "/watch")
            return videoURL.searchParams.get("v");
    }
    return null;
}
exports.resolveYTVideoID = resolveYTVideoID;
function resolveYTPlaylistID(url) {
    const videoURL = new URL(url);
    if (exports.youtubeHostnames.includes(videoURL.hostname) &&
        videoURL.hostname !== "youtu.be" &&
        videoURL.pathname === "/playlist")
        return videoURL.searchParams.get("list");
    return null;
}
exports.resolveYTPlaylistID = resolveYTPlaylistID;

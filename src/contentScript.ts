import { Action } from "./types";

const apt = document.location.href.split("/")[4];
const from = document.location.href;

const $video = document.getElementById(
  "player_Viblast_api"
) as HTMLVideoElement;

let manualPlaying = false;
let manualPausing = false;

$video.onpause = (...args) => {
  if (manualPausing) {
    return;
  }
  chrome.runtime.sendMessage({
    name: Action.pause,
    from,
    apt,
  });
};

$video.onplaying = (...args) => {
  if (manualPlaying) {
    return;
  }
  chrome.runtime.sendMessage({
    name: Action.play,
    from,
    apt,
    time: $video.currentTime + 2, //reconnection offset
  });
};

chrome.runtime.onMessage.addListener(async (request) => {
  const { name, time } = request;

  if (name === Action.play) {
    manualPlaying = true;
    $video.currentTime = time;
    await $video.play();
    manualPlaying = false;
  } else if (name === Action.pause) {
    manualPausing = true;
    await $video.pause();
    manualPausing = false;
  }

  return true;
});

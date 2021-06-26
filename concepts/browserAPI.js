/**
 * 1. Web Workers
 * 2. Geolocation
 * 3. Web sockets
 * 4. Web storage	(localStorage, sessionStorage)
 * 5. History
 * 6. Canvas
 * 7. Clipboard
 * 8. Web Speech API
 * 9. MediaDevices.getUserMedia
 */

//1. Web Worker
let worker = new Worker("demoscript.js");
worker.postMessage({ name: "abc", payload: 2 });
worker.onmessage((e) => console.log(e.data));

//2. Geolocation
navigator.geolocation.getCurrentPosition((position) => {
  console.log(latitude, position.coords.latitude);
  console.log(longitude, position.coords.longitude);
});

navigator.geolocation.watchPosition((position) => {
  console.log(latitude, position.coords.latitude);
  console.log(longitude, position.coords.longitude);
});

// 3. Web sockets

let socket = new WebSocket("socketdomain");
socket.onopen = () => {};
socket.onclose = () => {};
socket.onmessage = (data) => {
  console.log(data);
};

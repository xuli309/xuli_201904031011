

const mediaStreamContrains = window.constraints = {
    audio: false,
    video: true
};

const localVideo = document.querySelector('video');

function gotLocalMediaStream(mediaStream) {
    localVideo.srcObject = mediaStream;
}

function handleLocalMediaStreamError(err) {
    alert('navigator.getUserMedia error:', err);
}

navigator.mediaDevices.getUserMedia(mediaStreamContrains).then(
    gotLocalMediaStream
).catch(
    handleLocalMediaStreamError
)
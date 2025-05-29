<template>
    <div class="demo-bg">
        <section class="demo-card">
            <h2 class="demo-title">Interactive Demo</h2>
            <div class="demo-flex">
                <div class="video-container">
                    <video
                        ref="video"
                        autoplay
                        muted
                        playsinline
                        class="demo-video"
                    ></video>
                </div>
                <div class="demo-controls">
                    <button class="cta-button" @click="startRecording">
                        Ask
                    </button>
                    <p class="demo-response">{{ response }}</p>
                    <audio
                        v-if="audioUrl"
                        :src="audioUrl"
                        id="audio-player"
                        controls
                        autoplay
                        class="demo-audio"
                    ></audio>
                </div>
            </div>
            <p class="demo-tip">
                Show an object to your webcam and ask a question!
            </p>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const video = ref(null);
const response = ref("Waiting...");
const audioUrl = ref("");
const BASE_URL = "https://68948c0821e152893a48267106138e0f.serveo.net";

let mediaRecorder;
let audioChunks = [];

const getMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
    video.value.srcObject = stream;
};

const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = video.value.videoWidth;
    canvas.height = video.value.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video.value, 0, 0);
    return new Promise((resolve) => {
        canvas.toBlob(resolve, "image/png");
    });
};

const recordAudio = () =>
    new Promise((resolve) => {
        audioChunks = [];
        mediaRecorder = new MediaRecorder(video.value.srcObject);
        mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            resolve(audioBlob);
        };
        mediaRecorder.start();
        setTimeout(() => mediaRecorder.stop(), 4000); // 4 seconds of recording
    });

const startRecording = async () => {
    audioUrl.value = "";
    response.value = "Recording...";
    const audioBlob = await recordAudio();
    response.value = "Captured audio. Capturing image...";

    const imageBlob = await captureImage();

    const form = new FormData();
    form.append("image", imageBlob, "image.png");
    form.append("audio", audioBlob, "audio.webm");

    response.value = "Sending...";
    const res = await fetch(`${BASE_URL}/ask`, {
        method: "POST",
        body: form,
    });

    const data = await res.json();
    response.value = data.answer || data.error;
    console.log(data.audio_file);
    audioUrl.value = `${BASE_URL}/${data.audio_file}`;
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.play().catch((e) => console.warn("Autoplay prevented:", e));
};

onMounted(getMedia);
</script>

<style scoped>
.demo-bg {
    background: #f7f9fa;
    max-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5em 0;
}

.demo-card {
    background: #fff;
    border-radius: 1.5vh;
    box-shadow: 0 2px 16px rgba(79, 140, 255, 0.1);
    padding: 2.5em 2em 2em 2em;
    width: 90%;
    height: 70vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.demo-title {
    color: #4f8cff;
    font-size: 2rem;
    margin-bottom: 1.2em;
    font-weight: bold;
    text-align: center;
}

.demo-flex {
    display: flex;
    gap: 2.5em;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
}

.video-container {
    flex: 1 1 220px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.demo-video {
    max-height: 50vh;
    border-radius: 1vh;
    object-fit: cover;
    background: #e3f2fd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    border: 2px solid #4f8cff22;
}

.demo-controls {
    flex: 1 1 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

.cta-button {
    display: inline-block;
    background: #4f8cff;
    color: #fff;
    padding: 0.8em 2em;
    border-radius: 2em;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1em;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    margin-bottom: 0.5em;
    box-shadow: 0 2px 8px rgba(79, 140, 255, 0.08);
}
.cta-button:hover {
    background: #222;
    color: #fff;
}

.demo-response {
    font-size: 1.08em;
    color: #213547;
    min-height: 2.2em;
    margin: 0.5em 0 0.2em 0;
}

.demo-audio {
    margin-top: 0.5em;
    width: 100%;
    max-width: 260px;
}

.demo-tip {
    color: #4f8cff;
    margin-top: 2em;
    font-size: 1.08em;
    text-align: center;
}

@media (max-width: 700px) {
    .demo-flex {
        flex-direction: column;
        gap: 1.5em;
    }
    .demo-card {
        padding: 1.2em 0.5em;
    }
}
</style>

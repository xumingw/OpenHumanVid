<template>
    <div class="video-panel">
        <div 
            v-for="(video, index) in videos" 
            :key="index" 
            class="video-container"
            @mouseover="hoverVideo(index)"
            @mouseleave="leaveVideo(index)"
        >
            <video :src="video.src" controls></video>
            <div v-if="!video.isHovered" class="caption">{{ video.caption }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoPanel',
    data() {
        return {
            videos: [
                { src: 'video1.mp4', caption: 'Caption 1', isHovered: false },
                { src: 'video2.mp4', caption: 'Caption 2', isHovered: false },
                // Add more videos as needed
            ]
        };
    },
    methods: {
        hoverVideo(index) {
            this.videos[index].isHovered = true;
        },
        leaveVideo(index) {
            this.videos[index].isHovered = false;
        }
    }
};
</script>

<style scoped>
.video-panel {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.video-container {
    position: relative;
    width: 200px;
    height: 150px;
}

video {
    width: 100%;
    height: 100%;
}

.caption {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
}
</style>
@media (max-width: 768px) {
    .video-container {
        width: 100%;
    }
}
<template>
  <div class="audio-wrapper">
    <audio v-if="track?.url" ref="audio" controls>
      <source :src="track?.url" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Track } from "@/Types/Track";

export default defineComponent({
  name: "Audio",

  props: {
    track: {
      type: Object as PropType<Track>,
      required: true
    }
  },

  watch: {
    track() {
      (this.$refs["audio"] as HTMLAudioElement)?.load();
    }
  }
});
</script>

<style lang="scss">
.audio-wrapper {
  background: red;
}

</style>
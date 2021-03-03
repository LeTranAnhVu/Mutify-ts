<template>
  <ul v-if="tracks.length">
    <li v-for="track in tracks" :key="track.id" @click="changeTrack(track)">
      <p>{{ track.name }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Track } from "@/types/Track";
import { TrackActions, TrackMutations } from "@/store/track-store";

export default defineComponent({
  name: "Home",

  computed: {
    genres(): string[] {
      return this.$store.getters.getGenres;
    },

    tracks(): Track[] {
      console.log("get call here");
      return this.$store.getters.getTracks || [];
    }
  },
  methods: {
    changeTrack(track: Track) {
      console.log("call");
      this.$store.commit(TrackMutations.UPSERT_CURRENT_TRACK, track);
    }
  },

  async mounted() {
    await this.$store.dispatch(TrackActions.Fetch);
  }
});
</script>

<style scoped></style>

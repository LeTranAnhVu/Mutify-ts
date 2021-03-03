import { ActionContext, Module } from "vuex";
import { Track } from "@/types/Track";
import { getAll } from "@/services/track-service";

interface TrackState {
  tracks: Track[];
  currentTrack: Track | null;
}

export enum TrackMutations {
  REPLACE = "REPLACE_TRACKS",
  UPSERT_CURRENT_TRACK = "UPSERT_CURRENT_TRACK"
}

export enum TrackActions {
  Fetch = "FetchTracks"
}

interface TrackGetters {
  getTracks: Track[];
  getTrackById: (id: number) => Track | null;
  getCurrentTrack: Track | null;
}

const genre: Module<TrackState, any> = {
  state: () => ({
    tracks: [],
    currentTrack: null
  }),
  mutations: {
    [TrackMutations.REPLACE]: (state, data: Track[]) => {
      state.tracks = data;
    },

    [TrackMutations.UPSERT_CURRENT_TRACK]: (state, data: Track) => {
      state.currentTrack = data;
    }
  },

  getters: {
    getTracks: state => {
      return state.tracks;
    },

    getCurrentTrack: state => {
      return state.currentTrack;
    }
  },
  actions: {
    async [TrackActions.Fetch](context: ActionContext<TrackState, TrackState>) {
      const tracks = await getAll();
      context.commit(TrackMutations.REPLACE, tracks);
    }
  }
};

export default genre;

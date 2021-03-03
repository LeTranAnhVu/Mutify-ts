import axios from "axios";
import { Track } from "@/types/Track";

const BASE_URL = process.env.VUE_APP_API_URL;

export async function getAll(): Promise<Track[]> {
  try {
    const res = await axios.get(BASE_URL + "/tracks");
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

const trackService = {
  getAll
};

export default trackService;

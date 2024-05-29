import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  loginDataState: null,
  setLoginDataState: (loginDataState: any) => set({ loginDataState }),
  //   setLoginDatastate: (loginDataState: SpotifyApi.UserProfileResponse | null) => set({ loginDataState }),
}));

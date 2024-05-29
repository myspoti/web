import { StoreApi, UseBoundStore, create } from "zustand";

interface userType {
  user: string | null;
  loginDataState: any | null;
  setLoginDataState: any | null;
}

const useUserStore = create<userType>((set) => ({
  user: null,
  loginDataState: null,
  setLoginDataState: (loginDataState: unknown) => set({ loginDataState }),
  //   setLoginDatastate: (loginDataState: SpotifyApi.UserProfileResponse | null) => set({ loginDataState }),
}));

export default useUserStore;

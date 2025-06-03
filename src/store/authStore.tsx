import { create } from "zustand";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  iniAuth: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoading: false,
  user: null,

  iniAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, isLoading: false });
    });
  },

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error registering:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;

"use client";

import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../../lib/setting";

export interface ISample {
  id: string;
  name: string;
  description: string;
}

interface IParams {
  id?: string;
  search?: string;
}

interface IState {
  samples: ISample[];
  sample: ISample;
  getAllSamples: (params: IParams) => void;
  addSample: (sample: ISample) => void;
  updateSample: (id: string, sample: ISample) => void;
  deleteSample: (id: string) => void;
}

export const useSampleStore = create<IState>((set) => ({
  samples: [],
  sample: null,
  getAllSamples: async (params: IParams) => {
    try {
      const response = await axios.get<ISample[]>(`${API_URL}/samples`);
      set({ samples: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  addSample: async (sample: ISample) => {
    try {
      await axios.post(`${API_URL}/samples`, sample);
      set((state) => ({ samples: [...state.samples, sample] }));
    } catch (error) {
      console.error("Error adding item:", error);
    }
  },
  updateSample: async (id: string, sample: ISample) => {
    try {
      await axios.put(`${API_URL}/samples/${id}`, sample);
      set((state) => ({
        samples: state.samples.map((item) => (item.id === id ? sample : item)),
      }));
    } catch (error) {
      console.error("Error updating item:", error);
    }
  },
  deleteSample: async (id: string) => {
    try {
      await axios.delete(`${API_URL}/samples/${id}`);
      set((state) => ({
        samples: state.samples.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  },
}));

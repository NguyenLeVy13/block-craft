"use client";

import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../../lib/setting";

export interface IPage {
  id: string;
  name: string;
  description: string;
  content?: string;
  path?: string;
  root?: string;
  createdBy?: string;
  createdDate?: string;
  updatedBy?: string;
  updatedDate?: string;
}

interface IParams {
  id?: string;
  search?: string;
}

interface IState {
  pages: IPage[];
  page: IPage;
  getAllPages: (params: IParams) => void;
  addPage: (page: IPage) => void;
  updatePage: (id: string, page: IPage) => void;
  deletePage: (id: string) => void;
}

export const usePageStore = create<IState>((set) => ({
  pages: [],
  page: null,
  getAllPages: async (params: IParams) => {
    try {
      const response = await axios.get<IPage[]>(`${API_URL}/pages`);
      set({ pages: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  addPage: async (page: IPage) => {
    try {
      await axios.post(`${API_URL}/pages`, page);
      set((state) => ({ pages: [...state.pages, page] }));
    } catch (error) {
      console.error("Error adding item:", error);
    }
  },
  updatePage: async (id: string, page: IPage) => {
    try {
      await axios.put(`${API_URL}/pages/${id}`, page);
      set((state) => ({
        pages: state.pages.map((item) => (item.id === id ? page : item)),
      }));
    } catch (error) {
      console.error("Error updating item:", error);
    }
  },
  deletePage: async (id: string) => {
    try {
      await axios.delete(`${API_URL}/pages/${id}`);
      set((state) => ({
        pages: state.pages.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  },
}));

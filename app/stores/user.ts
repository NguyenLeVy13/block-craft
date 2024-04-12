"use client";

import { create } from "zustand";
import axios from "axios";
import { API_URL } from "../../lib/setting";

export interface IUser {

}

interface IParams {
  id?: string;
  search?: string;
}

interface IState {
  users: IUser[];
  user: IUser;
  getAllUsers: (params: IParams) => void;
  addUser: (user: IUser) => void;
  updateUser: (id: string, user: IUser) => void;
  deleteUser: (id: string) => void;
}

export const useUserStore = create<IState>((set) => ({
  users: [],
  user: null,
  getAllUsers: async (params: IParams) => {
    try {
      const response = await axios.get<IUser[]>(`${API_URL}/users`);
      set({ users: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  addUser: async (user: IUser) => {
    try {
      await axios.post(`${API_URL}/users`, user);
      set((state) => ({ users: [...state.users, user] }));
    } catch (error) {
      console.error("Error adding item:", error);
    }
  },
  updateUser: async (id: string, user: IUser) => {
    try {
      await axios.put(`${API_URL}/users/${id}`, user);
      set((state) => ({
        users: state.users.map((item) => (item.id === id ? user : item)),
      }));
    } catch (error) {
      console.error("Error updating item:", error);
    }
  },
  deleteUser: async (id: string) => {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
      set((state) => ({
        users: state.users.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  },
}));

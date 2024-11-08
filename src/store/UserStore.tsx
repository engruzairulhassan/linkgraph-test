// src/stores/UserStore.ts
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { User } from "../types";

class UserStore {
  users: User[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    try {
      const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
      this.users = response.data;
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }
}

export const userStore = new UserStore();

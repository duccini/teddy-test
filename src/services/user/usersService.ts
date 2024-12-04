import { User } from "../../models/userModel";
import api from "../api";

export interface GetAllUsers {
  clients: User[];
  totalPages: number;
  currentPage: number;
}

async function getAllUsers(
  page: number,
  limit: number
): Promise<GetAllUsers | null> {
  try {
    const { data } = await api.get(`/users/?page=${page}&limit=${limit}`);
    const { clients, totalPages, currentPage } = data;

    // console.log(clients);

    return {
      clients,
      totalPages,
      currentPage,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function deleteUserById(id: number) {
  try {
    const data = await api.delete(`/users/${id}`);
    return null;
  } catch (error) {
    console.log(error);
  }
}

export const userService = {
  getAllUsers,
  deleteUserById,
};

import axios from "axios";

import {
  API_BASE_URL,
} from "../utils/constants";

const API = `${API_BASE_URL}/posts`;


// GET POSTS
export const getPosts = async (page = 1) => {
  return await axios.get(`${API}?page=${page}`);
};


// GET SINGLE POST
export const getSinglePost = async (id) => {
  return await axios.get(`${API}/${id}`);
};


// CREATE POST
export const createPost = async (data) => {
  return await axios.post(API, data);
};


// UPDATE POST
export const updatePost = async (id, data) => {
  return await axios.put(`${API}/${id}`, data);
};


// DELETE POST
export const deletePost = async (id) => {
  return await axios.delete(`${API}/${id}`);
};


// SEARCH POST
export const searchPosts = async (keyword) => {
  return await axios.get(`${API}/search?keyword=${keyword}`);
};
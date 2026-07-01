const axios = require("axios");

const BASE_URL = "http://localhost:5000/books";

// Get all books
const getAllBooks = async () => {
  const res = await axios.get(BASE_URL);
  console.log(res.data);
};

// Get by ISBN
const getBookByISBN = async (isbn) => {
  const res = await axios.get(`${BASE_URL}/isbn/${isbn}`);
  console.log(res.data);
};

// Get by Author
const getBooksByAuthor = async (author) => {
  const res = await axios.get(`${BASE_URL}/author/${author}`);
  console.log(res.data);
};

// Get by Title
const getBooksByTitle = async (title) => {
  const res = await axios.get(`${BASE_URL}/title/${title}`);
  console.log(res.data);
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};

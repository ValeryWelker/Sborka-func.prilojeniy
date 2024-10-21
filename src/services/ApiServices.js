import api from "./http";

const getShopItems = () => {
  return api.get("/shopItems");
};

const getShopItem = (id) => {
  return api.get(`/shopItems/${id}`);
};

const getTickets = (ticket) => {
  return api.get(`/tickets?title=${ticket}`);
};
const updateTicket = (id, data) => {
  return api.put(`/tickets/${id}`, data);
};
const deleteTickets = (id) => {
  return api.delete(`/tickets/${id}`);
};

const addOrders = (data) => {
  return api.post("/orders", { ...data, createdAt: new Date() });
};

const ApiService = {
  getShopItem,
  getShopItems,
  getTickets,
  addOrders,
  updateTicket,
  deleteTickets,
};

export default ApiService;

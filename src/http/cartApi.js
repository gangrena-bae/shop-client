import { $host } from "./index";

export const createOrder = async (order) => {
  const { data } = await $host.post("api/cart", order);
  return data;
};

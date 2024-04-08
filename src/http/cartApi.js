import { $host } from "./index";

export const createOrder = async (order) => {
  try {
    const { data } = await $host.post("api/cart", order);
    return { success: true, message: "Заказ успешно создан", data };
  } catch (error) {
    return {
      success: false,
      message: error.response.data.message || "Ошибка при создании заказа",
    };
  }
};

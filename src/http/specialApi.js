import { $host } from "./index";

export const createSpecial = async (order) => {
  const { data } = await $host.post("api/special", order);
  return data;
};

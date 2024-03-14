import { $authHost, $host } from "./index";

// Типы устройств
export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const deleteType = async (id) => {
  const { data } = await $authHost.delete(`api/type/${id}`);
  return data;
};

// Бренды устройств
export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

export const deleteBrand = async (id) => {
  const { data } = await $authHost.delete(`api/brand/${id}`);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

// Устройства
export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const fetchDevices = async (
  typeId,
  brandId,
  page,
  limit = 4,
  searchTerm = "",
  stock = true,
  description = ""
) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
      searchTerm,
      stock,
      description,
    },
  });
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};

export const deleteDevice = async (id) => {
  const { data } = await $authHost.delete(`api/device/${id}`);
  return data;
};

// Обновление цены устройства
export const updateDevicePrice = async (id, price) => {
  const { data } = await $authHost.put(`api/device/updatePrice/${id}`, {
    price,
  });
  return data;
};

// Обновление информации устройства
export const updateDeviceInfo = async (id, title, description) => {
  const { data } = await $authHost.put(`api/device/updateInfo/${id}`, {
    title,
    description,
  });
  return data;
};

// Обновление названия устройства
export const updateDeviceName = async (id, name) => {
  const { data } = await $authHost.put(`api/device/updateDeviceName/${id}`, {
    name,
  });
  return data;
};

// Обновление описания устройства
export const updateDeviceDescription = async (id, description) => {
  const { data } = await $authHost.put(
    `api/device/updateDeviceDescription/${id}`,
    { description }
  );
  return data;
};

// Обновление изображения устройства
export const updateDeviceImage = async (id, image) => {
  // Логика обновления изображения устройства
};

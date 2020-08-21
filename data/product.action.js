export const filter = (products, tag) => {
  return products.filter((item) => item.tags.includes(tag));
};

export const get = (products, id) => {
  return products.find((item) => item.id == id);
};

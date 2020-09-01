import { slugify } from './../util/format';

export const get = (brands, name) => {
  return brands.find((item) => slugify(item.brand) == name);
};

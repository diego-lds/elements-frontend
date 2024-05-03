export function buildUrlWithFilters(baseUrl, page, filters) {
  let url = `${baseUrl}/products?page=${page}`;
  const filterParams = new URLSearchParams();

  if (filters && Object.keys(filters).length > 0) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        filterParams.append(key, value);
      }
    });
    url += `&${filterParams.toString()}`;
  }

  return url;
}

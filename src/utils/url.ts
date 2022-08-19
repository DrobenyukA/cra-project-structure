export const parametrizeURL = <T extends object>(
  url: string,
  params: Record<keyof T, string | number | boolean>
) =>
  Object.keys(params).reduce((target, key) => {
    const name = `:${key}`;
    if (url.includes(name)) {
      return target.replace(name, `${params[key as keyof T]}`);
    }
    throw new Error(`There is no parameter :${key} in ${url}`);
  }, url);

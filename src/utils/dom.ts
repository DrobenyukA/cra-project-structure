export const toClassNames = <T extends unknown>(...names: T[]) =>
  names.filter((name) => typeof name === "string").join("");

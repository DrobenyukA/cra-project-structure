export const fakeRequest = <T extends unknown>(
  response: T,
  error?: string,
  delay = 1000
) =>
  new Promise<T>((res, rej) =>
    setTimeout(() => {
      if (error) {
        rej(new Error(error));
      } else {
        res(response);
      }
    }, delay)
  );

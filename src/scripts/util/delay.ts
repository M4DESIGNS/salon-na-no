// How to use
// await $delay(1000);
// => delay 1000 ms

// Composition API Methods
export const $delay = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};

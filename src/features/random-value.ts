// random-name.ts
export const randomName = () => {
  const names = ['penguin', 'whale', 'rhino', 'camel', 'hippo', 'cheetah', 'cat', 'dog'];
  return names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 100).toString();
};

export const randomEmail = (name?: string) => {
  if (name) return name + '@shinmini.com';

  const names = randomName();
  return names[Math.floor(Math.random() * names.length)] + '@shinmini.com';
};

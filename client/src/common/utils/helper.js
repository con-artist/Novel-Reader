export const sliceString = (text, length) =>
  text.length > length ? `${text.substring(0, length)}...` : text;

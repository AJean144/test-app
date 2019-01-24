import Color from 'color';

export const darken = (color, percentage) =>
  Color(color)
    .darken(percentage)
    .hsl()
    .string();

export const lighten = (color, percentage) =>
  Color(color)
    .lighten(percentage)
    .hsl()
    .string();

export const truncate = (width) =>
  `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: ${width};
  `;

export const capitalize = (str) => {
  if (str.includes(' ')) {
    return str.split(' ').map((word) => (
      word.charAt(0).toUpperCase() + word.slice(1)
    )).join(' ')
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getInitials = (str) => {
  if (str.includes(' ')) {
    return str.split(' ').map((word, i) => (
      word.charAt(0).toUpperCase()
    )).join('')
  }

  return str.charAt(0).toUpperCase();
};

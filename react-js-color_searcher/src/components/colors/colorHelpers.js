export function generateColor() {
  let color = "#";
  let str = "ABCDEF0123456789";
  for (let index = 0; index < 6; index++) {
    color += str[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const colorBoxArray = [
  { id: 0, color: generateColor(), blocked: false },
  { id: 1, color: generateColor(), blocked: false },
  { id: 2, color: generateColor(), blocked: false },
  { id: 3, color: generateColor(), blocked: false },
  { id: 4, color: generateColor(), blocked: false },
];

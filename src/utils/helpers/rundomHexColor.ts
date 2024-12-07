function getRandomBrightColor() {
  // Generate random values for RGB, ensuring at least one component is high (to keep the color bright)
  const r = Math.floor(Math.random() * 156) + 100; // Red: 100–255
  const g = Math.floor(Math.random() * 156) + 100; // Green: 100–255
  const b = Math.floor(Math.random() * 156) + 100; // Blue: 100–255

  // Convert to hex and pad with leading zeros if necessary
  const toHex = (num: number) => num.toString(16).padStart(2, '0');

  // Combine into a hex color string
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export { getRandomBrightColor };

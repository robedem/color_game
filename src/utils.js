// Utility function to generate a random hex color
export const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // Utility function to generate an array of 6 random colors
  export const generateColorOptions = () => {
    const colors = [];
    for (let i = 0; i < 6; i++) {
      colors.push(generateRandomColor());
    }
    return colors;
  }
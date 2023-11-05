function getElementWidth(content, padding, border) {
  const contentWidth = parseInt(content); // конвертуємо content у число
  const paddingWidth = parseInt(padding); // конвертуємо padding у число
  const borderWidth = parseInt(border); // конвертуємо border у число

  // Загальна ширина елемента з урахуванням box-sizing: border-box
  const totalWidth = contentWidth + paddingWidth + borderWidth;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));      // Повертає 74
console.log(getElementWidth("60px", "12px", "8.5px"));   // Повертає 101
console.log(getElementWidth("200px", "0px", "0px"));     // Повертає 200
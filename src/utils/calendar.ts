export function getMonthMatrix(year: number, month: number): Date[][] {
  const matrix: Date[][] = [];
  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = new Date(firstDayOfMonth);
  startDay.setDate(startDay.getDate() - startDay.getDay()); // Sunday start

  for (let week = 0; week < 5; week++) {
    const row: Date[] = [];
    for (let day = 0; day < 7; day++) {
      const date = new Date(startDay);
      date.setDate(startDay.getDate() + week * 7 + day);
      row.push(date);
    }
    matrix.push(row);
  }

  return matrix;
}

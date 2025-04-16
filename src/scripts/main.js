'use strict';

// write code here
const table = document.querySelector('table');

table.querySelectorAll('th').forEach((th, columnIndex) => {
  th.addEventListener('click', () => {
    const rows = Array.from(table.querySelector('tbody').rows);

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      const a = isNaN(cellA) ? cellA : Number(cellA);
      const b = isNaN(cellB) ? cellB : Number(cellB);

      return a > b ? 1 : -1;
    });

    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});

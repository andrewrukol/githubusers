export function getAmountOfPages(amountOfItems: number, itemsPerPage: number): number {
  return Math.ceil(amountOfItems / itemsPerPage);
}

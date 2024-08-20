export function getDaysLeft(expDate: string): string {
  const expirationDate = new Date(expDate);
  const today = new Date();
  const timeDiff = expirationDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysLeft > 0 ? `${daysLeft} days` : "Expired";
}
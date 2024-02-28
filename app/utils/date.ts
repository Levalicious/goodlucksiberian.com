export const formatDate = (date: string) => {
  return new Date(`${date} 12:00`).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

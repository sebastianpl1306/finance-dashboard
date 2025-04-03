export const FormatDate = (dateIso: string) => {
  return new Date(dateIso).toISOString().split("T")[0];
}
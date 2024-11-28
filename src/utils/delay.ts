export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const timeStringToMs = (timeString: string): number => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return (hours * 3600 + minutes * 60 + seconds) * 1000;
};

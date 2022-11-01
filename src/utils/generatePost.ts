
const getDayNumber = (): Number => {
  const today = new Date();
  const hexleStartDate = new Date("2022-03-26");
  return Math.floor((today.getTime() - hexleStartDate.getTime()) / (1000 * 3600 * 24));
}

export const generatePostBody = (): string => {
  const body = `Did you guess today's hex color code? Share how you did!\n Play here: https://hexle.codes`
  return body;
}

export const generatePostTitle = (): string => {
  const title = `Daily Hexle #${getDayNumber()} - ${new Date().toLocaleDateString()}`;
  return title;
}
export const myMessage: string[] = [
  "Think of your birthday date and month.",
  "Now multiply your month by 2.",
  "Then add 5 in the answer.",
  "Carry on, now multiply your answer by 5.",
  "Now add '0' at the last of your answer.",
  "At laast, add your birthday (Date) in the result.",
];

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function ordinalDate(data: string): string {
  const myDate = Number(data.slice(-2)) - 50;
  let finalDate: string = "";
  if (myDate === 1 || myDate === 21 || myDate === 31) {
    finalDate = `${myDate}st`;
  } else if (myDate === 2 || myDate === 22) {
    finalDate = `${myDate}nd`;
  } else if (myDate === 3 || myDate === 23) {
    finalDate = `${myDate}rd`;
  } else {
    finalDate = `${myDate}th`;
  }
  return finalDate;
}
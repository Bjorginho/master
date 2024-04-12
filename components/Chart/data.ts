export const data = [
  {
    label: "Communication",
    data: [
      ...Array.from({ length: 12 }, (_, index) => ({
        weekNumber: index + 1,
        score: randomFloatBetween1And5(),
      })),
    ],
  },
  {
    label: "Participation",
    data: [
      ...Array.from({ length: 12 }, (_, index) => ({
        weekNumber: index + 1,
        score: randomFloatBetween1And5(),
      })),
    ],
  },
  {
    label: "Collaboration",
    data: [
      ...Array.from({ length: 12 }, (_, index) => ({
        weekNumber: index + 1,
        score: randomFloatBetween1And5(),
      })),
    ],
  },
];

function randomFloatBetween1And5() {
  return Math.random() * 4 + 1;
}

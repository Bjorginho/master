import { GroupData } from "@/hooks/useGroup";
import {
  andreas,
  charles,
  emily,
  erna,
  frede,
  james,
  jessica,
  jonas,
  jonasHoff,
  joseph,
  karen,
  michael,
  robert,
  sarah,
} from "./members";
import {
  assignment1,
  assignment2,
  assignment3,
  assignment4,
  assignment5,
} from "./assignments";
import { peerReview1, peerReview2, peerReview5 } from "./peerReviews";
import { groupReview1, groupReview2 } from "./groupReviews";

export const it2810Mock: GroupData[] = [
  {
    id: "1",
    members: [frede, jonas, erna, jonasHoff, andreas],
    assignments: [assignment1, assignment2, assignment3],
    peerReviews: [peerReview1, peerReview2],
    groupReviews: [groupReview1, groupReview2],
    links: [
      { name: "GitLab", url: "https://www.about.gitlab.com/" },
      { name: "GitHub", url: "https://github.com/" },
      { name: "Discord", url: "https://discord.com/" },
      { name: "Teams", url: "https://www.microsoft.com/nb-no" },
    ],
  },
  {
    id: "2",
    members: [emily, michael, jessica, james],
    assignments: [assignment4],
    peerReviews: [peerReview1],
    groupReviews: [groupReview1, groupReview2],
  },
  {
    id: "3",
    members: [robert, sarah, charles, karen, joseph],
    assignments: [assignment5],
    peerReviews: [peerReview2, peerReview1],
    groupReviews: [groupReview1, groupReview2],
  },
];

export const tet4850Mock: GroupData[] = [
  {
    id: "19",
    members: [frede, erna, jessica, andreas],
    peerReviews: [peerReview1, peerReview2],
    assignments: [assignment1, assignment2, assignment3],
    groupReviews: [groupReview1],
  },
];

export const it1901Mock: GroupData[] = [
  {
    id: "1",
    members: [sarah, karen, jonas, frede, robert],
    peerReviews: [peerReview2, peerReview5],
    assignments: [assignment1, assignment2, assignment3],
    groupReviews: [groupReview1, groupReview2],
  },
  {
    id: "2",
    members: [james, jonasHoff, jonas, karen, robert],
    peerReviews: [peerReview1, peerReview2],
    assignments: [assignment5, peerReview1],
    groupReviews: [groupReview1, groupReview2],
  },
  {
    id: "3",
    members: [jessica, sarah, michael, emily, erna],
    peerReviews: [peerReview1, peerReview2],
    assignments: [assignment1, assignment2, assignment3],
    groupReviews: [groupReview1, groupReview2],
  },
];

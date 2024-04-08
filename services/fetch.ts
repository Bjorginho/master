export async function fetchAssignments(classId: string) {
  const response = await fetch(`/api/assignment/all?classId=${classId}`);
  return response.json();
}

export async function fetchAssignment(assignmentId: string) {
  const response = await fetch(`/api/assignment?id=${assignmentId}`);
  return response.json();
}

export const fetchAnnouncements = async (courseCode: string) => {
  const response = await fetch(`/api/announcements?courseId=${courseCode}`);
  return response.json();
};

export const fetchGroupContract = async (groupId: string) => {
  const response = await fetch(`/api/contract?groupId=${groupId}`);
  return response.json();
};

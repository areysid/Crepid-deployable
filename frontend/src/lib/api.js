export const uploadCSV = async (rosterFile, activitiesFile, skillFile) => {
  const formData = new FormData();
  formData.append("roster", rosterFile);
  formData.append("activities", activitiesFile);
  formData.append("skill_library", skillFile);

  const res = await fetch("http://localhost:8000/api/upload-csv", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to upload CSVs");

  return res.json();
};

export const uploadCSV = async (rosterFile, activitiesFile, skillFile) => {
  const formData = new FormData();
  formData.append("roster", rosterFile);
  formData.append("activities", activitiesFile);
  formData.append("skill_library", skillFile);

  // https://crepid-deployable-production.up.railway.app/api/upload-csv
  // http://localhost:8000/api/upload-csv
  // https://crepid-deployable.onrender.com/

  const res = await fetch("https://crepid-deployable.onrender.com/api/upload-csv", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to upload CSVs");

  return res.json();
};

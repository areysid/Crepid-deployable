// /lib/api.js

export const uploadCSV = async (rosterFile, activitiesFile, skillFile) => {
  try {
    const formData = new FormData();
    formData.append("roster", rosterFile);
    formData.append("activities", activitiesFile);
    formData.append("skill_library", skillFile);

    // Deployed backend URL
    const res = await fetch(
      "https://crepid-deployable.onrender.com/api/upload-csv",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to upload CSVs: ${errorText}`);
    }

    const data = await res.json();
    return data;

  } catch (err) {
    console.error("Upload error:", err);
    throw err;
  }
};

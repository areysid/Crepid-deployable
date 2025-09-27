"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { uploadCSV } from "@/lib/api";
import { useApp } from "@/contexts/AppContext";

const CSVUploader = () => {
  const { setDashboardData } = useApp();
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    const roster = e.target.roster.files[0];
    const activities = e.target.activities.files[0];
    const skill_library = e.target.skill_library.files[0];

    if (!roster || !activities || !skill_library) return alert("All files required!");

    try {
      setLoading(true);
      const data = await uploadCSV(roster, activities, skill_library);
      setDashboardData(data);
      alert("CSV files uploaded and processed successfully!");
    } catch (err) {
      console.error(err);
      alert("Error uploading files");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} className="space-y-4 bg-muted/10 p-6 rounded-lg shadow-md">
      <div>
        <label className="block mb-1 font-medium">Roster CSV</label>
        <input type="file" name="roster" accept=".csv" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Activities CSV</label>
        <input type="file" name="activities" accept=".csv" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Skill Library CSV</label>
        <input type="file" name="skill_library" accept=".csv" />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Upload & Process CSVs"}
      </Button>
    </form>
  );
};

export default CSVUploader;

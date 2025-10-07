import { useState } from "react";
import API from "../api/api";

export default function UploadCV() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    await API.post("/upload_cv", formData);
    setUploading(false);
    alert("CV uploaded successfully! You can now view job matches.");
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4">Upload Your CV</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="border p-2 w-full rounded"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 mt-4 rounded hover:bg-blue-700"
        >
          {uploading ? "Uploading..." : "Upload CV"}
        </button>
      </form>
    </div>
  );
}

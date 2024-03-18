import React from "react";

function OtherInfo({ formData, setFormData }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        document: {
          name: file.name,
          file: file,
        },
      });
    }
  };

  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="file"
        accept=".pdf,.doc,.docx,.png,"
        name="document"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default OtherInfo;

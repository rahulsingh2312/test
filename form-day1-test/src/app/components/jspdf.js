import React from "react";
import jsPDF from "jspdf";

const PDFGenerator = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add data to the PDF document
    doc.text(`displayName: ${data.displayName}`, 10, 10);
    doc.text(`fullName: ${data.fullName}`, 10, 20);
    doc.text(`workspaceName: ${data.workspaceName}`, 10, 30);
    doc.text(`workspaceUrl: ${data.workspaceUrl}`, 10, 40);

    // Add image to the PDF document
    const img = new Image();
    img.onload = function() {
      doc.addImage(this, 'PNG', 10, 50, 100, 100); // Change dimensions and position as needed
      doc.save("data.pdf");
    };
    img.src = data.imageURL;
  };

  return (
    <div>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default PDFGenerator;

import React from "react";
import jsPDF from "jspdf";

const PDFGenerator = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add header image
    const headerImg = new Image();
    headerImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR53Vpx6c2YTATPBQPNHQPirj3zaP3GJlBqM5qjt3o&s";
    doc.addImage(headerImg, 'PNG', 10, 10, 180, 40); // Adjust position and size as needed

    // Add data to the PDF document
    doc.text(`Email: ${data.displayName}`, doc.internal.pageSize.getWidth() / 2, 60, { align: 'center' });
    doc.text(`Full name: ${data.fullName}`, doc.internal.pageSize.getWidth() / 2, 70, { align: 'center' });
    doc.text(`Address: ${data.workspaceName}`, doc.internal.pageSize.getWidth() / 2, 80, { align: 'center' });
    doc.text(`Phone number : ${data.workspaceUrl}`, doc.internal.pageSize.getWidth() / 2, 90, { align: 'center' });

    // Add image to the PDF document
    const img = new Image();
    img.onload = function() {
      doc.addImage(this, 'PNG', doc.internal.pageSize.getWidth() / 2 - 50, 100, 100, 100); // Center horizontally
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

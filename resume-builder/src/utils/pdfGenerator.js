import html2pdf from 'html2pdf.js';

export const generatePDF = (elementId, fileName = 'resume.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id "${elementId}" not found`);
    return Promise.reject('Element not found');
  }

  const options = {
    margin: 0,
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  return html2pdf().set(options).from(element).save();
};

export const printResume = () => {
  window.print();
};

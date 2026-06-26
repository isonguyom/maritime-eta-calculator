import jsPDF from 'jspdf';

export type DownloadItem = {
  label: string;
  value: string | number;
};

type DownloadOptions = {
  title: string;
  filename?: string;
  items: DownloadItem[];
};

export function downloadSummary({ title, filename, items }: DownloadOptions) {
  const pdf = new jsPDF();

  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text(title, 20, 20);

  pdf.setFontSize(12);

  let y = 35;

  items.forEach(({ label, value }) => {
    // Label
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${label}: `, 20, y);

    // Value
    pdf.setFont('helvetica', 'normal');

    // Position value immediately after label
    const labelWidth = pdf.getTextWidth(`${label}: `);
    const gap = 2; // 3mm spacing

    pdf.text(String(value), 20 + labelWidth + gap, y);

    y += 10;
  });

  pdf.save(filename ?? `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
}

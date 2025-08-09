import { useState } from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeNew() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);
    const [pdfError, setPdfError] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function onDocumentLoadError(error) {
        console.error('Failed to load PDF file:', error);
        setPdfError(true);
    }

    return (
        <div className="relative pt-36 pb-8 bg-gradient-to-bl from-[rgba(17,16,16,0.58)] to-[rgba(12,8,24,0.9)] text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-8">
                    <a href="/resume.pdf" download="Sharmake_Hassan_Said_Resume.pdf" className="flex items-center space-x-2 bg-[#623686] hover:bg-[#6d20c5] text-white font-bold py-2 px-4 rounded transition-all max-w-xs">
                        <AiOutlineDownload />
                        <span>Download CV</span>
                    </a>
                </div>
                
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl bg-gray-800 p-4 rounded-lg border-2 border-purple-700">
                        <p className="text-center text-lg mb-4">PDF Preview</p>
                        <div className="bg-white text-black p-4 rounded shadow-inner h-[80vh] overflow-auto flex justify-center">
                            {pdfError ? (
                                <div className="flex flex-col items-center justify-center h-full">
                                    <p className="text-red-500 text-xl mb-4">Failed to load PDF file.</p>
                                    <p className="text-gray-600">Please make sure the PDF file exists and is valid.</p>
                                </div>
                            ) : (
                                <Document
                                    file="/resume.pdf"
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    onLoadError={onDocumentLoadError}
                                    className="flex justify-center"
                                >
                                    <Page pageNumber={pageNumber} />
                                </Document>
                            )}
                        </div>
                        <p className="text-center mt-4">Page {pageNumber} of {numPages}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ResumeNew;

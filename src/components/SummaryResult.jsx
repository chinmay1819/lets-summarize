// import React from 'react'

// export const SummaryResult = ({summary}) => {
//   return (
//     <div className='w-full mt-4 flex justify-center'>
//       <div className='bg-slate-100 rounded-lg shadow-lg border p-6 w-3/4 max-w-xl'>
//       {summary ? (
//         <div className='summary-content'>
//           <p className="text-base font-normal text-gray-700 leading-relaxed">{summary}</p>
//         </div>
//       ) : (
//         <p className='text-gray-500 font-medium text-center'>No summary available yet.</p>
//       )}
//     </div>
    
//     </div>
//   )
// }

import React from 'react';

export const SummaryResult = ({ summary }) => {
    if (!summary) {
        return (
            <div className="w-full flex justify-center items-center mt-4">
                <p className="text-gray-500 font-medium">No summary available.</p>
            </div>
        );
    }

    // Split the summary into lines
    const lines = summary.split("\n");
    const structuredSummary = [];
    let currentSection = null;

    lines.forEach((line) => {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
            // If it's a section header, create a new section and add it to structuredSummary
            const heading = trimmedLine.replace(/[*]/g, ""); // Clean the header
            currentSection = { heading, content: [] }; // Properly initialize
            structuredSummary.push(currentSection); // Ensure the section is added to the main structure
        } else {
            // If it's content, ensure currentSection is defined before pushing
            if (currentSection && Array.isArray(currentSection.content)) {
                currentSection.content.push(trimmedLine);
            }
        }
    });

    return (
        <div className="w-full mt-6 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg border p-6 w-3/4 max-w-xl">
                {structuredSummary.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">{section.heading}</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {section.content.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

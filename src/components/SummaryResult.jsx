import React from 'react'
import { InputWithButton } from './InputWithButton'

export const SummaryResult = ({summary}) => {
  return (
    <div>
      <div className='summary-result bg-gray-100 rounded shadow-md'>
      {summary ? (
        <div className='summary-content p-4'>
          {/* Display the summary data here */}
          <p className="summary-text text-lg font-bold text-gray-800">{summary}</p>
          {/* You can add more elements to display different parts of the response data */}
        </div>
      ) : (
        <p className='no-summary-text text-gray-500 font-medium'>No summary available yet.</p>
      )}
    </div>
    
    </div>
  )
}

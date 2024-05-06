import React from 'react'

export const SummaryResult = ({summary}) => {
  return (
    <div className='w-full mt-4 flex justify-center'>
      <div className='bg-slate-100 rounded-lg shadow-lg border p-6 w-3/4 max-w-xl'>
      {summary ? (
        <div className='summary-content'>
          <p className="text-base font-normal text-gray-700 leading-relaxed">{summary}</p>
        </div>
      ) : (
        <p className='text-gray-500 font-medium text-center'>No summary available yet.</p>
      )}
    </div>
    
    </div>
  )
}


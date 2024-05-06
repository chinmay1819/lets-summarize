import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react'
import { SummaryResult } from './SummaryResult';

export const InputWithButton = () => {
  
    const [url,setUrl] = useState("");
    const [summary,setSummary] = useState(null);
    const onChange = ({target}) => setUrl(target.value);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('url', url);

            // ----------------- Avoding the API call ---------------------- 
            // const response = await fetch('http://localhost:5000/api/summary', {
            //   method: 'POST',
            //   headers: {
                
            //   },
            //   body: formData,
            // });
      
            // // 3. Handle the response
            // if (!response.ok) {
            //   throw new Error(`API request failed with status ${response.status}`);
            // }
      
            // const responseData = await response.json();
            // setSummary(responseData.result) // Process or display the response data
            // console.log(responseData.result)
            
            setSummary("seless and driven by conficting national ideologies. - Life has no inherent meaning unless it is eternal. - Sasuke and his brother share a deep bond, despite their differences. - The Uchiha clan faces discrimination and persecution due to rumors of causing the Nine-Tails incident. - The Uchiha clan plans a coup against the village, but it is stopped by Itachi Uchiha. - Itachi chooses to sacrifice his life to protect the village and his brother. - True peace cannot be achieved through violence but through understanding and cooperation. - The Uchiha clan's resentment towards the village stems from their fear and perception of oppression. - Sasuke undergoes a journey to avenge his clan and understand the complexities of the shinobi world. - Itachi's sacrifice and enduring bond with Sasuke serve as a testament to the power of love and perseverance.")
        } catch (error) {
            console.error('API request error:', error.message); // Handle errors appropriately
          }
    }




   return (
    <div className='flex w-full justify-center max-w-[24rem] pt-20'>
       <div className='relative flex items-center w-3/4 max-w-[36rem]'>
            <Input
                type='url'
                placeholder='Enter link here...'
                value={url}
                onChange={onChange}
                className='w-full'
                containerProps={{
                    className: "min-w-20 top-1"
                }}
            />

            <Button
                size='sm'
                color={url? "gray":"blue-gray"}
                disabled={!url}
                aria-label="Submit URL"
                className="right-24 top-1 mr-2 rounded"
                onClick={handleSubmit}
            >
                Submit
            </Button>
       </div>
       {summary && <SummaryResult summary={summary} />}
    </div>
  )
}

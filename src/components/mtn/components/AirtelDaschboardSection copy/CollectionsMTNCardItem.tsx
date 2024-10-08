'use client'
import { Card } from '@mui/material';
import { useState } from 'react';

function CollectionsMTNCardItem() {
  const [ collections, setCollections ] = useState([]);
  const [ total, setTotal ] = useState(0);

  // useEffect(() => {
  //   axios.get('/api/momo/collections')
  //   .then(res => {
  //     console.log(res.data.collections)
  //     setCollections(res.data.collections)
  //   })
  //   .catch(console.log);
  // }, []);

  // useEffect(() => {
  //   if(collections.length > 0){
  //     const total = collections.reduce((cum, curr: { amount: string }) => {
  //       return cum + parseInt(curr.amount);
  //     }, 0);
  //     setTotal(total);
  //   }
  // }, [collections]);

  return (
    <Card className='rounded-sm p-3 min-w-[15rem] min-h-[6rem] bg-[#74b9ff] text-white space-y-1'>
      <p className='font-bold text-sm'>Collections (Money In)</p>
      <p className='font-light text-2xl'>{0} $</p>
      <p className='font-normal text-sm'>Total collections: {0}</p>
    </Card>
  )
}

export default CollectionsMTNCardItem
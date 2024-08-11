import CancelButton from '@/components/mtn/components/CancelButton'
import MTNProductCard from '@/components/mtn/components/MTNProductCard'


async function MTN() {
  return (
    <>
      <h1 className='font-bold'>Pay with MTN MOMO</h1>
      <MTNProductCard/>
      <CancelButton />
    </>
  )
}

export default MTN
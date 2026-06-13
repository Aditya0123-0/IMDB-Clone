import React from 'react'

function Banner() {
  return (
    <>
    <div className=" h-[20vh] md:h-[80vh]  bg-center bg-cover flex item-end"style={{backgroundImage: `url(https://imgs.search.brave.com/SPWt7iyE_Dnez-IFJzDJvVXRU2wNkgCXA0KY4Tv1KME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjIx/OTQxNjMuanBn)`}}>
    </div>
    <div className='float-end text-white w-full gap-x-6 text-center  bg-blue-900/60 p-2'>Avengers Domesday</div>
    </>
  )
}

export default Banner
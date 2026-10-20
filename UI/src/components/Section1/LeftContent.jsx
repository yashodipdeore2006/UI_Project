const LeftContent = () => {
  return (
    <div className='flex w-full max-w-[430px] flex-col justify-between pt-8 lg:pt-0'>
      <div className='mb-8 lg:mb-0'>
        <h3 className='mb-7 text-[4.1rem] font-black leading-[0.9] tracking-[-0.07em]'>
          Prospective
          <br />
          customer
          <br />
          segmentation
        </h3>

        <p className='max-w-[420px] text-[1.1rem] leading-[1.6] text-[#3d3d3d]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloremque perspiciatis
          cumque, eveniet recusandae a laboru m vero! Aperiam, at culpa.
        </p>
      </div>

      <div className='flex items-end justify-start pt-10'>
        <div className='flex h-16 w-16 items-center justify-center text-[4.5rem] leading-none text-[#111111]'>
          <i className='ri-arrow-right-up-line'></i>
        </div>
      </div>
    </div>
  )
}

export default LeftContent
const toneStyles = {
  warm: {
    overlay: 'from-[#d6975d]/80 via-[#d4a064]/40 to-[#d4a064]/10',
    badge: 'bg-[#f5f5f3] text-[#111111]',
    button: 'bg-[#4077ff] text-white',
    tint: 'bg-[#d49a66]',
  },
  light: {
    overlay: 'from-[#f3efe9]/75 via-[#f3efe9]/20 to-[#f3efe9]/0',
    badge: 'bg-[#f5f5f3] text-[#111111]',
    button: 'bg-[#4ec7a8] text-[#0b2a22]',
    tint: 'bg-[#f0e9df]',
  },
  dark: {
    overlay: 'from-[#0d1b32]/90 via-[#0d1b32]/40 to-[#0d1b32]/10',
    badge: 'bg-[#f5f5f3] text-[#111111]',
    button: 'bg-[#4077ff] text-white',
    tint: 'bg-[#0d1b32]',
  },
}

const RightCard = ({ id, image, tone, label, active }) => {
  const style = toneStyles[tone]

  return (
    <div className='group relative h-[35rem] w-[18rem] overflow-hidden rounded-[2rem] border border-[#d9d9d5] bg-[#f1f0ee] shadow-[0_18px_35px_rgba(20,20,20,0.08)]'>
      <div className={`absolute inset-0 bg-gradient-to-b ${style.overlay}`} />
      <img src={image} alt='' className='h-full w-full object-cover' />

      <div className='absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f5f1] text-xl font-semibold text-[#111111] shadow-sm'>
        {id}
      </div>

      <div className='absolute inset-x-0 bottom-0 z-10 p-4'>
        <div className='mb-4 rounded-[1.75rem] bg-[#f4f1ed]/90 px-4 py-3 text-[1.1rem] leading-[1.35] text-[#111111] shadow-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis sed id expedita
          reprehenderit rem vel, minima quis reiciendis porro?
        </div>

        <button
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${
            active ? style.button : 'bg-[#d7f2eb] text-[#0c3129]'
          }`}
        >
          {label}
          <span className='text-lg'>→</span>
        </button>
      </div>
    </div>
  )
}

export default RightCard;
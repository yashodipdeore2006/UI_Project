import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const cards = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
    tone: 'warm',
    label: 'Satisfied',
    active: true,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    tone: 'light',
    label: 'Underserved',
    active: false,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    tone: 'dark',
    label: 'High value',
    active: false,
  },
]

const RightContent = () => {
  return (
    <div className='flex w-full justify-center overflow-x-auto pb-2 pt-4 lg:justify-end'>
      <div className='flex items-end gap-6 lg:gap-8'>
        {cards.map((card) => (
          <RightCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}

export default RightContent

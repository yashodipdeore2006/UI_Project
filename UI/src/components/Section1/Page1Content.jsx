import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='flex items-center gap-10 px-8 pb-12 pt-8 md:px-12 lg:px-16 xl:gap-12'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content


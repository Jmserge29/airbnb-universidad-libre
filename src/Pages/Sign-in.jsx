import Form from '../Components/Sign-in/Form'
import IconGeneral from '../Components/IconGeneral';
function Sign_In() {
  return (
    <>
    <IconGeneral/>
      <div className=''>
        <div className='absolute top-32 left-[375px] transform -translate-x-20 rounded-full size-44 bg-purple-600 blur-xl'></div>
        <div className='absolute top-32 left-[675px] transform -translate-x-20 rounded-full size-32 w-44 bg-rose-400 blur-xl'></div>
        <div className='absolute top-3/4 left-[1535px] transform -translate-x-20 rounded-full size-32 w-44 bg-indigo-500 blur-xl'></div>
        <div className='absolute top-2/4 left-[1375px] transform -translate-x-20 rounded-full size-24 bg-rose-300 blur-lg'></div>
        <Form />
      </div>
    </>
  )
}

export default Sign_In
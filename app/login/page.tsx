import InputText from '../ui/login/input'
import ParentLogin from '../ui/login/parent'


const style = {
  ['backgroundImage']:"URL(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=3112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

}

export default function Login(){

  return(
    <div className='w-12/12 h-screen relative z-10 flex justify-center items-center'>
      <div className='w-full -z-10 h-screen blur-md bg-cover bg-center absolute top-0 left-0' style={style}></div>
        <ParentLogin title="Log In">
        <form method="post" className='w-full flex flex-col justify-center items-center'>
           <InputText placeholder='User' />
           <InputText placeholder='Password' />
           <button className='mt-10 w-32 h-10 rounded-md' style={{background:"#fe6b39"}}>Sign In</button>
        </form>
        </ParentLogin>
    </div>
  )
}
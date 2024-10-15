import { LiaBarsSolid,LogOut , TfiSearch, AddPost, useNavigate, onAuthStateChanged, auth, logo, Button, useState, useEffect, Carousel } from '../../utils/import'

const AdminDashboard = () => {
    const [isAddPost, setIsAddPost] = useState(false)
    const [isCarousel , setIsCarousel] = useState(false)
    const [user, setUser] = useState(false)
    const [logOut, setLogOut] = useState(false)

    const newCarousel = ()=>{
        setIsCarousel(true)
    }
    const newPost = () => {
        setIsAddPost(true)
    }
    const activeAdmin = async () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.email === 'asharimran41@gmail.com') {
                    setUser(true)
                } else {
                    navigate('/auth/admin/signin')
                }
            } else {
                navigate('/auth/admin/signin')
            }
        });
    }
    const navigate = useNavigate()
    useEffect(() => {
        activeAdmin()
    }, [])
    const handleLogOut = () => {
        setLogOut(true)
    }
    return (
        <>
            {
                user &&
                <div>
                    <nav className="w-[100%] bg-mainColor flex justify-between items-center p-2 px-3 gap-x-5 max-sm:gap-x-1">
                        <img src={logo} alt="" className='w-[70px] p-1' />
                        <div className="p-2 px-3 bg-inputColor rounded-full w-[100%] flex items-center">
                            <input type="text" placeholder="Type here you search....." className="outline-none w-[100%]" />
                            <TfiSearch className="text-2xl text-gray-400" />
                        </div>
                        <div className="flex justify-end gap-4">
                            <LiaBarsSolid className="text-[50px] shadow-md p-[11px] rounded-full bg-inputColor " onClick={handleLogOut}/>
                        </div>
                    </nav>
                    <div>
                        <LogOut signout={logOut} setsignOut={setLogOut}/>
                        <AddPost setIsAddPost={setIsAddPost} isAddPost={isAddPost} />
                        <Carousel isCarousel={isCarousel}  setIsCarousel={setIsCarousel} /> 
                        <Button title='Add New Post' click={newPost} clas='p-2 px-4 m-3 bg-inputColor rounded-lg shadow-md active:shadow-none active:translate-y-1' />
                        <Button title='Add Carousle Image' click={newCarousel} clas='p-2 px-4 m-3 bg-inputColor rounded-lg shadow-md active:shadow-none active:translate-y-1' />
                    
                    </div>
                </div>
            }
        </>
    )
}

export default AdminDashboard

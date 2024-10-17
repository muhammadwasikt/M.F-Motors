import { LiaBarsSolid, LogOut, TfiSearch, AddPost, useNavigate, onAuthStateChanged, auth, logo, Button, useState, useEffect, Carousel, IoIosAddCircleOutline, BiImageAdd, fetchUserData, PiSignOutThin, IoMdClose } from '../../utils/import'

const AdminDashboard = () => {
    const [isAddPost, setIsAddPost] = useState(false)
    const [isCarousel, setIsCarousel] = useState(false)
    const [user, setUser] = useState(false)
    const [logOut, setLogOut] = useState(false)
    const [data, setData] = useState()
    const [sidePannel, setSidePannel] = useState(false)

    const newCarousel = () => {
        setIsCarousel(true)
        setSidePannel(false)
    }
    const newPost = () => {
        setIsAddPost(true)
        setSidePannel(false)
    }
    const activeAdmin = async () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.email === import.meta.env.VITE_ADMIN_EMAIL) {
                    setUser(true)
                } else {
                    navigate('/auth/admin/signin')
                }
            } else {
                navigate('/auth/admin/signin')
            }
        });
    }
    const handleLogOut = ()=>{
        setLogOut(true)
        setSidePannel(false)
    }
    const navigate = useNavigate()
    useEffect(() => {
        activeAdmin()
    }, [navigate])
    const handleSidePannel = () => {
       setSidePannel(!sidePannel) 
    }
    useEffect(() => {
        fetchUserData()
            .then((user) => {
                    setData(user)  
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
// console.log(data);

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
                            {sidePannel ? <IoMdClose className="text-[50px] shadow-md p-[11px] rounded-full bg-inputColor " onClick={handleSidePannel} /> :<LiaBarsSolid className="text-[50px] shadow-md p-[11px] rounded-full bg-inputColor " onClick={handleSidePannel} />}
                        </div>
                    </nav>
                    <div>
                        <LogOut signout={logOut} setsignOut={setLogOut} />
                        <AddPost setIsAddPost={setIsAddPost} isAddPost={isAddPost} />
                        <Carousel isCarousel={isCarousel} setIsCarousel={setIsCarousel} />
                        <div className='flex w-[100%]'>
                            <div className={sidePannel ? 'absolute animate__animated animate__fadeInLeft max-w-[300px] w-[100%] max-md:max-w-[100%] max-md:block h-[100vh] border-r-2' :'hidden'}>
                                <Button title={
                                    <div className='flex items-center gap-x-2'>
                                        <IoIosAddCircleOutline className='text-[24px]' />
                                        <p>Add New Post</p>
                                    </div>} click={newPost} clas='w-[100%] p-4 border-b-[1px] text-left bg-inputColor' />
                                <Button title={
                                    <div className='flex items-center gap-x-2'>
                                        <BiImageAdd className='text-[24px]' />
                                        <p>Add Carousel Image</p>
                                    </div>} click={newCarousel} clas='w-[100%] p-4 border-b-[1px] text-left bg-inputColor' />
                                    <Button title={
                                    <div className='flex items-center gap-x-2'>
                                        <PiSignOutThin className='text-[24px]' />
                                        <p>Log Out</p>
                                    </div>} click={handleLogOut} clas='w-[100%] p-4 border-b-[1px] text-left bg-inputColor' />
                            </div>
                            <div className='w-[100%]'>
                                {
                                    data && data.length > 0 ? data.map((item, index) => {
                                        const { Title, Image, Description, Category, Price } = item;
                                        // console.log(Image)
                                        return (
                                            <div key={index} className="p-4 border-b">
                                                <h1>{Title}</h1>
                                                <img src={Image} />
                                                <p>{Description}</p>
                                                <p>Category: {Category}</p>
                                                <p>Price: {Price}</p>
                                            </div>
                                        );
                                    }) : <p>No data available</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AdminDashboard

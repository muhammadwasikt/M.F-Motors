import { LiaBarsSolid, LogOut, TfiSearch, AddPost, useNavigate, onAuthStateChanged, auth, logo, Button, useState, useEffect, Carousel, IoIosAddCircleOutline, BiImageAdd, fetchUserData, PiSignOutThin, IoMdClose, BiMessageAltEdit, MdOutlineDelete } from '../../utils/import'

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
    })
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
                            <div className='w-[100%] p-3'>
                                {
                                    data && data.length > 0 ? data.map((item, index) => {
                                        const { Title, Image, Description } = item;
                                        // console.log(Image)
                                        return (
                                            <div key={index} className="flex gap-y-1 border-2 p-2 m-2 bg-slate-100 items-center max-lg:flex max-lg:flex-col">
                                                <img src={Image} className='w-[100px] max-lg:w-[100%] max-lg:h-[200px] object-cover'/>
                                                <div className='w-[100%]'>
                                                <div className='px-2 flex w-[100%] border-2 bg-inputColor py-1 max-sm:flex max-sm:flex-col'>
                                                <p className='text-[26px] border-r-[1px] border-gray-500 w-[210px] max-sm:w-[100%] max-sm:text-center max-sm:border-none'>TITLE:</p>
                                                <p className='w-[100%] overflow-scroll text-[20px] px-3 max-sm:border-t-[1px] max-sm:h-[100px]'>{Title}</p>
                                                </div>
                                                <div className='px-2 flex w-[100%] border-2 bg-inputColor py-1 max-sm:flex max-sm:flex-col'>
                                                <p className='text-[26px] border-r-[1px] border-gray-500 w-[210px] max-sm:w-[100%] max-sm:text-center max-sm:border-none'>DESCRIPTION:</p>
                                                <p className='w-[100%] overflow-scroll text-[20px] px-3 max-sm:border-t-[1px] max-sm:h-[100px]'>{Description}</p>
                                                </div>
                                                </div>
                                                <div className='max-lg:flex max-lg:justify-end max-lg:gap-x-3 max-lg:w-[100%]'>
                                                <BiMessageAltEdit title='Edit' className='text-[40px]'/>
                                                <MdOutlineDelete title='Delete' className='text-[40px]'/>
                                                </div>
                                            </div>
                                        );
                                    }) :<div className='w-[100%] h-[80vh] flex justify-center items-center'>
                                        <div className="loaders"></div>
                                        </div>
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

import { addDoc, carouselImg, collection, db, getDownloadURL, getStorage, IoIosCloseCircleOutline, MdUploadFile, ref, uploadBytesResumable , useEffect, useForm, useState } from '../../utils/import.js'


const Carousel = ({isCarousel , setIsCarousel}) => {
  const [loader , setLoader] = useState(false)
  const [isDownloadUrl , setIsDownloadUrl] = useState()
  const [isFile , setIsFile] = useState([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const storage = getStorage();
  const fileSubmit =(event)=>{
    setLoader(true)
    const file = event.target.files[0];
    const imagesRefWithFolder = ref(storage, 'carousel/'+file.name);
    const uploadTask = uploadBytesResumable(imagesRefWithFolder, file);
    uploadTask.on('state_changed',
      (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress)
      },
      (error) => {
          console.log(error);
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                    setIsDownloadUrl(downloadURL);
                    console.log(downloadURL);
                    
                    setLoader(false)
                });
        }
        
      )
    }
    const onSubmit = async (event)=>{ 
      try {
        const docRef = await addDoc(collection(db, "Carousel"), {
         Image:isDownloadUrl
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    useEffect(()=>{
      carouselImg().then((file)=>{
        setIsFile(file)
        console.log(file)
      }).catch((error)=>{
        console.log(error)
      })
    })
  return (
    <div>
     {isCarousel ? <div className="absolute flex flex-col w-[100%] p-2 py-6 h-[100%] bg-inputColor">
      <div className='flex justify-end absolute w-[100%] p-3 py-0'>
      <IoIosCloseCircleOutline className="text-2xl" onClick={()=>{setIsCarousel(false)}}/>
      </div>
      <div className="mx-auto mb-auto shadow-2xl leading-5 max-w-[450px] w-[100%] p-2">
      <form className="flex flex-col gap-y-2 p-1" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Image:</label>
      <input type="file" id="img" {...register("image", { required: true })} onChange={fileSubmit} className="hidden" />
      <label htmlFor="img" className="p-2 outline-none border rounded flex items-center"><MdUploadFile className='text-24px'/> Upload image </label>
      {errors.image && <span className="text-[12px] text-errorColor">This field is required</span>}
      {loader? <div className="loader"></div> : null}
      </div>
      <input type="submit" value="Submit" className='bg-mainColor p-2 shadow-md active:translate-y-[2px] text-inputColor active:shadow-none' />
    </form>
      </div>
      <div className='p-5 flex flex-wrap gap-2 justify-center'>
        {
         isFile.length > 0 ? isFile.map((item , key)=>{
          const {Image} = item
          return(
            <img src={Image} key={key} className='w-[250px]'/>
          )
          console.log(item)
         }): 
         <div className='w-[100%] h-[80vh] flex justify-center items-center'>
         <div className="loaders"></div>
         </div>
        }
      </div>
    </div> : null}
    </div>
  )
}

export default Carousel

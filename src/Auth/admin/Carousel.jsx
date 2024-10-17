import { getDownloadURL, getStorage, IoIosCloseCircleOutline, ref, uploadBytesResumable , useForm, useState } from '../../utils/import.js'


const Carousel = ({isCarousel , setIsCarousel}) => {
  const [loader , setLoader] = useState(false)
  const [isDownloadUrl , setIsDownloadUrl] = useState([])
  const {
    register,
    formState: { errors },
  } = useForm()

  const storage = getStorage();
  const fileSubmit =(event)=>{
    setLoader(true)
    const file = event.target.files[0];
    setIsFile(file.name)
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
  return (
    <div>
     {isCarousel ? <div className="absolute flex leading-7 flex-col w-[100%] p-2 py-3 bg-inputColor">
      <IoIosCloseCircleOutline className="self-end text-2xl" onClick={()=>{setIsCarousel(false)}}/>
      <div className="m-auto shadow-2xl leading-5 max-w-[450px] w-[100%] p-2">
      <form className="flex flex-col gap-y-2 p-1">
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Image:</label>
      <input type="file" id="img" {...register("image", { required: true })} onChange={fileSubmit} className="hidden" />
      <label htmlFor="img" className="p-2 outline-none border rounded ">Upload image </label>
      {errors.image && <span className="text-[12px] text-errorColor">This field is required</span>}
      {loader? <div className="loader"></div> : null}
      </div>
    </form>
      </div>
      <div >
        
      </div>
    </div> : null}
    </div>
  )
}

export default Carousel

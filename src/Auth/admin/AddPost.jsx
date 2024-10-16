import {useForm ,IoIosCloseCircleOutline ,getStorage, ref, uploadBytesResumable, getDownloadURL, useRef, useState, addDoc, collection, db } from '../../utils/import.js'

const AddPost = ({setIsAddPost , isAddPost}) => {
  const [isFile , setIsFile] = useState()
  const [loader , setLoader] = useState(false)
  const [isDownloadUrl , setIsDownloadUrl] = useState()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        const {category , company , description ,price ,title} = data
        try {
          const docRef = await addDoc(collection(db, "users"), {
           Category:category,
           Company:company,
           Description:description,
           Price:price,
           Title:title,
           Image:isDownloadUrl
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        reset()
        setIsDownloadUrl(null)
        setIsAddPost(false)
      }
      const storage = getStorage();
      const fileSubmit =(event)=>{
        setLoader(true)
        const file = event.target.files[0];
        setIsFile(file.name)
        uploadTask.on('state_changed',
          (snapshot) => {
          }, 
          (error) => {
           console.error(error)
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setLoader(false)
              setIsDownloadUrl(downloadURL)
              console.log('File available at', isDownloadUrl);
            });
          }
        );
      }
      
      const storageRef = ref(storage, 'images/' + isFile);
      const uploadTask = uploadBytesResumable(storageRef, isFile);
       

      
  return (
    <>
    {isAddPost ? <div className="absolute flex leading-7 flex-col w-[100%] p-2 py-3 bg-inputColor">
      <IoIosCloseCircleOutline className="self-end text-2xl" onClick={()=>{setIsAddPost(false)}}/>
      <div className="m-auto shadow-2xl leading-5 max-w-[450px] w-[100%] p-2">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 p-1">
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Title:</label>
      <input {...register("title", { required: true })} className="p-2 outline-none border rounded" />
      {errors.title && <span className="text-[12px] text-errorColor">This field is required</span>}
      </div>
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Description:</label>
      <textarea {...register("description", { required: true })} className="p-2 outline-none border rounded" />
      {errors.description && <span className="text-[12px] text-errorColor">This field is required</span>}
      </div>
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Price:</label>
      <input type="number" {...register("price", { required: true })} className="p-2 outline-none border rounded" />
      {errors.price && <span className="text-[12px] text-errorColor">This field is required</span>}
      </div>
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Company:</label>
      <input {...register("company", { required: true })} className="p-2 outline-none border rounded" />
      {errors.company && <span className="text-[12px] text-errorColor">This field is required</span>}
      </div>
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Category:</label>
      <input {...register("category", { required: true })} className="p-2 outline-none border rounded" />
      {errors.category && <span className="text-[12px] text-errorColor">This field is required</span>}
      </div>
      <div className="flex flex-col gap-y-2">
      <label className="text-xl">Image:</label>
      <input type="file" id="img" {...register("image", { required: true })} onChange={fileSubmit} className="hidden" />
      <label htmlFor="img" className="p-2 outline-none border rounded ">Upload image </label>
      {errors.image && <span className="text-[12px] text-errorColor">This field is required</span>}
      {loader? <div className="loader"></div> : null}
      </div>
      <input type="submit" className="bg-mainColor p-2 px-4 rounded-xl my-3" value="Add Post"/>

    </form>
      </div>
    </div> : null}
    </>
  )
}

export default AddPost

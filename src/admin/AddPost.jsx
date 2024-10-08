import { useForm } from "react-hook-form"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddPost = ({setIsAddPost , isAddPost}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const storage = getStorage();
      const onSubmit = (data) => console.log(data)
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
      <label className="text-xl">Image:</label>
      <input type="file" id="img" {...register("image", { required: true })} className="hidden" />
      <label htmlFor="img" className="p-2 outline-none border rounded ">Upload image </label>
      {errors.image && <span className="text-[12px] text-errorColor">This field is required</span>}
      </div>
      <input type="submit" className="bg-mainColor p-2 px-4 rounded-xl my-3"/>
    </form>
      </div>
    </div> : null}
    </>
  )
}

export default AddPost

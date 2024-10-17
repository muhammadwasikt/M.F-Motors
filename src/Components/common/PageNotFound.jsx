import { errorImage } from "../../utils/import"

const PageNotFound = () => {
  return (
    <div className="bg-[#8a89890c]">
      <img src={errorImage} className="w-[100%] h-[100vh] object-contain"/>
    </div>
  )
}

export default PageNotFound

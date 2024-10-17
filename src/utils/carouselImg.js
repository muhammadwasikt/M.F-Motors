import { collection, db, getDocs } from "./import"; 

const carouselImg = async ()=>{
    const file = []
    const querySnapshot = await getDocs(collection(db, "Carousel"));
querySnapshot.forEach((doc) => {
    file.push(doc.data())
  console.log(`${doc.id} => ${doc.data()}`);
});
return file
}

export default carouselImg;

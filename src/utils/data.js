import { collection, getDocs, db } from "./import";

 const fetchUserData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const dataArr = [];
    querySnapshot.forEach((doc) => {
      dataArr.push(doc.data()); 
    });
    
    // console.log("Fetched Data:", dataArr);
    return dataArr; 

  } catch (error) {
    console.error("Error fetching data: ", error); 
  }
};


export default  fetchUserData;







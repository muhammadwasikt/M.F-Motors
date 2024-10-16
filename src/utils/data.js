import { collection, getDocs, db } from "./import";

let data;
 const fetchUserData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const dataArr = [];
    querySnapshot.forEach((doc) => {
      dataArr.push(doc.data()); 
    });
    
    console.log("Fetched Data:", dataArr);
    return dataArr; 

  } catch (error) {
    console.error("Error fetching data: ", error); 
  }
};
fetchUserData().then(data => {
  console.log("Data returned from function:", data); 
  data = data;
});

export default  data;







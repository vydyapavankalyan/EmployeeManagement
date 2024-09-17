import React from "react";

const data=[
  {
  title:'Computer Pavan Tech',
  imgUrl:'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg',
  description: "Royalty Free Images · Packaging Design · Technology Images, Pictures, Photos - Technology Photographs | Shutterstock Technology Logo, Tech Image. Circuit Board .."
  },
  {
    title:'OOPs',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vV2LB51zuxk3r5axpsXWF4Q2_aW6oFeaNw&usqp=CAU',
    description: "Royalty Free Images · Packaging Design · Technology Images, Pictures, Photos - Technology Photographs | Shutterstock Technology Logo, Tech Image. Circuit Board .."
  

  },
  {
    title:'java',
    imgUrl:'https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp',
    description: "Royalty Free Images · Packaging Design · Technology Images, Pictures, Photos - Technology Photographs | Shutterstock Technology Logo, Tech Image. Circuit Board .."
  

  }


]


const App=()=>{

  let newtemparray=data.map((eachObj)=>{
    return(<artical>
      <h1>{eachObj.title}</h1>
      <img src={eachObj.imgUrl}/>
      <p>{eachObj.description}</p>
    </artical>
    )
    
  }
  
  )
  return(
    <>
    {newtemparray}
  
    </>

  )
}
  





export default App
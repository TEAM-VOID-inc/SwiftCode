import React, { useState } from 'react';
import '../../assets/css/blog.css';
import font from '../../utilities/font';
import Typography from '../../components/Typography';
import BlogCard from '../../pageComponents/Blog/BlogCard';
import Skeleton from '../../pageComponents/Competitve/Skeleton';
import '../../assets/css/skeleton.css';


const Blogs = () => {
   const [loading] = useState(false);
   const BlogData = Array(6).fill('');
   const tags = ["React" , "Vue","React" , "Vue","React" , "Vue","React" , "Vue","React" , "Vue","React" , "Vue","React" , "Vue"];
   return (
      <div>
         <div className="blogContent">
         <div style={{display:'flex'}}>
            <Typography m="0px 40px 0px 0px " fs="45px" color="white" ff={font.ubuntu} display="flex" alignItems="center">Blogs </Typography>
            
         </div>
            {loading ?
               <Skeleton />
               :
               <div>
                  {
                     BlogData.map((item, index) => (
                        <BlogCard key={index}
                           id={index}
                           title="React - How to Proxy to Backend Server"
                           description="Explaining how to configure a proxy for backend API calls with an example . Now let us learn about React . React is a front-end framework"
                           date="14 Jun 2020"
                           topic="React" 
                           image ="https://images.pexels.com/photos/5512688/pexels-photo-5512688.jpeg?cs=srgb&dl=pexels-miroslav-%C5%A1kopek-5512688.jpg&fm=jpg" 
                           tags = {tags}
                           />))
                  }
               </div>

            }
         </div>
      </div>
   );
}

export default Blogs;
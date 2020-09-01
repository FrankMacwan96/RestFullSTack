import React from 'react';
import '../App.scss';


const Post = (props) =>(
        
          props.post.map(item=>(
                    <div>
                    <div key={item.id} className='post'>
                        <p><b>Title:</b> {item.title}</p>
                        <p><b>Description:</b> {item.description}</p>
                        <p><b>Date Posted:</b> {item.date}</p>
                    </div>
                    <br/>
                    </div>
                    
                )) 
            
)

export default Post;

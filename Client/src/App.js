import React, {Component} from 'react';
import './App.scss';

//importing components
import Post from './components/post';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { posts: [] }
    };   
        
    componentDidMount(){
        fetch('http://localhost:3000/posts').then(res=>res.json()).then(json=>{
            this.setState({posts:json,});
        })
    }

    render(){
        var post = this.state.posts
        return (
            <div>
                <div className="head"> Posts</div>
                {/* {post.map(item=>(
                    <div key={item.id} className='post'>
                        <p><b>Title:</b> {item.title}</p>
                        <p><b>Description:</b> {item.description}</p>
                        <p><b>Date Posted:</b> {item.date}</p>
                    </div>
                ))} */}
                <Post post={post}/>
            </div>
        );
    }
}

export default App;
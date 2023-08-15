import { useState } from 'react';
import './Home.css'

const blogsData = [
    {title: 'my new website', body:'lorem ipsumoenjrgn....1',author:'yemad',blogId:1, authorId:7},
    {title: 'Party website', body:'lorem ipsumoenjrgn....2',author:'yemad',blogId:1, authorId:7},
    {title: 'web party', body:'lorem ipsumoenjrgn....3',author:'yemad',blogId:1, authorId:7},
    {title: 'just website', body:'lorem ipsumoenjrgn....4',author:'jojo',blogId:1, authorId:10}
];

const [blogs, setBlogs] = useState(blogsData);

const Home = () => {
    return (
        <div className='Home' style={{textAlign:'center',fontFamily:'sans-serif'}}>
            
        </div>
    );
}
 
export default Home;
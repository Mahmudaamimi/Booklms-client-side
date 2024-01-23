import   { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {

    const fetchBooks = async () => {
      try {
        // Make the GET request using Axios
        const response = await axios.get('https://library-management-server-ruddy.vercel.app/addbooks');

        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []); 

  return (
    <div>
      <ul className='grid p-5 md:grid-cols-4 gap-5 my-5'>
        {books.map((book) => (
           <div key={book._id} className="card card-compact bg-base-100 shadow-xl">
           <figure><img className='h-48 w-full' src={book.imageUrl} alt="Shoes" /></figure>
           <div className="card-body">
             <h2 className="card-title">{book.name}</h2>
             <p className="card-title">{book.quantity}</p>
             <h2 className="card-title">{book.author}</h2>
             <p>{book.category}</p>
             <p>{book.description}</p>
             <p>rating: {book.rating}</p>
             <div className="card-actions  ">
              <Link to={`/bookdetails/${book._id}`}><button className="btn bg-green-600">Details</button></Link>
             </div>
           </div>
         </div>
        ))}
      </ul>
    </div>
  );
};

export default AllBooks;

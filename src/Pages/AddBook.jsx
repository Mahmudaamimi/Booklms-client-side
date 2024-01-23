 
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBook = () => {
  const { register, handleSubmit, errors } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    fetch('https://library-management-server-ruddy.vercel.app/addbooks',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then((responseData) => {
          console.log(responseData);
          toast.success("Added Books!");
          navigate('/allbooks')
        })
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
          <input
            type="text"
            {...register('imageUrl', { required: 'Image URL is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.imageUrl && <p className="text-red-500 text-xs italic">{errors.imageUrl.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
          <input
            type="number"
            {...register('quantity', { required: 'Quantity is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.quantity && <p className="text-red-500 text-xs italic">{errors.quantity.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Author Name:</label>
          <input
            type="text"
            {...register('author', { required: 'Author Name is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.author && <p className="text-red-500 text-xs italic">{errors.author.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <input
            type="text"
            {...register('category', { required: 'Category is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.category && <p className="text-red-500 text-xs italic">{errors.category.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Short Description:</label>
          <textarea
            {...register('description', { required: 'Short Description is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
          {errors && errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
          <input
            type="number"
            {...register('rating', { required: 'Rating is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors && errors.rating && <p className="text-red-500 text-xs italic">{errors.rating.message}</p>}
        </div>

        <div className="mb-6">
          <input
            type="submit"
            value="Add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;

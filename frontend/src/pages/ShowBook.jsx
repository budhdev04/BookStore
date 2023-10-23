import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
    const [books,setBook] = useState({});
    const [loading,setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    },[])

    return (
      <div className='p-4'>
        <BackButton/>
        {loading ? (
            <Spinner/>
        ) : (
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
                <div className="mt-4">
                    <span className='text-xl mr-4 text-gray-500'>Id</span>
                    <span>{books.id}</span>
                </div>
                <div className="mt-4">
                    <span className='text-xl mr-4 text-gray-500'>Title</span>
                    <span>{books.title}</span>
                </div>
                <div className="mt-4">
                    <span className='text-xl mr-4 text-gray-500'>Author</span>
                    <span>{books.author}</span>
                </div>
                <div className="mt-4">
                    <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                    <span>{books.publishYear}</span>
                </div>
                <div className="mt-4">
                    <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                    <span>{new Date(books.createdAt).toString()}</span>
                </div>
                <div className="mt-4">
                    <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
                    <span>{new Date(books.updatedAt).toString()}</span>
                </div>
            </div>
        )}
      </div>
    )
}

export default ShowBook
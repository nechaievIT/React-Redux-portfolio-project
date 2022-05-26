import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { commentUpdate, commentDelete } from '../redux/actions';

const SingleComment = ({data}) => {
    const[commentText, setCommentText] = useState('')
    const {text, id} = data;
    const dispatch = useDispatch();

    useEffect(() => {
        if(text) {
            setCommentText(text);
        }
    }, [text])

    const handleInput = (e) => {
        setCommentText(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id))
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }

  return (
      <div>
        <form onSubmit={handleUpdate} className='comments-item'>
            <div onClick={handleDelete} className='comments-item-delete'> &times; </div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type='submit' hidden />
        </form>
      </div>
  )
}

export default SingleComment
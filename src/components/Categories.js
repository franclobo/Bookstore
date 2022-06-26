import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/Categories';

function Categories() {
  const dispatch = useDispatch();
  const listCategories = useSelector((store) => store.categories);
  return (
    <>
      <div className="category">
        <h2>Categories</h2>
        <ul className="list-categories">
          <li>{listCategories}</li>
        </ul>
        <button type="button" className="input-submit" onClick={() => dispatch(checkStatus())}>
          Check Status
        </button>
      </div>
    </>
  );
}

export default Categories;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../actions/itemActions';
import ProductItem from './ProductItem';


const ItemList = () => {
   
  const dispatch = useDispatch();

  const itemsIntial=[]
  const [sortOrder, setSortOrder] = useState('asc');
  const [isSorting, setSorting] = useState(false);
 
//   const mapStateToProps = state => ({
//     items: state.itemReducer.items, // make sure to correctly map the items state
//     loading: state.itemReducer.loading,
//     error: state.itemReducer.error
//   });

  const items =  useSelector(state => state.itemState.items);
  const loading = useSelector(state => state.itemState.loading);
  const error = useSelector(state => state.itemState.error);
 

  useEffect( () => {
     dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  const handleSort = () => {
    setSorting(!isSorting);
    const sortedItems = [...items].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.price - b.price;
        }else {
            return b.price - a.price;
          }
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: sortedItems });
  };
  
//   const handleClose = () => {
//     setSorting(!isSorting);
//     const sortedItems = [...items].sort((a, b) => {
//         if (sortOrder === 'dec') {
//           return a.id - b.id;
//         }else {
//         return b.price - a.price;
//       }
    // item?.sort((a, b) => a.id - b.id);
// });
// setSortOrder(sortOrder === 'dec' ? 'asce' : 'dec');
//     dispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: sortedItems });
//   };

  let count=items.length;

  return (
    <>
    <div className="mt-2 d-flex flex-row-reverse">
    {!isSorting && (
      <button className="btn btn-danger mx-2" onClick={handleSort}>
        Sort by Price
      </button>
    )}
    {isSorting && (
      <button
        className="btn btn-dark d-flex align-items-center mx-2"
        onClick={handleSort}
      >
        <span>Sort by Price x</span>
      </button>
    )}
  </div>
    <div>
      <div className='mx-2  d-flex justify-content-center bg-infoe'><b>Number of Items in Cart: {count}</b></div>
      <div className=" d-flex align-content-start flex-wrap">
      {items.map((element)=>{
            return  (
              <ProductItem key={element.id} id={element.id} title={element.title} description={element.description} price={element.price} imgurl={element.imgurl} stars={element.stars}/>
            ) 
            })}
      </div>
    </div>
    </>
  );
};

export default React.memo(ItemList);



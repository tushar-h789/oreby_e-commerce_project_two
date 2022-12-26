import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Products from './Products';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            <div className='md:w-[32%] '>
                <Products src="assets/p1.png" badge={true}/>
            </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setItemSelected(event.selected)
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className='md:flex md:flex-wrap justify-between'>
      <Items currentItems={currentItems} />

    </div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        nextClassName="hidden"
        pageClassName="inline-block border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm font-regular text-sm"
        containerClassName="flex flex-wrap gap-y-3.5 md:gap-y-3.5 gap-x-2 mt-12"
        activeClassName="inline-block border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm font-regular text-sm bg-black text-white"
      />
      <p className="md:absolute md:bottom-0 md:right-0 mt-2.5 md:mt-0 font-dm font-regular text-sm text-[#767676]">Products from {itemOffset} to {itemOffset+12} of {items.length}</p>
    </>
  );
}

export default Pagination
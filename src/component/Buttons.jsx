import React from 'react'

const Buttons = (props) => {
    
  return (
    <div className="flex justify-center  items-center gap-6 my-4">
        <button
          style={{ opacity: props.page === 1 ? 0.5 : 1 }}
          className="px-4 py-2 cursor-pointer bg-amber-400 text-black font-bold rounded active:scale-91"
          onClick={() => {
            if (props.page > 1) {
              props.setPage(props.page - 1);
              props.setUserData([]);
            }
          }}
        >
          prev
        </button>
        <button
          className="text-white cursor-pointer font-bold text-xl"
          onClick={() => {
            props.setPage(1);
            props.setUserData([]);
          }}
        >
          1
        </button>
        <button
          className="text-white cursor-pointer font-bold text-xl"
          onClick={() => {
            props.setPage(2);
            props.setUserData([]);
            
          }}
        >
          2
        </button>
        <button
          className="text-white cursor-pointer font-bold text-xl"
          onClick={() => {
            props.setPage(3);
            props.setUserData([]);
          }}
        >
          3
        </button>
        <button
          className="px-4 py-2 bg-amber-400 cursor-pointer text-black font-bold  rounded active:scale-91"
          onClick={() => {
            props.setPage(props.page + 1);
            props.setUserData([]);
          }}
        >
          next
        </button>
      </div>
  )
}

export default Buttons

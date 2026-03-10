import React, { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("olive");

  const BtnPress = (e) => {
    const selectedColor = e.target.innerText.toLowerCase();
    setColor(selectedColor);
  };

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-full bg-white">

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full border text-black"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>

          <button
            onClick={BtnPress}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

        </div>
      </div>

    </div>
  );
}


































// import React, { useState } from 'react'

// function BgChanger() {
//     let [color,setColor] = useState("white");

//     const BtnPress = (e) => {      
//     const selectedColor = e.target.innerText;
//     console.log(selectedColor);
//     setColor(selectedColor);
//   };
//   return (
//     <div className="w-full h-screen"  style={{ backgroundColor: color }}>

//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-full">

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-red-800 text-black"  style={{backgroundColor: "red"}}>
        //     red
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-green-500 text-black" style={{backgroundColor: "green"}}>
        //     Green
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-blue-500 text-black" style={{backgroundColor: "blue"}}>
        //     Blue
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-yellow-500 text-black" style={{backgroundColor: "yellow"}}>
        //     Yellow
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-pink-500 text-black" style={{backgroundColor: "pink"}}>
        //     Pink
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-purple-500 text-black" style={{backgroundColor: "purple"}}>
        //     Purple
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-gray-500 text-black" style={{backgroundColor: "grey"}}>
        //     Gray
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-white-100 text-black border" style={{backgroundColor: ""}}>
        //     White
        //   </button>

        //   <button onClick={BtnPress} className="px-4 py-1 rounded-full bg-black text-black" style={{backgroundColor: "brown"}}>
        //     Black
        //   </button>

//         </div>
//       </div>

//     </div>
//   );
// }

// export default BgChanger;

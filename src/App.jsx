// import Gallery from "./Gallery";
//
// export default function App() {
//   return (
//     <>
//       <Gallery />
//     </>
//   );
// }
// export default function TodoList() {
//   return (
//     <div style={{ backgroundColor: "tan" }}>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve the spectrum technology</li>
//       </ul>
//     </div>
//   );
// }
// import "./App.css";
// export default function App() {
//   const imageUrl =
//     "https://images.pexels.com/photos/30305153/pexels-photo-30305153/free-photo-of-elderly-man-reading-in-vintage-study-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
//   const description = "Eka Nugraha";
//   return <img className="avatar" src={imageUrl} alt={description} />;
// }
// export default function TodoList() {
//   const scientist = "Albert Einstein";
//   return <h1>scientist</h1>;
// }
// const today = new Date();
//
// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
//
// export default function TodoList() {
//   return <p>Todo's Todo List: {formatDate(today)}</p>;
// }
// export default function TodoList() {
//   return (
//     <ul style={{ backgroundColor: "pink", color: "black" }}>
//       <li>Joe Rogan</li>
//       <li>Lex Fridman</li>
//       <li>Candance Owens</li>
//     </ul>
//   );
// }
// import React from "react";
//
// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };
//
// const TodoList = () => {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todo list</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Eat</li>
//         <li>Sleep</li>
//         <li>Code</li>
//         <li>Repeat</li>
//       </ul>
//     </div>
//   );
// };
//
// export default TodoList;

// const person = {
//   name: "Gregorio Y. Zara",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };
//
// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// const person = {
//   name: "Gregorio Y. Zara",
//   imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };
//
// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img className="avatar" src={person.imageUrl} alt="Gregorio Y. Zara" />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        //src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        //src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

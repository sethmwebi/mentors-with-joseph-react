// import "./App.css";
// import Profile from "./Profile";
//
// function Gallery() {
//   return (
//     <div>
//       <Profile />
//       <Profile />
//       <Profile />
//     </div>
//   );
// }
//
// export default Gallery;
//

// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         class="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }
const podcaster = {
  name: "Lex Fridman",
  theme: {
    backgroundColor: "black",
    color: "green",
  },
};

export default function TodoList() {
  return (
    <div
      style={{
        backgroundColor: podcaster.theme.backgroundColor,
        color: podcaster.theme.color,
      }}
    >
      <h1>{podcaster.name}</h1>
    </div>
  );
}

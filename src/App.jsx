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

// const baseUrl = "https://i.imgur.com/";
// const person = {
//   name: "Gregorio Y. Zara",
//   imageId: "7vQD0fP",
//   imageSize: "s",
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
//         //src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
//         //src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
//         src={baseUrl + person.imageId + person.imageSize + ".jpg"}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }
// import React from "react";

// function Person(props) {
//   return <h1>{props.name}</h1>;
// }

// function Person(props) {
//   const { name } = props;
//   return <p>{name}</p>;
// }

// function Person({ name }) {
//   return <h2>{name}</h2>;
// }
//
// const App = () => {
//   return (
//     <div>
//       <Person name="Biden" />
//       <Person name="Donald" />
//     </div>
//   );
// };
//
// export default App;
import "./App.css";
import Avatar from "./Avatar";
// function Avatar({ className, src, alt, width, height }) {
//   return (
//     <img
//       className={className}
//       src={src}
//       alt={alt}
//       height={height}
//       width={width}
//     />
//   );
// }
//
// export default function App() {
//   return (
//     <Avatar
//       className="avatar"
//       src="https://images.pexels.com/photos/30337798/pexels-photo-30337798/free-photo-of-stylish-woman-resting-by-ornate-wooden-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       alt="black woman"
//       width={150}
//       height={150}
//     />
//   );
// }

// function Avatar({ person, size = 150 }) {
//   return (
//     <img
//       src={person.imgUrl}
//       alt={person.nam}
//       width={size}
//       height={size}
//       className="avatar"
//     />
//   );
// }
//
// function Profile(props) {
//   return <Avatar {...props} />;
// }
//
// export default function App() {
//   return (
//     <Profile
//       person={{
//         name: "Jovan",
//         imgUrl:
//           "https://images.pexels.com/photos/21772278/pexels-photo-21772278/free-photo-of-man-in-hat-and-sweater-standing-in-botanical-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       }}
//     />
//   );
// }
// function Card({ children }) {
//   return <div className="card">{children}</div>;
// }
//
// export default function App() {
//   return (
//     <>
//       <Card>
//         <Avatar
//           person={{
//             name: "Jovan",
//             imgUrl:
//               "https://images.pexels.com/photos/21772278/pexels-photo-21772278/free-photo-of-man-in-hat-and-sweater-standing-in-botanical-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//           }}
//           size={400}
//         />
//       </Card>
//       <Card>
//         <h1>Joe Rogan</h1>
//       </Card>
//     </>
//   );
// }
// import { useState } from "react";
// import Clock from "./Clock";
//
// const App = () => {
//   const [color, setColor] = useState("rebbecapurple");
//
//   return (
//     <div>
//       <div>
//         <p>Pick a color:</p>
//         <select onChange={(e) => setColor(e.target.value)}>
//           <option value="rebeccapurple">Rebeccapurple</option>
//           <option value="lightcoral">Lightcoral</option>
//           <option value="midnightblue">Midnightblue</option>
//         </select>
//       </div>
//       <Clock color={color} time={new Date().toTimeString()} />
//     </div>
//   );
// };
//
// export default App;
// function Item({ name, isPacked }) {
//   if (isPacked) return <li>{name} ✅</li>;
//   return <li>{name}</li>;
// }
//

// function Item({ name, isPacked }) {
//   return <li>{isPacked ? name + "✅" : name}</li>;
// }
//

// function Item({ name, isPacked }) {
//   return <li>{isPacked ? <del>{name + " ✅"}</del> : name}</li>;
// }

// function Item({ name, isPacked }) {
//   return (
//     <li>
//       {name} {isPacked && " ✅"}
//     </li>
//   );
// }
// function Item({ name, isPacked }) {
//   return (
//     <li>
//       {name} {!isPacked && "❌"}
//     </li>
//   );
// }
//
// export default function PackagingList() {
//   return (
//     <section>
//       <h1>Seth's packaging list</h1>
//       <ul>
//         <Item name="Space Suit" isPacked={true} />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Joe Rogan" />
//       </ul>
//     </section>
//   );
// }

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name} {importance > 0 && <em>(importance: {importance})</em>}
//     </li>
//   );
// }
//
// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item importance={9} name="Space suit" />
//         <Item importance={0} name="Helmet with a golden leaf" />
//         <Item importance={6} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// function Drink({ name }) {
//   let partOfPlant, caffeineContent, age;
//
//   if (name === "tea") {
//     partOfPlant = "leaf";
//     caffeineContent = "15–70 mg/cup";
//     age = "4,000+ years";
//   } else {
//     partOfPlant = "bean";
//     caffeineContent = "80–185 mg/cup";
//     age = "1,000+ years";
//   }
//
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{partOfPlant}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{caffeineContent}</dd>
//         <dt>Age</dt>
//         <dd>{age}</dd>
//       </dl>
//     </section>
//   );
// }
//
// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }
/*Rendering lists*/
// const podcasts = [
//   "Joe Rogan Experience",
//   "Candance Owens",
//   "Triggernometry",
//   "Lynn Ngugi Show",
//   "Iko nini podcast",
// ];
//
// import React from "react";
//
// const App = () => {
//   return (
//     <ul>
//       {podcasts.map((podcast, index) => {
//         return (
//           <li key={index}>
//             {podcast} {index}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
//
// export default App;
// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//   },
//   {
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "chemist",
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam",
//     profession: "physicist",
//   },
//   {
//     id: 3,
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//   },
//   {
//     id: 4,
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "astrophysicist",
//   },
// ];
//
// export default function App() {
//   return (
//     <div>
//       {people
//         .filter((person) => person.profession != "chemist")
//         .map((person, index) => {
//           return (
//             <div key={index} style={{ display: "flex" }}>
//               <p>{person.name} : </p>
//               <p>{person.profession}</p>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <ol>
//       {people.map((person, index) => {
//         return (
//           <div style={{ display: "flex", gap: "10px" }}>
//             <li key={index}>{person.name}</li> <span>{person.profession}</span>
//           </div>
//         );
//       })}
//     </ol>
//   );
// }
// import React from "react";
// import { people } from "./data";
//
// const App = () => {
//   return (
//     <div>
//       <h1>Chemists</h1>
//       {people
//         .filter((person) => person.profession === "chemist")
//         .map((person) => (
//           <div key={person.id}>
//             <p>{person.name}</p>
//             <p>{person.profession}</p>
//             <p>{person.accomplishment}</p>
//           </div>
//         ))}
//       <h1>Other Professions</h1>
//       {people
//         .filter((person) => person.profession !== "chemist")
//         .map((person) => {
//           return (
//             <div key={person.id}>
//               <p>{person.name}</p>
//               <p>{person.profession}</p>
//               <p>{person.accomplishment}</p>
//             </div>
//           );
//         })}
//     </div>
//   );
// };
//
// export default App;
// import { recipes } from "./data";
// import React from "react";
//
// function App() {
//   return (
//     <div>
//       {recipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h2>{recipe.name}</h2>
//           <ul>
//             {recipe.ingredients.map((ingredient, index) => (
//               <li key={`${recipe.id}-${index}`}>{ingredient}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
//
// export default App;
// import { recipes } from "./data";
// function Recipe({ id, name, ingredients }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       {ingredients.map((ingredient, index) => (
//         <li key={index}>{ingredient}</li>
//       ))}
//     </div>
//   );
// }
//
// export default function RecipeList() {
//   return (
//     <div>
//       {recipes.map((recipe) => (
//         <Recipe
//           key={recipe.id}
//           id={recipe.id}
//           name={recipe.name}
//           ingredients={recipe.ingredients}
//         />
//       ))}
//     </div>
//   );
// }
// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ],
// };
//
// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => (
//         <div key={index}>
//           <p>{line}</p>
//           <hr />
//         </div>
//       ))}
//     </article>
//   );
// }
// let guest = 0;

// function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }
//
// export default function TeaSet() {
//   return (
//     <div>
//       <Cup guest={4} />
//       <Cup guest={5} />
//       <Cup guest={2} />
//       <Cup guest={1} />
//     </div>
//   );
// }
// function Cup({ guest }) {
//   return <h2>Tea cup for guest #{guest}</h2>;
// }
//
// export default function App() {
//   let cups = [];
//
//   for (let i = 1; i <= 12; i++) {
//     cups.push(<Cup key={i} guest={i} />);
//   }
//   return cups;
// }

// export default function Clock() {
//   let time = new Date();
//   let hours = time.getHours();
//   if (hours >= 0 && hours <= 6) {
//     document.getElementById("time").className = "night";
//   } else {
//     document.getElementById("time").className = "day";
//   }
//   return <h1 id="time">{time.toLocaleTimeString()}</h1>;
// }
// export default function Clock() {
//   const time = new Date().getHours();
//   console.log(time);
//   let timeOfDay = "";
//   if (time > 6) {
//     timeOfDay = <p className="day">{time}</p>;
//   } else {
//     timeOfDay = <h1 className="night">{time}</h1>;
//   }
//   return timeOfDay;
// }

// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ],
// };
//
// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => {
//         return (
//           <>
//             <p key={index}>{line}</p>
//             {index < poem.lines.length - 1 && <hr />}
//           </>
//         );
//       })}
//     </article>
//   );
// }

// import Profile from "./Profile";
//
// export default function App() {
//   return (
//     <>
//       <Profile
//         person={{
//           imageId: "lrWQx8l",
//           name: "Subrahmanyan Chandrasekhar",
//         }}
//       />
//       <Profile
//         person={{
//           imageId: "MK3eW3A",
//           name: "Creola Katherine Johnson",
//         }}
//       />
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import StoryTray from "./StoryTray";
//
// let initialStories = [
//   { id: 0, label: "Ankit's Story" },
//   { id: 1, label: "Taylor's Story" },
// ];
//
// export default function App() {
//   let [stories, setStories] = useState([...initialStories]);
//   let time = useTime();
//
//   // HACK: Prevent the memory from growing forever while you read docs.
//   // We're breaking our own rules here.
//   if (stories.length > 100) {
//     stories.length = 100;
//   }
//
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         textAlign: "center",
//       }}
//     >
//       <h2>It is {time.toLocaleTimeString()} now.</h2>
//       <StoryTray stories={stories} setStories={setStories} />
//     </div>
//   );
// }
//
// function useTime() {
//   const [time, setTime] = useState(() => new Date());
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return time;
// }
// import React from "react";
// import Toolbar from "./toolbar";
//
// export default function App() {
//   return (
//     <Toolbar
//       onPlayMOvie={() => alert("playing")}
//       onUploadImage={() => alert("Uploading!")}
//     />
//   );
// }
import React from "react";

const App = () => {
  return (
    <div
      onMouseEnter={() => console.log("You hovered over my territory")}
      onMouseLeave={() => console.log("Oh no you left!")}
      style={{
        height: "450px",
        width: "450px",
        background: "black",
        color: "white",
      }}
    >
      <button
        onClick={() => {
          console.log("hey Mr Donald");
        }}
      >
        click to log greeting
      </button>
    </div>
  );
};

export default App;

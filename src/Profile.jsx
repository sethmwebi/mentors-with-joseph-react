// export function Profile() {
//   return (
//     <img
//       src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRKu513Evx_f3zbM6EYXI6Sm7X9Om5Fx2z5LPI3v6AqCmrCcqHG-DuBehn7O8b4G7vfLr7OoVjyagXEldE"
//       alt="Joe"
//       height="200px"
//       width="auto"
//     />
//   );
// }
//
// export function Lex() {
//   return (
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Lex_Fridman_teaching_at_MIT_in_2018.png/220px-Lex_Fridman_teaching_at_MIT_in_2018.png"
//       alt="Lex"
//       height="200px"
//       width="auto"
//     />
//   );
// }

import Panel from "./Panel";
import { getImageUrl } from "./utils";

export default function Profile({ person }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}

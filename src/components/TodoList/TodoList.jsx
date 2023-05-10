// import { TodoListItem } from '../TodoListItem/TodoListItem';
// import {deleting} from 'pages/Todos';

// export const TodoList = ({ todos, onDelete, deleting }) => {
//   return (
//     <div>
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>
//           {todo.content}{' '}
//           <button onClick={() => onDelete(todo.id)}>{deleting ? 'Deleting...' : 'Delete'}</button>
//           </li>
//       ))}
//     </ul>
//     </div>
//   );
// };
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
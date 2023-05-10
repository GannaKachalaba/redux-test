// // import { Toaster } from 'react-hot-toast';
// import { Routes, Route } from 'react-router-dom';
// import { TodosPage } from 'pages/Todos';
// import { HomePage } from 'pages/Home';
// import { CreateTodoPage } from 'pages/CreateTodo';

// export const App = () => {
//   return (
//   <>
//       <Routes>
//        <Route index element={<HomePage />} />
// 					<Route path='todos/' element={<TodosPage />}>
// 						<Route path=':todoId' element={<TodoPageDetails />} />
// 					</Route>
//       </Routes>
//       </>
//   );
// };

import { Toaster } from 'react-hot-toast';
import { Routes, Route} from 'react-router-dom';
import { TodosPage } from 'pages/Todos';
import { HomePage } from 'pages/Home';
import { CreateTodoPage } from 'pages/CreateTodo';

export const App = () => {
  return (
    <>
      <Routes>
      <Route index element={<HomePage />} />
<Route path='todos/' element={<TodosPage />}>
<Route path=':todoId' element={<CreateTodoPage />} />
      </Route>
      </Routes>
      <Toaster position="top-right" />
    </>
  );
};
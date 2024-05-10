import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
library.add(fab, fas, far);

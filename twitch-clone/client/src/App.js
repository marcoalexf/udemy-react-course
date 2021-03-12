import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { StreamShow, StreamCreate, StreamList, StreamEdit, StreamDelete } from './components/streams';

export const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="" exact component={StreamList}/>
          <Route path="/streams/show" component={StreamShow}/>
          <Route path="/streams/new" component={StreamCreate}/>
          <Route path="/streams/edit" component={StreamEdit}/>
          <Route path="/streams/delete" component={StreamDelete}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

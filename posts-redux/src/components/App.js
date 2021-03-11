import { connect } from 'react-redux';
import PostList from './PostList';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {})(App);

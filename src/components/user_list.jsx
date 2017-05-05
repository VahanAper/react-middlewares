import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchUsers from '../actions';

class UserList extends Component {
  static renderUser(user) {
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary" href="{user.website}">Wbsite</a>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(UserList.renderUser)}
      </div>
    );
  }
}

UserList.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.object),
  fetchUsers: React.PropTypes.func.isRequired,
};
UserList.defaultProps = {
  users: [],
};

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);

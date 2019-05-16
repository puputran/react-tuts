import React from 'react';

// Don't touch this block of code
class Item extends React.PureComponent {
  render() {
    const {id, info} = this.props.user;
    return (
      <div>
        <button
          data-testid={`user.${id}.delete`}
          onClick={() => this.props.onRemoveUser(id)}>
          delete user ${id}
        </button>
        <input
          value={this.props.user.name}
          data-testid={`user.${id}.name`}
          onChange={e => this.props.onNameChange(id, e.target.value)}
        />
        <input
          value={info.address}
          data-testid={`user.${id}.address`}
          onChange={e => this.props.onAddressChange(id, e.target.value)}
        />
        <div data-testid={`user.${id}.languages`}>
          {info.languages.map((lan, index) => (
            <button
              key={index}
              onClick={() => this.props.onRemoveLanguage(id, index)}>
              x {lan}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

// Only modify methods, do not touch state or render method
class DeepModifyState extends React.Component {
  state = {
    list: [
      {
        id: 1,
        name: 'User 1',
        info: {address: 'Address 1', languages: ['en', 'vi']},
      },
      {
        id: 2,
        name: 'User 2',
        info: {address: 'Address 2', languages: ['en', 'vi', 'au']},
      },
    ],
  };

  handleNameChange = (userId, value) => {
    // please fulfill the function
  };

  removeUser = userId => {
    // please fulfill the function
  };

  handleAddressChange = (userId, value) => {
    // please fulfill the function
  };

  removeLanguage = (userId, lanIndex) => {
    // please fulfill the function
  };

  render() {
    return (
      <div data-testid="root">
        {this.state.list.map(user => (
          <Item
            user={user}
            key={user.id}
            onNameChange={this.handleNameChange}
            onAddressChange={this.handleAddressChange}
            onRemoveLanguage={this.removeLanguage}
            onRemoveUser={this.removeUser}
          />
        ))}
      </div>
    );
  }
}

export default DeepModifyState;

import React from 'react';

// Don't touch this block of code
class Item extends React.PureComponent {
  render() {
    const { id, info } = this.props.user;
    return (
      <div>
        <button
          data-testid={`user.${id}.delete`}
          onClick={() => this.props.onRemoveUser(id)}
        >
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
              onClick={() => this.props.onRemoveLanguage(id, index)}
            >
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
        info: { address: 'Address 1', languages: ['en', 'vi'] },
      },
      {
        id: 2,
        name: 'User 2',
        info: { address: 'Address 2', languages: ['en', 'vi', 'au'] },
      },
    ],
  };

  handleNameChange = (userId, value) => {
    const list = [...this.state.list];
    const index = list.findIndex(item => item.id === userId);
    const newData = { ...list[index], name: value };
    list.splice(index, 1, newData);
    this.setState({ list: [...list] });
  };

  removeUser = userId => {
    const list = [...this.state.list];
    const index = list.findIndex(item => item.id === userId);
    list.splice(index, 1);
    this.setState({ list });
  };

  handleAddressChange = (userId, value) => {
    const list = [...this.state.list];
    const index = list.findIndex(item => item.id === userId);
    const newData = {
      ...list[index],
      info: { ...list[index].info, address: value },
    };
    list.splice(index, 1, newData);
    this.setState({ list: [...list] });
  };

  removeLanguage = (userId, lanIndex) => {
    // please fulfill the function
    const list = [...this.state.list];
    const index = list.findIndex(item => item.id === userId);
    const listItem = list[index];
    const lan = [...listItem.info.languages];

    lan.splice(lanIndex, 1);
    const modifyLan = {
      ...list[index],
      info: { ...list[index].info, languages: lan },
    };
   
    list.splice(index, 1, modifyLan);
    this.setState({ list });
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

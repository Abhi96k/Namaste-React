class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor - UserClass");

    this.state = {
      name: this.props.name,
      email: this.props.email,
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>User Profile</h1>
        <div>Name: {this.state.name}</div>
        <div>Email: {this.state.email}</div>

        <div>Count: {count}</div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increment Count
        </button>
      </div>
    );
  }
}

export default UserClass;

//class based Component
//UserClass:-

// Never Updated State Directly like:- this.state.count++

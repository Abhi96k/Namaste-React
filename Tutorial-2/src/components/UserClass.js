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

  componentDidMount() {
    console.log("Component Did Mount - UserClass");
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

// First Constructor is called
// Then render method is called
// After that componentDidMount is called

//Life Cycle of class Component:-
// 1. Mounting
//    - constructor()
//    - render()
//    - componentDidMount()

// 2. Updating
//    - render()
//    - componentDidUpdate()

// 3. Unmounting
//    - componentWillUnmount()

// 4. Error Handling
//    - componentDidCatch()

// suppose we call children components
// <UserProfile name="John Doe" email="john@example.com" />
// <UserProfile name="Abhishek" email="Abhishek@example.com" />

//parent Constructor called
//parent render called
//  --child1 Constructor called
//  --child1 render called
//  --child2 Constructor called
//  --child2 render called
//child1 componentDidMount called
//child2 componentDidMount called
//parent componentDidMount called

// //mounting
//   |-parent Constructor called
//   |--parent render called
//   |--child1 Constructor called
//   |--child1 render called
//   |--child2 Constructor called
//   |--child2 render called
//   |--child1 componentDidMount called
//   |--child2 componentDidMount called
//   |--parent componentDidMount called

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

//https://api.github.com/users/Abhi96k


Refactor in progress. Current version:

useState folder contains an example with incrementing a counter using useState hook as well as simulating a login or register form using useState hook. Both examples include a class based version of the component.

useEffect folder contains an example of fetching data from an api/server and then saving and displaying that data. The current component uses useState and useEffect to replace state and componentDidMount. Still needed is an example that makes use of the dependency array. folder also contains class version of the component.

useHistory folder contains an example of a nav bar using the useHistory hook instead of withRouter to get access to the push function. folder also contains class version of the component.

reduxHooks folder contains examples for accessing and updating redux data using useSelector and useDispatch hooks. Also included are the connect versions of the hook components for comparisson as well as the corresponding class components using connect.


Potential Additions:

react:

useRef, useContext, useReducer, useMemo

useEffect with actual axios calls (requires setting up server)

react-redux:

useSelector, useDispatch

react-router-dom:

useHistory, useParams, useLocation

Custom Hooks:

useAxios, useInput, useAuth

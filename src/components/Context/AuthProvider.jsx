import { createContext } from "react";

// AuthProvider.PropTypes = {
//   children : children.isRequied,
// }

export const AuthContext = createContext();

function AuthProvider() {
  // let navigate = useNavigate();
  // const [user, setUser] = useState({ user });
  // useEffect(() => {
  //   const unsubscribed = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       const { displayName, email, uid, photoURL } = user;
  //       setUser({
  //         displayName, email, uid, photoURL
  //       });
  //       navigate("/");
  //     }

  //     navigate("/login");
  //   });

  //   return () => unsubscribed();
  // }, [navigate]);
  
  return (
    <AuthContext.Provider value={{  }}>
      {}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
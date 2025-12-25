import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => { }).catch((error) => {
            navigate("/error");
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch
                    (addUser
                        ({
                            uid: uid,
                            email: email,
                            displayName: displayName
                        }));
                navigate("/browse")

            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        // unsubscribe when compoenent unmounts
        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-40 flex justify-between">
            <img
                className="w-44"
                src={LOGO}
                alt="logo"
            />
            {user && <div className="flex p-2">

                <img
                    className="w-[50px] h-[50px] mt-3"
                    alt="usericon"
                    src={user?.photoURL || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"}
                />
                <button
                    onClick={handleSignOut}
                    className="text-white font-bold">
                    (Sign Out)
                </button>
            </div>
            }
        </div>
    )
}

export default Header
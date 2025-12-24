import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

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
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && <div className="flex p-2">

                <img
                    className="w-[50px] h-[50px] mt-3"
                    alt="usericon"
                    src={user?.photoURL || "https://avatars.githubusercontent.com/u/127239928?v=4"}
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
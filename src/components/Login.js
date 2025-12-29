import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/Constants";

const Login = () => {
    const [isSignForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const toggleSignInForm = () => {
        setIsSignForm(!isSignForm);
        setErrorMessage(null);
    };

    const handleButtonClick = () => {
        const message = checkValidData(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        if (message) return;

        if (!isSignForm) {
            // SIGN UP
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    return updateProfile(user, {
                        displayName: fullName.current.value,
                        photoURL: USER_AVATAR,
                    });
                })
                .then(() => {
                    const { uid, email, displayName, photoURL } =
                        auth.currentUser;

                    dispatch(
                        addUser({
                            uid,
                            email,
                            displayName,
                            photoURL,
                        })
                    );
                })
                .catch((error) => {
                    setErrorMessage(error.code + " - " + error.message);
                });
        } else {
            // SIGN IN
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const { uid, email, displayName, photoURL } =
                        userCredential.user;

                    dispatch(
                        addUser({
                            uid,
                            email,
                            displayName,
                            photoURL,
                        })
                    );
                })
                .catch((error) => {
                    setErrorMessage(error.code + " - " + error.message);
                });
        }
    };

    return (
        <div>
            <Header />

            <div className="absolute">
                <img
                    src={BG_URL}
                    alt="background"
                />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute p-12 bg-[#020504] w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSignForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignForm && (
                    <input
                        ref={fullName}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-[#131616] rounded-md"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-[#131616] rounded-md"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-[#131616] rounded-md"
                />

                {errorMessage && (
                    <p className="text-red-600 font-semibold py-2">
                        {errorMessage}
                    </p>
                )}

                <button
                    className="p-4 my-6 bg-[#e50914] w-full rounded-lg cursor-pointer"
                    onClick={handleButtonClick}
                >
                    {isSignForm ? "Sign In" : "Sign Up"}
                </button>

                <p
                    className="py-4 cursor-pointer text-gray-300"
                    onClick={toggleSignInForm}
                >
                    {isSignForm
                        ? "New to Netflix? Sign up now"
                        : "Already registered? Sign in now"}
                </p>
            </form>
        </div>
    );
};

export default Login;

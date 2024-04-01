import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getActiveTab, getAuthError, getRequest, getScreenshot, loginUser, setAuthError, setLoginEmail, setLoginPassword } from "../features/auth/authSlice";
import { getFaces } from "../features/auth/facenetSlice";
import { PictureControls } from "./PictureControls";
import Popup from './Popup';

export const Login = ({ enableInput }) => {
    const activeTab = useSelector(getActiveTab);
    const dispatch = useDispatch();
    const request = useSelector(getRequest);
    const email = request.login.email;
    const password = request.login.password;
    const screenshot = useSelector(getScreenshot);
    const error = useSelector(getAuthError);
    const faces = useSelector(getFaces);

    const [showPopup, setShowPopup] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const manageForm = (e) => {
        e.preventDefault();
        dispatch(setAuthError({ login: { serverErr: null } }));
        validateInputs();
        if (
            error.login.email == null &&
            password != null &&
            screenshot != null &&
            faces.length !== 0
        ) {
            const user = { email, password, screenshot, descriptor: Object.values(faces[0].descriptor) };
            dispatch(loginUser(user)).then(payload => {
                if (payload.meta.requestStatus === 'fulfilled') {
                    setShowPopup(true);
                    setLoggedIn(true);
                }
            });
        }
    };

    useEffect(() => {
        if (loggedIn) {
            const timer = setTimeout(() => {
                setLoggedIn(false);
            }, 10000); // Change 3000 to the duration you want the popup to be displayed
            return () => clearTimeout(timer);
        }
    }, [loggedIn]);

    const validateInputs = () => {
        if (email == null) {
            dispatch(setAuthError({ login: { email: 'The EMAIL field is required.' } }));
        } else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            dispatch(setAuthError({ login: { email: 'The EMAIL field is not in the standard form.' } }));
        } else {
            dispatch(setAuthError({ login: { email: null } }));
        }
        if (password == null) {
            dispatch(setAuthError({ login: { password: 'The PASSWORD field is required.' } }));
        } else {
            dispatch(setAuthError({ login: { password: null } }));
        }
        if (screenshot == null) {
            dispatch(setAuthError({ login: { screenshot: 'A face IMAGE is required.' } }));
        } else {
            dispatch(setAuthError({ login: { screenshot: null } }));
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    return (
        <form className={'login100-form ' + (activeTab === 'login' ? 'active' : '')}>
            <div className="my-wrap-input wrap-input100" onClick={() => enableInput('login-email')}>
                <input
                    type="email"
                    name="login-email"
                    id="login-email"
                    className="my-input input100"
                    placeholder="Email"
                    disabled={false} // Always set disabled to false
                    value={email || ''}
                    onChange={(e) => dispatch(setLoginEmail(e.target.value))}
                />
            </div>

            <div className="my-wrap-input wrap-input100" onClick={() => enableInput('login-password')}>
                <input
                    type="password"
                    name="login-password"
                    id="login-password"
                    className="my-input input100"
                    placeholder="Password"
                    disabled={false} // Always set disabled to false
                    value={password || ''}
                    onChange={(e) => dispatch(setLoginPassword(e.target.value))}
                />
            </div>

            <PictureControls />

            <div className="container-login100-form-btn">
                <button
                    type="button"
                    className="my-submit-btn zoom-in"
                    onClick={(e) => manageForm(e)}
                >Login</button>
            </div>
            {showPopup && (
                <Popup
                    message="User Logged in, Redirecting to Dashboard"
                    onClose={handlePopupClose}
                />
            )}
            {loggedIn && <Navigate to="/dashboard" />}
        </form>
    );
};

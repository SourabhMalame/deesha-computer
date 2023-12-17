let initialState = {

    feilds: {
        firstName: null,
        middleName: null,
        lastName: null,
        dateOfBirth: null,
        password: null,
        confirmPassword: null,
        email: null,
        course: null,
        courseStartDate: null,
        courseEndDate: null,
        aadharCardNumber: null,
        phoneNumber: null,
        education: null
    },

    logindata: {

        email: null,
        password: null

    },

    forgotpass: {
        email: null,
        password: null,

    },
    admin: {
        username: null,
        password: null,
        adminkey: null
    }

}

let UserReducer = (state = initialState, action) => {

    let { type, payload } = action;

    if (type === "REGISTRATION_DATA") {
        state = {
            ...state,
            feilds: { ...state.feilds, [payload.name]: payload.value }
        }

    }
    else if (type === "LOGIN_DATA") {
        state = {
            ...state,
            logindata: {
                ...state.logindata, [payload.name]: payload.value
            }
        }

    }
    else if (type === "FORGOT_PASS_DATA") {
        state = {
            ...state,
            forgotpass: {
                ...state.forgotpass, [payload.name]: payload.value, status: payload.status
            }
        }

    }

    else if (type === "ADMIN_LOGIN") {
        state = {
            ...state,
            admin: {
                ...state.admin, [payload.name]: payload.value
            }
        }

    }
    return state;
}


export default UserReducer;
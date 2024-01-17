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
    },
    adminDashUser: {},
    massages: {
        msg: null,
        name: null,
        email: null
    },
    student: null

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

    else if (type === "ALL_STUD_DATA") {
        state = {
            ...state,
            adminDashUser: {
                ...state.adminDashUser, payload
            }

        }
    }

    else if (type === "READ_MSG") {
        state = {
            ...state,
            massages: {
                ...state.massages, [payload.name]: payload.value
            }
        }
    }

    else if (type === "NUMBER_OF_STUD") {
        state = {
            ...state,
            student: payload
        }
    }
    return state;
}


export default UserReducer;
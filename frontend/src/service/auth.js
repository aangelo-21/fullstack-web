import api from "./index";

export const signup = async (dataSignUp) => {
    
    const { data } = await api.post('/auth/signup', dataSignUp)
    
    return data
}

export const login  = async (dataLogIn) => {
    
    const { data } = await api.post('/auth/login', dataLogIn)

    return data
}
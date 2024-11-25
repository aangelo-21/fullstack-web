import api from "./index";

export const newTeam = async (dataNewTeam) => {
    
    const { data } = await api.post('/team', dataNewTeam)
    
    return data
}
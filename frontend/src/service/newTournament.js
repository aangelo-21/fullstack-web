import api from "./index";

export const newTournament = async (dataNewTournament) => {
    
    const { data } = await api.post('/tournament', dataNewTournament)
    
    return data
}
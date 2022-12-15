import api from "./index"

export const getProducts = async () => {
    await api.get("/api/character").then()
}
import axios from "axios";

const baseURL = 'http://localhost:3500/';

export class DataMusicApi {

    static async postNotice(data) {
        const response = await axios.post(`${baseURL}noticias/criar`, data);
        return response.data;
    }

    static async getNotices() {
        const response = await axios.get(`${baseURL}noticias/noticias`);
        return response.data;
    }

    static async getNoticeById(id) {
        const response = await axios.get(`${baseURL}noticias/noticia/${id}`);
        return response.data;
    }

    static async deleteNotice(id) {
        const response = await axios.delete(`${baseURL}noticias/${id}`);
        return response.data;
    }

    static async updateNotice(id, data) {
        const response = await axios.put(`${baseURL}noticias/${id}`, data);
        return response.data;
    }

    static async postBand(data) {
        const response = await axios.post(`${baseURL}bandas/criar`, data);
        return response.data;
    }

    static async getBands() {
        const response = await axios.get(`${baseURL}bandas/bandas`);
        return response.data;
    }

    static async getBandById(id) {
        const response = await axios.get(`${baseURL}bandas/banda/${id}`);
        return response.data;
    }

    static async deleteBand(id) {

        const response = await axios.delete(`${baseURL}bandas/${id}`);
        return response.data;
    }

    static async updateBand(id, data) {
        const response = await axios.put(`${baseURL}bandas/${id}`, data);
        return response.data;
    }


}

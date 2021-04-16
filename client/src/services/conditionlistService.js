import axios from "axios";

const baseUrl = 'http://localhost:8080'

const getConditions = () => {
    const url = `${baseUrl}/conditions`;
    return axios.get(url)
        .then(({data}) => data);
};

export { getConditions };

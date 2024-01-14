import axios from 'axios';

const uploadFile = async (buffer) => {
    try {
        const res = await axios.post('https://up.team-skizo.repl.co/upload', {
            file: buffer.toString('base64')
        });
        return res.status !== 200 ? res.statusText : res.data;
    } catch (error) {
        if (error.response) {
            return error.response.statusText;
        }
        return 'Error occurred while uploading the file.';
    }
};

export default uploadFile;
import axios from 'axios'

const GPT_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/gpt";
const OpenChat_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/openchat";
const Bard_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/bard";
const Gemini_ApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/gemini";
const LlamaApiUrl = "https://ai.rnilaweera.ovh/api/v1/user/llama";
const api = `chatgpt_NGPwCLARxuUomQJbDFhbrB`

async function gpt(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${api}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(GPT_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat GPT Error: ${error}`);
    }
  }
  
async function openchat(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${api}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(OpenChat_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat OpenChat Error: ${error}`);
    }
  }
  
async function bard(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${api}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(Bard_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Bard Error: ${error}`);
    }
  }
  
async function gemini(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${api}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(Gemini_ApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat Gemini Error: ${error}`);
    }
  }
  
async function llama(prompt) {
    try {
      const payload = {
        prompt: prompt,
      };

      const authHeader = `Bearer ${api}`;

      const headers = {
        Authorization: authHeader,
      };

      const response = await axios.post(LlamaApiUrl, payload, { headers });
      return response.data;
    } catch (error) {
      throw new Error(`RsnChat LlaMa Error: ${error}`);
    }
  }

export { llama, gemini, bard, openchat, gpt }
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiURL = 'https://api.adzuna.com/v1/api';
const appID = 'app_id=127cdaaa';
const appKey = 'app_key=5cd9609f7c9c18c7e5a1e47a6a735ac5';

const country = 'in';
const page_number = 1;

export const getJobData = async () => {
  const resp = await axios.get(
    `${apiURL}/jobs/${country}/search/${page_number}?${appID}?${appKey}`,
// 'https://api.adzuna.com/v1/api/jobs/in/search/2?app_id=127cdaaa&app_key=5cd9609f7c9c18c7e5a1e47a6a735ac5',
  );
  return resp.data.results;
};

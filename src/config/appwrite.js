import { Appwrite } from 'appwrite';
const API_URL = process.env.REACT_APP_APPWRITE_API_URL;
const PROJECT_KEY = process.env.REACT_APP_APPWRITE_PROJECT_KEY;

const appwrite = new Appwrite();

appwrite.setEndpoint(API_URL).setProject(PROJECT_KEY);

export default appwrite;

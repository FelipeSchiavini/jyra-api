
const dotenv = require('dotenv')
dotenv.config()
import { Version3Client } from 'jira.js';

export const client = new Version3Client({
  host: 'https://beepay.atlassian.net/',
  authentication: {
    basic: {
      email: 'felipe@beepayapp.com.br',
      apiToken: process.env.JIRA_TOKEN as string,
    },
  },
  newErrorHandling: true,
});
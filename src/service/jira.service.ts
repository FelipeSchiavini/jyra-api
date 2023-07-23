const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' });

import { Version3Client } from 'jira.js';
import { IssueResponse } from '../../@types/jyra-types';

class JiraService {
  private client: Version3Client;
  
  constructor() {
    const apiToken =  process.env.JIRA_TOKEN 
    const email =  process.env.JIRA_EMAIL
    const host = process.env.JIRA_HOST

    if (!apiToken || !email || !host) {
      throw new Error("JIRA_TOKEN or JIRA_EMAIL or JIRA_HOST is not defined in your environment variables.");
    }

    this.client = new Version3Client({
      host,
      authentication: {
        basic: {
          email,
          apiToken,
        },
      },
      newErrorHandling: true,
    })
  }

  async myTasks() {
    const response : IssueResponse = await this.client.issueSearch.searchForIssuesUsingJql({
      jql: 'assignee = currentUser()',
    });
    const data = this.generateIssueLog(response)
    console.log(data)
  }

  async qaTasks() {
    const response : IssueResponse = await this.client.issueSearch.searchForIssuesUsingJql({
      jql: `status = "Waiting for Qa" and project = "${process.env.JIRA_PROJECT_NAME}"`,
    })
  
    const data = this.generateIssueLog(response)
    console.log(data)
  }

  async allInProgress() {
    if(!process.env.JIRA_PROJECT_NAME) {
      throw('JIRA_PROJECT_NAME is not defined in the environment variables')
    }
    const response : IssueResponse = await this.client.issueSearch.searchForIssuesUsingJql({
      jql: `status = "In Progress" and project = "${process.env.JIRA_PROJECT_NAME}"`,
    })
    const data = this.generateIssueLog(response)
    console.log(data)
  }
  private generateIssueLog(data: IssueResponse) {
    return data.issues.map((r) => {
      return {
        name: r.fields.summary,
        code: r.key,
        link: `https://beepay.atlassian.net/browse/${r.key}`,
        status: r.fields.status.name,
        assignee: r.fields?.assignee?.displayName,
      }
    })
  }
}


export default new JiraService()

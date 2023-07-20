import { client } from "./client";
import { JiraStatus } from "./types";

async function inQa() {

  const response : any = await client.issueSearch.searchForIssuesUsingJql({
    jql: 'status = "Waiting for Qa" and project = "web-beepay"',
  })

  const data = response.issues.map((r) => {
    return {
      name: r.fields.summary,
      code: r.key,
      link: `https://beepay.atlassian.net/browse/${r.key}`,
      status: r.fields.status.name,
      assignee: r.fields?.assignee?.displayName,
    }
  })
  console.log(data)
}


inQa();





import { client } from "./client";
import { JiraStatus } from "./types";

async function inQa() {

  const response : any = await client.issueSearch.searchForIssuesUsingJql({
    jql: 'status = "To do" and project = "web-beepay"',
  })
  // .filter(i => i.fields.customfield_10020.id === 53)
  const data = response.issues.filter(i => i.fields.customfield_10020?.[0]?.id === 53).map((r) => {
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





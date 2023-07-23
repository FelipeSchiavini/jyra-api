## Jira reader tasks
I use this project to read my team's tasks directly from the terminal, which improves workflow efficiency. In the future, I might consider adding functionality to modify these tasks as well.

I have a script named jira.sh that facilitates this process, and I use shortcuts in the terminal for easy access.

### Get Started

To set up your project environment, you need to create a .env file which contains all the required environment variables for project. There's a sample environment file provided in the repository, named .sample.

To implement a similar setup as mine, you can add the following function to your .zshrc or .bashrc file:

```
j() {
    (cd path-to-project/jira/scripts && sh jira.sh "$1")
}
```

Now, you should be able to use the j "your_argument" command to run your jira.sh script with the provided argument directly from your terminal. This provides a convenient way to read your team's tasks.

- read your current tasks 
run `j my`

- read your team todo tasks 
run `j todo`

- read your team waiting for qa tasks 
run `j qa`

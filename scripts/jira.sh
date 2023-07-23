#!/bin/bash
KIND=$(echo "$1" | tr -d '"')
PROJECT_PATH=$(grep PROJECT_PATH ../.env | grep -v "#" | awk -F = 'NR==1{print $2}')
if [ "$KIND" = 'my' ]
then
  (cd $PROJECT_PATH/src/logs/ && tsx my-progress.ts)
  exit 1
fi

if [ "$KIND" = 'qa' ]
then
  (cd /home/felipe/Documentos/jira/src/logs/ && tsx qa.ts)
  exit 1
fi

if [ "$KIND" = 'todo' ]
then
  (cd /home/felipe/Documentos/jira/src/logs/ && tsx todo.ts)
  exit 1
fi

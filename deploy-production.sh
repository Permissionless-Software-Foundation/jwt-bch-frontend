# Triggers a webhook to update the staging server at staging.fullstack.cash.

#!/bin/bash
#echo $DEPLOY_SECRET

export DATA="{\"ref\":\"$DEPLOY_SECRET\"}"

#echo $DATA

curl -X POST http://fullstack.cash:9000/hooks/production -H "Content-Type: application/json" -d $DATA

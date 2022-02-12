#!/bin/bash
cd /home/ec2-user/app
port=$(aws ssm get-parameters --region eu-north-1 --names API_PORT --query Parameters[0].Value) | tr -d '"'
API_PORT="${port%\"}"
API_PORT="${API_PORT#\"}"

npm start & npx wait-on -t 60000 http://localhost:$API_PORT/health
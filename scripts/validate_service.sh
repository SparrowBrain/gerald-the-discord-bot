#!/bin/bash
port=$(aws ssm get-parameters --region eu-north-1 --names API_PORT --query Parameters[0].Value)
API_PORT="${port%\"}"
API_PORT="${API_PORT#\"}"
npx wait-on -t 120000 http://localhost:$API_PORT/health
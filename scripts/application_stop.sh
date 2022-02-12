#!/bin/bash
port=$(aws ssm get-parameters --region eu-north-1 --names API_PORT --query Parameters[0].Value)
API_PORT="${port%\"}"
API_PORT="${API_PORT#\"}"
exec 3>&2
exec 2> /dev/null
curl -X POST http:/localhost:${API_PORT}/stop || exec 2>&3
exit 0
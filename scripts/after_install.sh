#!/bin/bash
cd /home/ec2-user/app
echo "DISCORD_BOT_TOKEN=$(aws ssm get-parameters --region eu-north-1 --names DISCORD_BOT_TOKEN --with-decryption --query Parameters[0].Value)
AWS_ACCESS_KEY_ID=$(aws ssm get-parameters --region eu-north-1 --names ACCESS_KEY_ID --with-decryption --query Parameters[0].Value)
AWS_SECRET_ACCESS_KEY=$(aws ssm get-parameters --region eu-north-1 --names SECRET_ACCESS_KEY --with-decryption --query Parameters[0].Value)
GERALD_SUBS_PROVIDER=$(aws ssm get-parameters --region eu-north-1 --names GERALD_SUBS_PROVIDER --query Parameters[0].Value)
API_PORT=$(aws ssm get-parameters --region eu-north-1 --names API_PORT --query Parameters[0].Value)" >> .env

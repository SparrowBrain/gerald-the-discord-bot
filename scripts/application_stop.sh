#!/bin/bash
exec 3>&2
exec 2> /dev/null
curl -X POST http:/localhost:${API_PORT}/stop || exec 2>&3
exit 0
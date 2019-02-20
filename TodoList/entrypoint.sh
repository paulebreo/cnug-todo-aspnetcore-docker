#!/bin/bash
# Make sure this file uses unix line delimiters
# This script restores the database after it starts up, and then runs the application. 
# This allows some time for the SQL Server database image to start up.

set -e
run_cmd="dotnet TodoList.dll"

until dotnet ef database update; 
do
 >&2 echo "SQL Server is starting up"
 sleep 1
done

>&2 echo "SQL Server is up - executing command"
exec $run_cmd
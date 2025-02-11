# * * * * * /bin/bash /home/ubuntu/JOB_Trust_send_backups_to_s3/crontab_mysql_send_to_s3.sh

# Load nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 16.20.2

# now node works
# node -e "console.log('hello')"
# node --version

# # npm works too!
# npm --version

node ./src/index.js mysql
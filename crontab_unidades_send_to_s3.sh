# 30 2 */10 * * /bin/bash /home/ubuntu/JOB_Trust_send_backups_to_s3/crontab_unidades_send_to_s3.sh >/dev/null 2&1
 
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use 16.20.2

node /home/ubuntu/JOB_Trust_send_backups_to_s3/src/index.js unidades
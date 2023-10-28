## Novel Reader(server)

### Steps
1. Clone the repo.
2. Set origin - `git remote add origin <repo-link>`
3. cd `server`
4. check python version and virtual env - `python --version`
5. Create virtual env `python -m venv <env-name>`
6. Activate virtualenv (command for bash shell) - `source <env_name>/Scripts/activate`
7. install python packages `pip install -r requirements.txt`
8. paste the `.env` in `server/` folder
9. start the server `flask run`

### Env config
* `FLASK_DEBUG` - Set it to `1` to run in debug
* `MONGO_USERNAME` - mongoDB username of database
* `MONGO_PASSWORD` - mongoDB password of database 
* `MONGO_CLUSTER` - mongoDB cluster name of database


Please let us know if there are any issues in above steps. Happy coding!

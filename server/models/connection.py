import os
from mongoengine import connect

DATABASE_NAME = 'novel_reader'
MONGO_USERNAME=os.environ.get('MONGO_USERNAME')
MONGO_PASSWORD=os.environ.get('MONGO_PASSWORD')
MONGO_CLUSTER=os.environ.get('MONGO_CLUSTER')
# print(MONGO_CLUSTER)

db_uri = f"mongodb+srv://{MONGO_USERNAME}:{MONGO_PASSWORD}@{MONGO_CLUSTER}.net/?retryWrites=true&w=majority"
db = connect(DATABASE_NAME, host=db_uri)
import os

MONGO_USERNAME=os.environ.get('MONGO_USERNAME')
MONGO_PASSWORD=os.environ.get('MONGO_PASSWORD')
MONGO_CLUSTER=os.environ.get('MONGO_CLUSTER')

env = {
    'MONGO_USERNAME': MONGO_USERNAME,
    'MONGO_PASSWORD': MONGO_PASSWORD,
    'MONGO_CLUSTER': MONGO_CLUSTER
}
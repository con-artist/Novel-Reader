from mongoengine import *

class Chapter(EmbeddedDocument):
    no = IntField()
    last_updated = DateTimeField()
    text = StringField()

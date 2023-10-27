import json
from mongoengine import *
from datetime import datetime

from models.chapter import Chapter

class Novel(Document):
    title = StringField(required=True)
    description = StringField(required=True)
    image_url = StringField(required=True)
    last_updated = DateTimeField(default=datetime.now)
    created_at = DateTimeField(default=datetime.now)
    rating = DecimalField(min_value=0, max_value=5, precision=2, default=0) # 0 means unrated
    author = StringField()
    translator = StringField()
    genre = ListField(StringField())
    status = StringField(choices=['completed', 'ongoing', 'dropped'], required=True)
    type = StringField(choices=['web novel', 'manga', 'manhwa', 'comic'])
    chapters = ListField(EmbeddedDocumentField(Chapter))
    # _views = IntField(default=0)

    def to_json_dict(self):
        return json.loads(self.to_json())

    def to_dict(self):
        return self.to_mongo().to_dict()

    def to_cover(self):
        return {
            "title": self.title,
            "image_url": self.image_url,
            "rating": self.rating,
            "status": self.status,
            # "genre": self.genre,
            # "created_at": self.created_at
        }
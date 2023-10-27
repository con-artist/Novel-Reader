from flask import request
from mongoengine import Q

from routes import router
from models.novel import Novel


@router.route('/novels/add', methods=['POST'])
def add_novel():
    """
        Inserts single/multipe novel records to database after validating each record
        with the schema. If any record doesn't match with the schema, raise 400 Bad
        Request response.

        For single record directly provide JSON object
        For multiple records provide JSON with key as "batch": value as array of objects
    """

    data = request.get_json()
    try:
        if "batch" in data:
            novel_instances = [Novel(**novel) for novel in data['batch']]
            novels = Novel.objects.insert(novel_instances)
            return {"data": [obj.to_json_dict() for obj in novels]}
        else:
            novel = Novel(**data).save()
            return {"data": novel.to_json_dict()}

    except Exception as e:
        return f"Error- {e}", 400


@router.route('/novels')
def get_novels():
    """
        ?type=
        popular - rating DESC
        new - created DESC
        latest_updated - latest_updated DESC

        ?genre=
        genre contain this word

        example- http://localhost:5000/novels?page=1&limit=2&genre=adventure&type=new
    """
    DEFAULT_LIMIT = 5

    type_to_order = {
        'popular': '-rating',
        'new': '-created_at',
        'latest_updated': '-last_updated'
    }

    # pagination
    limit = request.args.get('limit', DEFAULT_LIMIT, type=int)
    page = request.args.get('page', 1, type=int)

    begin = (page - 1) * limit
    end = begin + limit

    # filter
    type = request.args.get('type', None)
    genre = request.args.get('genre', None)

    query = Q(genre=genre) if genre else Q()

    # query
    try:
        if type:
            novels = Novel.objects[begin:end](query).order_by(type_to_order[type])
        else:
            novels = Novel.objects[begin:end](query)
        return {"data": [obj.to_cover() for obj in novels]}
    except IndexError:
        return {"data": []}
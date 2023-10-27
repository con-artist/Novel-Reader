from flask import Blueprint

router = Blueprint('router', __name__)

# only routes of below modules will be known to router
# this syntax is just like we import views inside app at the last, except we then register
# the blueprint with the app
# blueprint captures the routes, views, templates you are using, finally feeding them to app
from routes import novel
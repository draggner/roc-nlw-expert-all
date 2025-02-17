from flask import Blueprint, request, jsonify
from src.views.http_types.http_request import HttpRequest
from src.views.tag_creator_view import TagCreatorView

from src.errors.error_handler import handler_errors
from src.validators.tag_creator_validator import tag_creator_validator

tags_routes_bp = Blueprint('tags_routes', __name__)

@tags_routes_bp.route('create_tag', method=["POST"])
def create_tags():
  response = None
  
  try:
    tag_creator_validator(request)
    
    tag_creator_view = TagCreatorView()
    # print(request.json)
    http_request = HttpRequest(body=request.json)
    response = tag_creator_view.validate_and_create(http_request)
  except Exception as exception:
    response = handler_errors(exception)
  
  
  return jsonify(response.body), response.status_code


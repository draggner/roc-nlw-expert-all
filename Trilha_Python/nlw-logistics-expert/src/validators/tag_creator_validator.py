from src.errors.error_types.http_unprocessable_entity_error import HttpUnprocessableEntityError

from cerberus import Validator


'''
  {
    "product_code": "134"
  }
'''

def tag_creator_validator(request: any) -> None:
  body_validator = Validator({
    "product_code": { "type": "string", "required": True, "empty": False}
  })
  
  response = body_validator.validate(request.json)
  if response is False:
    raise HttpUnprocessableEntityError(body_validator.errors)
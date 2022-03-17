from flask import Blueprint, jsonify, make_response, request
from app.models import db, Group

group_routes = Blueprint('groups', __name__)


@group_routes.route('/')
def get_groups():
    groups = Group.query.all()
    return jsonify([group.to_JSON() for group in groups])

@group_routes.route('/', methods=['POST'])
def post_group():
    group = Group(
        owner = request.json['owner'],
        name = request.json['name'],
        description = request.json['description'],
        banner_image = request.json['banner_image']
    )
    try:
        db.session.add(group)
        db.session.commit()
        return jsonify(group.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the group occurred']})

@group_routes.route('/', methods=['PUT'])
def put_group():
    db.session.query(Group).filter(Group.id == request.json['id']).update({
        'name': request.json['name'],
        'description': request.json['description'],
        'banner_image': request.json['banner_image']
    }, synchronize_session='fetch')
    db.session.commit()
    group = Group.query.get(request.json['id'])
    if group:
        return jsonify(group.to_JSON())
    else:
        return make_response({'errors': ['Edit on non-existent group']}, 404)

@group_routes.route('/', methods=['DELETE'])
def delete_group():
    group_id = request.json['id']
    group = Group.query.get(group_id)
    if group:
        db.session.delete(group)
        db.session.commit()
        return jsonify({'errors': False})
    else:
        return make_response({'errors': ['Delete on non-existent group']}, 404)

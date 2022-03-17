from flask import Blueprint, jsonify, make_response, request
from app.models import db, Membership

membership_routes = Blueprint('memberships', __name__)


@membership_routes.route('/')
def get_memberships():
    memberships = Membership.query.all()
    return jsonify([membership.to_JSON() for membership in memberships])

@membership_routes.route('/', methods=['POST'])
def post_membership():
    membership = Membership(
        group_id = request.json['group_id'],
        member_id = request.json['member_id']
    )
    try:
        db.session.add(membership)
        db.session.commit()
        return jsonify(membership.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the membership occurred']})

@membership_routes.route('/', methods=['DELETE'])
def delete_membership():
    membership_id = request.json['id']
    membership = Membership.query.get(membership_id)
    if membership:
        db.session.delete(membership)
        db.session.commit()
        return jsonify({'errors': False})
    else:
        return make_response({'errors': ['Delete on non-existent membership']}, 404)

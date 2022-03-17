from flask import Blueprint, jsonify, make_response, request
from app.models import db, Maker

maker_routes = Blueprint('makers', __name__)


@maker_routes.route('/')
def get_makers():
    makers = Maker.query.all()
    return jsonify([maker.to_JSON() for maker in makers])

@maker_routes.route('/', methods=['POST'])
def post_maker():
    maker = Maker(
        name = request.json['name'],
        website = request.json['website'],
        instagram = request.json['instagram'],
        country = request.json['country'],
        is_yarn = request.json['is_yarn'],
        is_fiber = request.json['is_fiber'],
        is_notions = request.json['is_notions'],
        is_pattern = request.json['is_pattern'],
        is_knitting = request.json['is_knitting'],
        is_crochet = request.json['is_crochet'],
        is_embroidery = request.json['is_embroidery']
    )
    try:
        db.session.add(maker)
        db.session.commit()
        return jsonify(maker.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the maker occurred']}, 400)

@maker_routes.route('/', methods=['PUT'])
def put_maker():
    db.session.query(Maker).filter(Maker.id == request.json['id']).update({
        'name': request.json['name'],
        'website': request.json['website'],
        'instagram': request.json['instagram'],
        'country': request.json['country'],
        'is_yarn': request.json['is_yarn'],
        'is_fiber': request.json['is_fiber'],
        'is_notions': request.json['is_notions'],
        'is_pattern': request.json['is_pattern'],
        'is_knitting': request.json['is_knitting'],
        'is_crochet': request.json['is_crochet'],
        'is_embroidery': request.json['is_embroidery']
    }, synchronize_session='fetch')
    db.session.commit()
    maker = Maker.query.get(request.json['id'])
    if maker:
        return jsonify(maker.to_JSON())
    else:
        return make_response({'errors': ['Edit on non-existent maker']}, 400)

@maker_routes.route('/', methods=['DELETE'])
def delete_maker():
    maker_id = request.json['id']
    maker = Maker.query.get(maker_id)
    if maker:
        db.session.delete(maker)
        db.session.commit()
        return jsonify({'errors': False})
    else:
        return make_response({'errors': ['Delete on non-existent maker']}, 404)

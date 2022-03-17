from flask import Blueprint, jsonify, make_response, request
from app.models import db, Discount

discount_routes = Blueprint('discounts', __name__)


@discount_routes.route('/')
def get_discounts():
    discounts = Discount.query.all()
    return jsonify([discount.to_JSON() for discount in discounts])

@discount_routes.route('/', methods=['POST'])
def post_discount():
    discount = Discount(
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
        is_embroidery = request.json['is_embroidery'],
        discount_code = request.json['discount_code'],
        discount_details = request.json['discount_details']
        )
    try:
        db.session.add(discount)
        db.session.commit()
        return jsonify(discount.to_JSON())
    except:
        return make_response({f'errors': ['Error(s) on the discount occurred']}, 400)

@discount_routes.route('/', methods=['PUT'])
def put_discount():
    db.session.query(Discount).filter(Discount.id == request.json['id']).update({
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
        'is_embroidery': request.json['is_embroidery'],
        'discount_code': request.json['discount_code'],
        'discount_details': request.json['discount_details']
    }, synchronize_session='fetch')
    db.session.commit()
    discount = Discount.query.get(request.json['id'])
    if discount:
        return jsonify(discount.to_JSON())
    else:
        return make_response({'errors': ['Edit on non-existent discount']}, 400)

@discount_routes.route('/', methods=['DELETE'])
def delete_discount():
    discount_id = request.json['id']
    discount = Discount.query.get(discount_id)
    if discount:
        db.session.delete(discount)
        db.session.commit()
        return jsonify({'errors': False})
    else:
        return make_response({'errors': ['Delete on non-existent discount']}, 400)

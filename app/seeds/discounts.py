from app.models import db, Discount



def seed_discounts():
    alterknit = Discount(
        name='Alterknit Universe',
        website='https://alterknituniverse.co.uk/',
        instagram='aushopuk',
        country='GB',
        is_yarn=True,
        is_fiber=True,
        is_notions=True,
        is_pattern=True,
        is_knitting=True,
        is_crochet=True,
        is_embroidery=False,
        discount_code='TIREDANDPROUD',
        discount_details='10% off! Online or in person'
    )
    crystalyarn = Discount(
        name='Crystal Yarn',
        website='www.crystalyarn.co.uk',
        instagram='crystalyarn',
        country='GB',
        is_yarn=True,
        is_fiber=False,
        is_notions=True,
        is_pattern=True,
        is_knitting=True,
        is_crochet=False,
        is_embroidery=False,
        discount_code='QQC2022',
        discount_details='15% off all orders'
    )

    db.session.add(alterknit)
    db.session.add(crystalyarn)

    db.session.commit()

def undo_discounts():
    db.session.execute('TRUNCATE discounts RESTART IDENTITY CASCADE;');
    db.session.commit()

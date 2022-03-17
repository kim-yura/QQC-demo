from app.models import db, Maker



def seed_makers():
    knitboop = Maker(
        name='knitboop',
        website='https://knitboop.com/',
        instagram='knitboop',
        country='US',
        is_yarn=False,
        is_fiber=False,
        is_notions=True,
        is_pattern=True,
        is_knitting=True,
        is_crochet=False,
        is_embroidery=False
    )
    audicee = Maker(
        name='Audicee Fiber Arts',
        website='https://payhip.com/AudiceeFiberArts',
        instagram='audiceefiberarts',
        country='US',
        is_yarn=False,
        is_fiber=True,
        is_notions=True,
        is_pattern=True,
        is_knitting=True,
        is_crochet=False,
        is_embroidery=False
    )
    knitcircus = Maker(
        name='Knitcircus Yarns',
        website='https://knitcircus.com/',
        instagram='knitcircus_yarns',
        country='US',
        is_yarn=True,
        is_fiber=False,
        is_notions=True,
        is_pattern=True,
        is_knitting=True,
        is_crochet=False,
        is_embroidery=False
    )
    stranded = Maker(
        name='Stranded Dyeworks',
        website='https://strandeddyeworks.co.uk/',
        instagram='strandeddyeworks',
        country='GB',
        is_yarn=True,
        is_fiber=False,
        is_notions=False,
        is_pattern=False,
        is_knitting=False,
        is_crochet=False,
        is_embroidery=False
    )
    alterknit = Maker(
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
        is_embroidery=False
    )
    sweetsparrow = Maker(
        name='Sweet Sparrow Yarns',
        website='https://sweet-sparrow.com/',
        instagram='sweetsparrowknits',
        country='US',
        is_yarn=True,
        is_fiber=False,
        is_notions=False,
        is_pattern=False,
        is_knitting=False,
        is_crochet=False,
        is_embroidery=False
    )
    xperimentalist = Maker(
        name='The Craft Xperimentalist',
        website='https://www.thecraftxperimentalist.com/',
        instagram='thecraftxperimentalist',
        country='US',
        is_yarn=False,
        is_fiber=False,
        is_notions=True,
        is_pattern=True,
        is_knitting=False,
        is_crochet=False,
        is_embroidery=True
    )

    db.session.add(knitboop)
    db.session.add(audicee)
    db.session.add(knitcircus)
    db.session.add(stranded)
    db.session.add(alterknit)
    db.session.add(sweetsparrow)
    db.session.add(xperimentalist)

    db.session.commit()

def undo_makers():
    db.session.execute('TRUNCATE makers RESTART IDENTITY CASCADE;')
    db.session.commit()

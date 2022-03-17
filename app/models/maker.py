from .db import db



class Maker(db.Model):
    __tablename__ = 'makers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300), nullable=False, unique=True)
    website = db.Column(db.String(300), nullable=False)
    instagram = db.Column(db.String(100))
    country = db.Column(db.String(4), nullable=False)

    is_yarn = db.Column(db.Boolean, nullable=False)
    is_fiber = db.Column(db.Boolean, nullable=False)
    is_notions = db.Column(db.Boolean, nullable=False)

    is_pattern = db.Column(db.Boolean, nullable=False)
    is_knitting = db.Column(db.Boolean, nullable=False)
    is_crochet = db.Column(db.Boolean, nullable=False)
    is_embroidery = db.Column(db.Boolean, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'website': self.website,
            'instagram': self.instagram,
            'country': self.country,
            'is_yarn': self.is_yarn,
            'is_fiber': self.is_fiber,
            'is_notions': self.is_notions,
            'is_pattern': self.is_pattern,
            'is_knitting': self.is_knitting,
            'is_crochet': self.is_crochet,
            'is_embroidery': self.is_embroidery
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'name': self.name,
            'website': self.website,
            'instagram': self.instagram,
            'country': self.country,
            'isYarn': self.is_yarn,
            'isFiber': self.is_fiber,
            'isNotions': self.is_notions,
            'isPattern': self.is_pattern,
            'isKnitting': self.is_knitting,
            'isCrochet': self.is_crochet,
            'isEmbroidery': self.is_embroidery
        }

from .db import db
from datetime import datetime


class Membership(db.Model):
    __tablename__ = 'memberships'

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'), nullable=False)
    member_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    member = db.relationship('User', back_populates='membership')
    group = db.relationship('Group', back_populates='membership')

    def to_dict(self):
        return {
            'id': self.id,
            'group_id': self.group_id,
            'member_id': self.member_id
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'groupId': self.group_id,
            'group': self.group.to_JSON(),
            'memberId': self.member_id,
            'member': self.member.to_JSON()
        }


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(300), nullable=False, unique=True)
    description = db.Column(db.Text, nullable=False)
    banner_image = db.Column(db.String(500), default='https://qqc.s3.amazonaws.com/banner_default.jpg')
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    membership = db.relationship('Membership', back_populates='group')

    def to_dict(self):
        return {
            'id': self.id,
            'owner': self.owner,
            'name': self.name,
            'description': self.description,
            'banner_image': self.banner_image,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'owner': self.owner,
            'name': self.name,
            'description': self.description,
            'bannerImage': self.banner_image,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }

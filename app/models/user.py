from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_pic_url = db.Column(db.String(500), default='https://qqc.s3.amazonaws.com/profilepic_default.png')
    bio = db.Column(db.Text)

    membership = db.relationship('Membership', back_populates='member')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_pic_url': self.profile_pic_url,
            'bio': self.bio
        }

    def to_JSON(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profilePicUrl': self.profile_pic_url,
            'bio': self.bio
        }

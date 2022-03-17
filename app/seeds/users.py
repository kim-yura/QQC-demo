from turtle import pu
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    admin = User(
        username='admin', email='qqc', password='2tired4pride'
    )
    knitboop = User(
        username='knitboop',
        email='knitboop@gmail.com',
        password='2tired4pride',
        profile_pic_url='https://qqc.s3.amazonaws.com/profilepic_1.jpg',
        bio='Just a yarny dev and SWE on the internet'
    )
    knittywitty = User(
        username='knittywitty',
        email='knittywitty@email.com',
        password='password'
    )
    purlsofwisdom = User(
        username='purlsofwisdom',
        email='purlsofwisdom@email.com',
        password='password'
    )
    stitchcraft = User(
        username='stitchcraft',
        email='stitchcraft@email.com',
        password='password'
    )

    db.session.add(admin)
    db.session.add(knitboop)
    db.session.add(knittywitty)
    db.session.add(purlsofwisdom)
    db.session.add(stitchcraft)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

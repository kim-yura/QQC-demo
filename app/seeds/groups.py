from app.models import db, Group



def seed_groups():
    group_1 = Group(
        owner=1,
        name='QQC Admin Chat',
        description='QQC group for admins to make announcements and organize the event'
    )
    group_2 = Group(
        owner=2,
        name="knitboop's KAL Group",
        description="A casual get-together for folks who would like to knit knitboop's patterns!"
    )

    db.session.add(group_1)
    db.session.add(group_2)

    db.session.commit()

def undo_groups():
    db.session.execute('TRUNCATE groups RESTART IDENTITY CASCADE;')
    db.session.commit()

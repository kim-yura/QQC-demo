from app.models import db, Membership



def seed_memberships():
    m_1 = Membership(
        group_id=1,
        member_id=1
    )
    m_2 = Membership(
        group_id=1,
        member_id=2
    )
    m_3 = Membership(
        group_id=2,
        member_id=2
    )
    m_4 = Membership(
        group_id=2,
        member_id=3
    )
    m_5 = Membership(
        group_id=2,
        member_id=4
    )
    m_6 = Membership(
        group_id=2,
        member_id=5
    )

    db.session.add(m_1)
    db.session.add(m_2)
    db.session.add(m_3)
    db.session.add(m_4)
    db.session.add(m_5)
    db.session.add(m_6)

    db.session.commit()

def undo_memberships():
    db.session.execute('TRUNCATE memberships RESTART IDENTITY CASCADE;')
    db.session.commit()

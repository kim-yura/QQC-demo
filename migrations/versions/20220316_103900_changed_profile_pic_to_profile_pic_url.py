"""empty message

Revision ID: 996d4ead0ac5
Revises: bbfa22687152
Create Date: 2022-03-16 10:39:00.342090

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '996d4ead0ac5'
down_revision = 'bbfa22687152'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('profile_pic_url', sa.String(length=500), nullable=True))
    op.add_column('users', sa.Column('bio', sa.Text(), nullable=True))
    op.drop_column('users', 'profile_pic')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('profile_pic', sa.VARCHAR(length=500), autoincrement=False, nullable=True))
    op.drop_column('users', 'bio')
    op.drop_column('users', 'profile_pic_url')
    # ### end Alembic commands ###

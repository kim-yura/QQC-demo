from flask.cli import AppGroup
from .users import seed_users, undo_users
from .makers import seed_makers, undo_makers
from .discounts import seed_discounts, undo_discounts
from .groups import seed_groups, undo_groups
from .memberships import seed_memberships, undo_memberships

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_makers()
    seed_discounts()
    seed_groups()
    seed_memberships()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_makers()
    undo_discounts()
    undo_groups()
    undo_memberships()

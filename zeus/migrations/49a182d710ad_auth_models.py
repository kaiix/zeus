"""auth_models

Revision ID: 49a182d710ad
Revises:
Create Date: 2017-07-02 14:56:16.378519

"""
import zeus
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '49a182d710ad'
down_revision = None
branch_labels = ('default',)
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        'user',
        sa.Column('id', zeus.db.types.GUID(),
                  nullable=False),
        sa.Column('email', sa.String(length=128), nullable=False),
        sa.Column('date_created', sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email')
    )
    op.create_table(
        'identity',
        sa.Column('id', zeus.db.types.GUID(),
                  nullable=False),
        sa.Column('user_id', zeus.db.types.GUID(),
                  nullable=False),
        sa.Column('provider', sa.String(
            length=32), nullable=False),
        sa.Column('date_created', sa.DateTime(), nullable=True),
        sa.Column('config', zeus.db.types.JSONEncodedDict(),
                  nullable=True),
        sa.ForeignKeyConstraint(
            ['user_id'], ['user.id'], ondelete='CASCADE'),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('provider'),
        sa.UniqueConstraint(
            'user_id', 'provider', name='unq_identity_user')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('identity')
    op.drop_table('user')
    # ### end Alembic commands ###

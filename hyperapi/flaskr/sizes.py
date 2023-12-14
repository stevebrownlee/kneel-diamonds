from datetime import datetime
from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from flaskr.db import get_db

bp = Blueprint('sizes', __name__)

@bp.route('/sizes')
def size_list():
    db = get_db()
    sizes = db.execute(
        """
        SELECT id, carets, price FROM Sizes
        """
    ).fetchall()

    return render_template('sizes/list.html', sizes=sizes)
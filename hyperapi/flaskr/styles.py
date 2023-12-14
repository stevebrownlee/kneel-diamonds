from datetime import datetime
from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from flaskr.db import get_db

bp = Blueprint('styles', __name__)

@bp.route('/styles')
def style_list():
    db = get_db()
    styles = db.execute(
        """
        SELECT id, style, price FROM Styles
        """
    ).fetchall()

    return render_template('styles/list.html', styles=styles)
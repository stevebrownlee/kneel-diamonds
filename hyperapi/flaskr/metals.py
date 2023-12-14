from datetime import datetime
from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from flaskr.db import get_db

bp = Blueprint('metals', __name__)

@bp.route('/metals')
def metal_list():
    db = get_db()
    metals = db.execute(
        """
        SELECT id, metal, price FROM Metals
        """
    ).fetchall()

    return render_template('metals/list.html', metals=metals)
from datetime import datetime
import time
from flask import (
    Blueprint, render_template, request, make_response
)
from werkzeug.exceptions import abort

from flaskr.db import get_db

bp = Blueprint('reviews', __name__)

def get_all_reviews():
    db = get_db()
    reviews = db.execute(
        """
        SELECT
            r.id,
            r.timestamp,
            r.author,
            r.body,
            st.style,
            si.carets,
            m.metal
        FROM
            Reviews r
        JOIN
            Orders o on r.orderId = o.id
        JOIN
            Styles st ON o.styleId = st.id
        JOIN
            Sizes si ON o.sizeId = si.id
        JOIN
            Metals m ON o.metalId = m.id
        ORDER BY r.timestamp DESC
        """
    ).fetchall()


    review_list = []
    for review in reviews:
        review_list.append({
            'id': review['id'],
            'metal': review['metal'],
            'body': review['body'],
            'carets': review['carets'],
            'style': review['style'],
            'timestamp': datetime.utcfromtimestamp(review['timestamp'] / 1000).strftime('%Y-%m-%d'),
            'author': review['author']
        })

    return review_list


@bp.route('/productreviews')
def review_page():
    html_content = render_template('reviews.html')
    response = make_response(html_content)
    return response

@bp.route('/reviews')
def review_list():
    reviews = get_all_reviews()

    html_content = render_template('reviews/list.html', reviews=reviews)
    response = make_response(html_content)
    return response

@bp.route('/reviews', methods=['POST'])
def create_review():
    # Get data from the POST request
    metal = int(request.form.get('metal'))
    style = int(request.form.get('style'))
    size = int(request.form.get('size'))
    now = int(time.time() * 1000)

    db = get_db()
    db.execute("""
        INSERT INTO `Reviews` (metalId, styleId, sizeId, timestamp)
        VALUES (?, ?, ?, ?)
        """,
        (metal, style, size, now)
    )
    db.commit()

    response = make_response('', 204)
    response.headers['HX-Trigger'] = 'ReviewCreated'

    return response

from datetime import datetime
import time
from flask import (
    Blueprint, render_template, request, make_response
)
from werkzeug.exceptions import abort

from flaskr.db import get_db

bp = Blueprint('orders', __name__)

def get_all_orders():
    db = get_db()
    orders = db.execute(
        """
        SELECT
            o.id AS order_id,
            st.style AS style,
            si.carets AS size_carets,
            m.metal AS metal,
            o.timestamp AS order_timestamp
        FROM
            Orders o
        JOIN
            Styles st ON o.styleId = st.id
        JOIN
            Sizes si ON o.sizeId = si.id
        JOIN
            Metals m ON o.metalId = m.id
        ORDER BY o.timestamp DESC
        """
    ).fetchall()


    order_list = []
    for order in orders:
        order_list.append({
            'id': order['order_id'],
            'metal': order['metal'],
            'size_carets': order['size_carets'],
            'style': order['style'],
            'timestamp': datetime.utcfromtimestamp(order['order_timestamp'] / 1000).strftime('%Y-%m-%d')
        })

    return order_list


@bp.route('/orders')
def order_list():
    orders = get_all_orders()

    html_content = render_template('orders/list.html', orders=orders)
    response = make_response(html_content)
    return response

@bp.route('/orders/<int:id>', methods=['DELETE'])
def delete_order(id):
    db = get_db()
    db.execute("""
        DELETE FROM `Orders` WHERE id = ?
        """,
        (id, )
    )
    db.commit()

    response = make_response('', 204)
    response.headers['HX-Trigger'] = 'OrderDeleted'

    return response


@bp.route('/orders', methods=['POST'])
def create_order():
    # Get data from the POST request
    now = int(time.time() * 1000)
    try:
        metal = int(request.form.get('metal'))
        style = int(request.form.get('style'))
        size = int(request.form.get('size'))
    except TypeError:
        response = make_response('<section>Please choose all options</section>', 400)
        return response

    db = get_db()
    db.execute("""
        INSERT INTO `Orders` (metalId, styleId, sizeId, timestamp)
        VALUES (?, ?, ?, ?)
        """,
        (metal, style, size, now)
    )
    db.commit()

    response = make_response('', 204)
    response.headers['HX-Trigger'] = 'OrderCreated'

    return response

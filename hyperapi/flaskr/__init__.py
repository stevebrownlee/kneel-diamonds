import os

from flask import Flask, render_template

from . import db, orders, metals, styles, sizes, reviews


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='SIzktT9JQ6vh6le',
        DATABASE=os.path.join(app.instance_path, 'kneel.db'),
    )
    db.init_app(app)
    app.register_blueprint(orders.bp)
    app.register_blueprint(metals.bp)
    app.register_blueprint(sizes.bp)
    app.register_blueprint(styles.bp)
    app.register_blueprint(reviews.bp)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def index():
        return render_template('index.html')


    return app
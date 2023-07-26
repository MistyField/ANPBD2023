from flask import Flask, render_template
from flask_compress import Compress
from os import path

template_folder = path.abspath('./template')
static_folder = path.abspath('./static')
app = Flask(__name__, template_folder=template_folder, static_folder=static_folder, static_url_path='')
Compress(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<page>')
def pages(page):
    if '.html' in page:
        return render_template(page.lower())
    if '.' in page and 'html' not in page:
        return app.send_static_file(page)
    return render_template( page.lower() + '.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')

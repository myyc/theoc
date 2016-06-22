from flask import Flask
from flask.templating import render_template

app = Flask(__name__)


@app.route("/comps")
@app.route("/comps/<int:season>")
def comps(season=2015):
    return render_template("index.html", season=season, feed="comps")

@app.route("/teams")
@app.route("/teams/<int:comp>")
@app.route("/teams/<int:comp>/<int:season>")
def teams(comp=21, season=2015):
    return render_template("index.html", comp=comp, season=season, feed="teams")


@app.route("/matches")
@app.route("/matches/<int:comp>")
@app.route("/matches/<int:comp>/<int:season>")
def matches(comp=21, season=2015):
    return render_template("index.html", comp=comp, season=season, feed="matches")


#@app.route("/js/<path:path>")
#def send_js(path):
#    return render_template("js/" + path)


app.run()

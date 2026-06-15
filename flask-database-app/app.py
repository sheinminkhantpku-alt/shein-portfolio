from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)


def init_db():
    conn = sqlite3.connect("sample.db")
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS people (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            mbti TEXT NOT NULL,
            intro TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


@app.route("/", methods=["GET", "POST"])
def form():
    if request.method == "POST":
        name = request.form.get("name")
        mbti = request.form.get("mbti")
        intro = request.form.get("intro")

        if name == "" or mbti == "" or intro == "":
            return render_template("error.html")

        conn = sqlite3.connect("sample.db")
        cur = conn.cursor()

        cur.execute(
            "INSERT INTO people (name, mbti, intro) VALUES (?, ?, ?)",
            (name, mbti, intro)
        )

        conn.commit()
        conn.close()

        return redirect("/list")

    return render_template("form.html")


@app.route("/list")
def show_list():
    conn = sqlite3.connect("sample.db")
    cur = conn.cursor()

    cur.execute("SELECT id, name, mbti, intro FROM people")
    people = cur.fetchall()

    conn.close()

    return render_template("list.html", people=people)


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
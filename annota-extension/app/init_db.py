import sqlite3

connection = sqlite3.connect('database.db')

with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO files (title, content) VALUES (?, ?)",
            ('Test', 'lorem ipsum')
            )

cur.execute("INSERT INTO files (title, content) VALUES (?, ?)",
            ('Test 2', 'lorem ipsum')
            )

connection.commit()
connection.close()
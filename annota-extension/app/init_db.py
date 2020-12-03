import sqlite3

connection = sqlite3.connect('database.db')

with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO files (title, content) VALUES (?, ?)",
            ('A Charter Statement also identifies potential justifications...', 'See Charter Article 1')
            )

cur.execute("INSERT INTO files (title, content) VALUES (?, ?)",
            ('The purpose of the Accessible Canada Act is to benefit all persons...', 'Test annotation.')
            )

cur.execute("INSERT INTO files (title, content) VALUES (?, ?)",
        ('The Minister of Justice has examined Bill C-81, An Act to ensure a barrier-free Canada ("Accessible Canada Act"), for consistency with the Charter pursuant to her obligation under section 4.1 of the Department of Justice Act. .', 'Department of Justice Act: https://laws-lois.justice.gc.ca/eng/acts/j-2/index.html')
        )

connection.commit()
connection.close()

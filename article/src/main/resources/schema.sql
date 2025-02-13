CREATE TABLE article (
                         id SERIAL PRIMARY KEY,
                         title VARCHAR(255) NOT NULL,
                         content TEXT NOT NULL,
                         author VARCHAR(255) NOT NULL,
                         type VARCHAR(50),
                         active BOOLEAN DEFAULT FALSE,
                         created_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
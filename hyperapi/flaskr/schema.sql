DROP TABLE IF EXISTS Styles;
DROP TABLE IF EXISTS Sizes;
DROP TABLE IF EXISTS Metals;
DROP TABLE IF EXISTS Orders;

-- Create the Styles table
CREATE TABLE Styles (
    id INTEGER PRIMARY KEY,
    style TEXT NOT NULL,
    price REAL NOT NULL
);

-- Insert data into the Styles table
INSERT INTO Styles (id, style, price) VALUES
(1, 'Classic', 500),
(2, 'Modern', 710),
(3, 'Vintage', 965);

-- Create the Sizes table
CREATE TABLE Sizes (
    id INTEGER PRIMARY KEY,
    carets REAL NOT NULL,
    price REAL NOT NULL
);

-- Insert data into the Sizes table
INSERT INTO Sizes (id, carets, price) VALUES
(1, 0.5, 405),
(2, 0.75, 782),
(3, 1, 1470),
(4, 1.5, 1997),
(5, 2, 3638);

-- Create the Metals table
CREATE TABLE Metals (
    id INTEGER PRIMARY KEY,
    metal TEXT NOT NULL,
    price REAL NOT NULL
);

-- Insert data into the Metals table
INSERT INTO Metals (id, metal, price) VALUES
(1, 'Sterling Silver', 12.42),
(2, '14K Gold', 736.4),
(3, '24K Gold', 1258.9),
(4, 'Platinum', 795.45),
(5, 'Palladium', 1241);

-- Create the Orders table
CREATE TABLE Orders (
    id INTEGER PRIMARY KEY,
    metalId INTEGER NOT NULL,
    sizeId INTEGER NOT NULL,
    styleId INTEGER NOT NULL,
    timestamp INTEGER NOT NULL
);

-- Insert data into the Orders table
INSERT INTO Orders (id, metalId, sizeId, styleId, timestamp) VALUES
(1, 3, 2, 3, 1614659931693),
(2, 3, 1, 3, 1613549931693), -- Replace NULL with the actual timestamp
(3, 5, 2, 1, 1612439831693), -- Replace NULL with the actual timestamp
(4, 3, 4, 2, 1611329731693), -- Replace NULL with the actual timestamp
(5, 5, 5, 3, 1610219631693), -- Replace NULL with the actual timestamp
(6, 1, 1, 1, 1609109531693), -- Replace NULL with the actual timestamp
(7, 5, 2, 1, 1608059431693); -- Replace NULL with the actual timestamp

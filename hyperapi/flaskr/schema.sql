DROP TABLE IF EXISTS Styles;
DROP TABLE IF EXISTS Sizes;
DROP TABLE IF EXISTS Metals;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Reviews;

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
(2, 3, 1, 3, 1613549931693),
(3, 5, 2, 1, 1612439831693),
(4, 3, 4, 2, 1611329731693),
(5, 5, 5, 3, 1610219631693),
(6, 1, 1, 1, 1609109531693),
(7, 5, 2, 1, 1608059431693);

CREATE TABLE Reviews (
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    author TEXT NOT NULL,
    timestamp INTEGER NOT NULL,
    orderId INTEGER NOT NULL,
    FOREIGN KEY(`orderId`) REFERENCES `Orders`(`id`)
);

INSERT INTO Reviews (id, body, author, timestamp, orderId) VALUES
(1, 'Totam et qui numquam impedit vero unde unde ea vero. Debitis odit alias repellat excepturi corrupti dolorum vitae. Necessitatibus repellendus harum quia esse qui voluptatum. Est vel nihil maiores et quia nemo.', 'Mabel Kertzmann', 1614659931693, 5),
(2, 'Est rerum ducimus possimus voluptate. Dolore rerum dolor voluptatem exercitationem. Magnam pariatur aperiam laboriosam earum. Quod sit facilis sit voluptatem voluptas et harum et molestiae. Sit consequatur qui labore temporibus maiores. Sint tempore amet vero ut consequatur mollitia vero.', 'Colleen McKenzie', 1613549931693, 3),
(3, 'Inventore dolores totam suscipit nulla impedit aut. Officia cum reprehenderit veniam et. Molestiae et eius omnis ab. Ut ut repellat voluptatem repellendus iure. Qui eaque veniam consequatur numquam aut.', 'Mr. Roland Rau', 1612439831693, 6),
(4, 'Veniam aut reprehenderit fuga ad omnis. Quia adipisci blanditiis. Et neque perferendis aut dolore cupiditate fugit. Voluptatem quis eos ad repudiandae vel voluptatem rerum aut. Reiciendis ipsum eius qui possimus quibusdam qui nostrum.', 'Ronald Cremin', 1611329731693, 2)
;


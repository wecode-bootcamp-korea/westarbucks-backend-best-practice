CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  korean_name VARCHAR(200) UNIQUE NOT NULL,
  english_name VARCHAR(200) NULL,
  category_id INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id)
)

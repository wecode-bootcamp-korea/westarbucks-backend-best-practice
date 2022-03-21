CREATE TABLE allergies(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

CREATE TABLE product_allergies (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  allergy_id INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  CONSTRAINT product_allergies_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
  CONSTRAINT product_allergies_allergy_id_fkey FOREIGN KEY (allergy_id) REFERENCES allergies(id)
);
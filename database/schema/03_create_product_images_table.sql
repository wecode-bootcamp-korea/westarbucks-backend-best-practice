CREATE TABLE product_images (
  id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(3000) NOT NULL,
  product_id INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  CONSTRAINT images_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
)

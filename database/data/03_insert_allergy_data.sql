INSERT INTO allergies (
	id,
	name
)
VALUES
	(1, "우유"),
	(2, "복숭아"),
	(3, "대두"),
	(4, "밀"),
	(5, "오징어")
;

INSERT INTO product_allergies (
	id,
	product_id,
	allergy_id
)
VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 2, 1),
	(4, 2, 3),
	(5, 4, 1),
	(6, 5, 4),
	(7, 6, 1),
	(8, 6, 4)
;
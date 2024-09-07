INSERT INTO PRODUTO VALUES
('RF000002', 'Red Fruits bosque', 'Lata', '350ml', 'Amora', 2.80, 'Red Fruits'),
('RF000003', 'Red Fruits bosque', 'Litro', '1L', 'Mirtilos', 7.00, 'Red Fruits'),
('RF000004', 'Red Fruits bosque', 'Lata', '400ml', 'Jabuticaba', 3.10, 'Red Fruits'),
('RF000005', 'Red Fruits bosque', 'Litro', '1.5l', 'Graviola ', 8.55, 'Red Fruits'),
('RF000006', 'Red Fruits bosque', 'Lata', '450ml', 'Cupuaçu ', 3.20, 'Red Fruits'),
('RF000007', 'Red Fruits bosque', 'Lata', '500ml', 'Açaí ', 4.50, 'Red Fruits')
GO


INSERT INTO ESTOQUE VALUES
(12, 'RF000001', 50, 'Red Fruits', 2.80),
(13, 'RF000002', 50, 'Red Fuits', 2.00),
(14, 'RF000003', 50, 'Red Fuits', 5.00),
(15, 'RF000004', 30, 'Red Fuits', 2.20),
(16, 'RF000005', 20, 'Red Fuits', 6.10),
(17, 'RF000006', 50, 'Red Fuits', 2.30)
GO

SELECT * FROM ESTOQUE 
GO
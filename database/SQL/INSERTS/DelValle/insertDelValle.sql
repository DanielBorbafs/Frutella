
-- INSERTS NA TABELA PRODUTO 

 -- LINHA KAPO
INSERT INTO PRODUTO VALUES 
( 'DEL00000', 'Del valle Kapo Uva', 'Caixinha', '200ml', 'Uva', 2.65, 'Del Valle'),
( 'DEL00001', 'Del valle Kapo Morango', 'Caixinha', '200ml', 'Morango', 2.65, 'Del Valle')
Go

-- Linha Litro 350ml
INSERT INTO PRODUTO VALUES 
( 'DEL00002', 'Del valle Sabor Laranja', 'Litro', '350ml', 'Laranja', 3.29, 'Del Valle'),
( 'DEL00003', 'Del valle Kapo Uva', 'Litro', '350ml', 'Uva', 3.29, 'Del Valle'),
( 'DEL00004', 'Del valle Kapo Caju', 'Litro', '350ml', 'Caju', 3.29, 'Del Valle')
Go

-- Linha 1L
INSERT INTO PRODUTO VALUES 
( 'DEL00005', 'Del valle Sabor Uva', 'Litro', '1L', 'Uva', 6.20 , 'Del Valle'),
( 'DEL00006', 'Del valle Kapo Goiaba', 'Litro', '1L', 'Goiaba', 6.20, 'Del Valle'),
( 'DEL00007', 'Del valle Kapo Manga', 'Litro', '1L', 'Manga', 6.20, 'Del Valle')
Go

/*---------------------------------------------------------------*/

-- INSERTS NA TABELA ESTOQUE 

INSERT INTO ESTOQUE VALUES 
(2, 'DEL00000', 50, 'Del Valle', 1.89),
(3, 'DEL00001', 50, 'Del Valle', 1.89)
GO

INSERT INTO ESTOQUE VALUES 
(4, 'DEL00002', 50, 'Del Valle', 2.35),
(5, 'DEL00003', 50, 'Del Valle', 2.35),
(6, 'DEL00004', 50, 'Del Valle', 2.35)
GO

INSERT INTO ESTOQUE VALUES 
(7, 'DEL00005', 50, 'Del Valle', 4.45),
(8, 'DEL00006', 50, 'Del Valle', 4.45),
(9, 'DEL00007', 50, 'Del Valle', 4.45)
GO
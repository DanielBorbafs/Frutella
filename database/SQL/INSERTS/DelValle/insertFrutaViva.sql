-- Insert na Tabela de produto

-- FRUTAVIVA

-- LINHA SUCO MANGO

--- INSERT NA TABELA DE PRODUTO
INSERT INTO PRODUTO VALUES 
( 'FTV00000', 'Frutaviva Mango Tango', 'Litro', '600ml', 'Manga', 5.90,'Frutaviva'),
('FTV00001', 'Frutaviva Melon Melody', 'Lata', '350ml', 'Melão', 4.50, 'Frutaviva')
Go

-- INSERT NA TABELA DE ESTOQUE
INSERT INTO ESTOQUE VALUES 
(10, 'FTV00000', 35, 'Frutaviva', 4.19),
(11, 'FTV00001', 40, 'Frutaviva', 3.20)
GO

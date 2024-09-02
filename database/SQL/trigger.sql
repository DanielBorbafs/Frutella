/* Criando uma trigger para quando um item for
vendido ele automaticamente ser diminuido no estoque */

CREATE TRIGGER AtualizarEstoque
on [ITENS VENDAS]
AFTER INSERT 
AS 
BEGIN
	-- Atualiza o estoque com base nasa informações inseridas
	UPDATE ESTOQUE 
	SET QUANTIDADE = ESTOQUE.QUANTIDADE - inserted.QUANTIDADE
	FROM ESTOQUE 
	INNER JOIN inserted ON ESTOQUE.[CODIGO DO PRODUTO] = inserted.[CODIGO DO PRODUTO]
	WHERE inserted.[ID ITEM VENDA] = inserted.[ID ITEM VENDA];
END;
GO

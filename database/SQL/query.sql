-- Filtrar código do produto, preço de VENDA e qtd no estoque
SELECT E.[CODIGO DO PRODUTO],E.QUANTIDADE, P.[PRECO UNITARIO]
FROM ESTOQUE E
INNER JOIN PRODUTO P
ON E.[CODIGO DO PRODUTO] = P.[CODIGO DO PRODUTO]
WHERE E.QUANTIDADE > 0
GO

-- AGRUPANDO AS VENDAS POR CODIGO PARA MOSTRAR QUAL PRODUTO FOI MAIS VENDIDO
SELECT [CODIGO DO PRODUTO], SUM(SUBTOTAL) AS [VALOR TOTAL]
FROM [ITENS VENDAS]
GROUP BY [CODIGO DO PRODUTO]
WITH ROLLUP -- WITH ROLLUP no SQL Server é usado para gerar subtotais e um total geral quando utiliza o GROUP BY em uma consulta.
GO

/*
Criar uma query com CASE e THEN que vai trazer os clientes
 e classificar por poder de compra:
ex: um cliente tem um limite de 800 reais de credito na loja classifique-o
 como “NÍVEL BAIXO” e assim por diante.
*/
SELECT NOME, [LIMITE DE COMPRA],
    CASE
        WHEN [LIMITE DE COMPRA] <= 800 THEN 'LIMITE BAIXO'
        WHEN [LIMITE DE COMPRA] BETWEEN 801 AND 1500 THEN 'LIMITE MÉDIO'
        ELSE 'LIMITE ALTO'
    END AS [PODER DE COMPRA] 
FROM CLIENTES 
ORDER BY [LIMITE DE COMPRA ]

-- Query que vai traçar o tipo de embalagem que mais vendeu.
SELECT 
    COUNT(V.[CODIGO DO PRODUTO]) AS [QUANTIDADE VENDIDA], P.[EMBALAGEM]
FROM [ITENS VENDAS] V
INNER JOIN PRODUTO P
ON V.[CODIGO DO PRODUTO] = P.[CODIGO DO PRODUTO]
GROUP BY 
    P.[EMBALAGEM]
GO

-- Query que traz o cliente que fez a maior compra
SELECT TOP 1 [CPF CLIENTE], TOTAL
FROM VENDAS
ORDER BY TOTAL DESC;
GO
-- Criar uma query que vai retornar os dados de quem tem conta cadastrada porém nunca comprou no app;
SELECT CPF, NOME, CELULAR
FROM CLIENTES 
WHERE [PRIMEIRA COMPRA] = 0 
GO
 
-- Criar uma query que irá trazer quais marcas foram vendidas e os valores
SELECT 
    I.[CODIGO DO PRODUTO], 
    SUM(I.[SUBTOTAL]) AS [VALOR TOTAL VENDIDO],
    QUANTIDADE
FROM 
    [ITENS VENDAS] I
GROUP BY 
    I.[CODIGO DO PRODUTO], QUANTIDADE
ORDER BY 
    [VALOR TOTAL VENDIDO] DESC; 
GO

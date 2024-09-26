import pyodbc

dados_conexao = (
    "Driver={SQL Server};"
    "Server=ESN123DXXXXXX;"
    "Database=linceia;"
)

conexao = pyodbc.connect(dados_conexao)
print("Conexão Funcionano papae 😜")

cursor = conexao.cursor()
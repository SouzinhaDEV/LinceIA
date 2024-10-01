import pyodbc

# host: 'localhost', // Host do banco de dados
# user: 'root', // Usuário do banco de dados
# password: 'Desenvolvedor@123', // Senha do banco de dados
# database: 'linceia' // Nome do banco de dados
  
dados_conexao = (
    "Driver={SQL Server};"
    "Server=ESN123DXXXXXX;"
    "Database=linceia;"
    # f'UID={'root'};'
    # f'PWD={'Desenvolvedor@123'};'
)

conexao = pyodbc.connect(dados_conexao)
print("Conexão Funcionano papae 😜")

cursor = conexao.cursor()
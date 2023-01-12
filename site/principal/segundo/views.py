from django.shortcuts import render
from segundo import envia_email

login = 'jefferson.programador.pro@gmail.com'
assunto = 'Criando Software'
texto_principal = """<p>Obrigado pelo contato, em breve retornaremos</p>"""
# Create your views here.
def index(request):
    if request.method == 'POST':
        nome = request.POST['username']
        email = request.POST['useremail']
        telefone = request.POST['telefone']
        envia_email.email_go(
            login=login,
            destino=email,
            assunto=assunto,
            texto=texto_principal)
    
    return render(request, 'loginFormce71.html')
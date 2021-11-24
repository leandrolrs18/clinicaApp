from django.db import models

# Create your models here.
class Paciente(models.Model):
    nome = models.CharField(max_length=50)
    telefone = models.CharField(max_length=12)
    email = models.CharField(max_length=50)
    cpf = models.CharField(max_length=50)
    senha = models.CharField(max_length=20) 

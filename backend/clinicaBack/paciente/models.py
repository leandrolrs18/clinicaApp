from django.db import models
from django.urls import reverse # Used to generate URLs by reversing the URL patterns
import uuid
from django.utils.translation import gettext as _
# Create your models here.

class Usuario(models.Model):
    """Model representing a book genre."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(max_length=100, blank=True, verbose_name=_('Nome'))
    cpf = models.CharField( max_length=15, blank=True, unique=True, verbose_name=_('CPF'))
    senha = models.CharField(max_length=32, blank=True, verbose_name=_('Senha'))
    telefone = models.CharField(max_length=15, blank=True, verbose_name=_('Telefone'))
    Ehmedico = models.BooleanField(default=False, blank=True, verbose_name='Medico?')
    especialidade = models.CharField(max_length=25, blank=True, verbose_name=_('Especialidade'))

    def __str__(self):
        """String for representing the Model object."""
        return self.nome

    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('Usuario-detail', args=[str(self.id)])

class Paciente(models.Model):
    """Model representing a book genre."""
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE, null=True)

    def __str__(self):
        """String for representing the Model object."""
        return self.usuario.nome

    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('Paciente-detail', args=[str(self.usuario.id)])

class Medico(models.Model):
    """Model representing a book genre."""
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE, null=True)

    def __str__(self):
        """String for representing the Model object."""
        return self.usuario.nome

    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('Medico-detail', args=[str(self.usuario.id)])

class Consulta(models.Model):
    """Model representing a book genre."""
    especialidade = models.CharField(max_length=25, blank=True, verbose_name=_('Especialidade'))
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    data = models.DateTimeField( blank=True, verbose_name=_('Data da consulta'))
    medico = models.ForeignKey('Medico', on_delete=models.SET_NULL, null=True)
    paciente = models.ForeignKey('Paciente', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.paciente.usuario.nome} {self.medico.usuario.nome} {self.data}'

    def get_absolute_url(self):
        """Returns the url to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
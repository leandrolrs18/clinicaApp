from django.contrib import admin

# Register your models here.
from paciente.models import Usuario, Paciente, Medico, Consulta

admin.site.register(Usuario)
admin.site.register(Paciente)
admin.site.register(Medico)
admin.site.register(Consulta)

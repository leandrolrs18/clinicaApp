# Generated by Django 3.2.9 on 2021-12-02 03:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('paciente', '0006_alter_usuario_especialidade'),
    ]

    operations = [
        migrations.RenameField(
            model_name='medico',
            old_name='medico',
            new_name='usuario',
        ),
        migrations.RenameField(
            model_name='paciente',
            old_name='paciente',
            new_name='usuario',
        ),
    ]

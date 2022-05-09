# Generated by Django 4.0 on 2022-05-06 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='JobPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=60)),
                ('date', models.DateField()),
                ('jobtitle', models.CharField(max_length=60)),
                ('jobtype', models.CharField(max_length=60)),
                ('qualification', models.CharField(max_length=60)),
                ('min_year', models.IntegerField()),
                ('duration', models.IntegerField()),
                ('location', models.CharField(max_length=60)),
                ('requirements', models.CharField(max_length=60)),
                ('description', models.CharField(max_length=60)),
            ],
        ),
    ]

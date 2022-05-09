from django.db import models
import json

# Create your models here.
class JobPost(models.Model):
    #company=models.CharField(max_length=60)
    category = models.CharField(max_length=60)
    date = models.DateField()
    jobtitle = models.CharField(max_length=60)
    jobtype = models.CharField(max_length=60)
    qualification = models.CharField(max_length=60)
    min_year = models.IntegerField()
    duration = models.IntegerField()
    location = models.CharField(max_length=60)
    #stipend=models.IntegerField()
    requirements = models.CharField(max_length=60)
    description = models.CharField(max_length=60)

    def __str__(self):
        return self.category

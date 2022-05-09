from django.contrib import admin
#from import_export.admin import ImportExportModelAdmin
from .models import JobPost
# Register your models here.
#@admin.register(JobPost)
#class jobs(ImportExportModelAdmin):
#    pass
#admin.register(JobPost)



admin.site.register(JobPost)

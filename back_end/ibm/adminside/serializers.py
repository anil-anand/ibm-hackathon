from rest_framework import serializers
from adminside.models import JobPost

class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobPost
        fields=("category","date","jobtitle","jobtype","qualification","min_year","duration","location","requirements","description")

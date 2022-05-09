from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name="home"),
    path('jobPost.html',views.post, name="post"),
    path('search.html',views.jobsearch,name="jobsearch"),
    #path('search.html',views.Search,name="Search"),
]

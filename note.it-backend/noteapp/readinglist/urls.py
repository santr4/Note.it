from django.urls import include, re_path as url, path
from rest_framework.routers import DefaultRouter
from . import views


urlpatterns = [
    url(r"add_readinglist/$", views.add_readinglist, name="add_readinglist"),
    url(r"get_readinglist/$", views.get_readinglist, name="get_readinglist"),
    url(r"delete_readinglist/$", views.delete_readinglist, name="delete_readinglist"),
]

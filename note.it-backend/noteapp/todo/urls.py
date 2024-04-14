from django.urls import include, re_path as url, path
from rest_framework.routers import DefaultRouter
from . import views

# router = DefaultRouter()
# router.register(r"todos", TodoItemViewset)

urlpatterns = [
    url(r"add_todos/$", views.add_todos, name="add_todos"),
    url(
        r"get_todos/$",
        views.get_todos,
        name="get_todos",
    ),
]

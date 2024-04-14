from django.shortcuts import render
from rest_framework import viewsets
from .models import TodoItem
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.utils.timezone import now

# from .serializers import TodoItemSerializer
from .models import TodoItem

# Create your views here.

# class TodoItemViewset(viewsets.ModelViewSet):
#     queryset = TodoItem.objects.all()
#     serializer_class = TodoItemSerializer


@api_view(["POST"])
@csrf_exempt
def add_todos(request):
    res = request.data
    models = TodoItem.objects.create(
        title=res["title"], completed=res["completed"], created_at=now()
    )
    models.save()

    return JsonResponse({"status": 201, "message": "Saved Todos"})


@api_view(["GET"])
@csrf_exempt
def get_todos(request):
    user = request.user
    req = request.GET
    res = TodoItem.objects.all()
    return JsonResponse({"status": 200, "data": [todo.to_dict() for todo in res]})

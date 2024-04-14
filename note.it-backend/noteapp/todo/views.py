from django.shortcuts import render
from rest_framework import viewsets
from .models import TodoItem
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.utils.timezone import now
import json
from django.contrib.auth.models import User

# from .serializers import TodoItemSerializer
from .models import TodoItem
import uuid

# Create your views here.

# class TodoItemViewset(viewsets.ModelViewSet):
#     queryset = TodoItem.objects.all()
#     serializer_class = TodoItemSerializer


@api_view(["POST"])
@csrf_exempt
def add_todos(request):
    res = request.data
    models = TodoItem.objects.create(
        taskid=uuid.uuid4(),
        title=res["title"],
        completed=res["completed"],
        created_at=now(),
    )
    models.save()

    return JsonResponse({"status": 201, "message": "Saved Todos"})


@api_view(["GET"])
@csrf_exempt
def get_todos(request):
    user = request.user
    req = request.GET
    res = TodoItem.objects.all()
    return JsonResponse({"status": 200, "data": [todo.dict for todo in res]})


@api_view(["DELETE"])
@csrf_exempt
def delete_todos(request):
    user = request.user
    headers = request.headers

    request_info = headers["x-request-info"]
    try:
        todo = TodoItem.objects.get(pk=request_info)
    except TodoItem.DoesNotExist:
        return JsonResponse({"status": 404, "message": "Todo not found"}, status=404)

    todo.delete()
    return JsonResponse(
        {"status": 204, "message": "Todo deleted succesfully"}, status=204
    )

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from readinglist.models import ReadingItem
from readinglist.serializers import ReadingItemSerializer
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import uuid
from django.utils import timezone
import json


# Create your views here.


@api_view(["POST"])
@csrf_exempt
def add_readinglist(request):
    try:
        user = request.user
        req = request.data
        req["task_id"] = uuid.uuid4()
        req["created"] = timezone.now()
        print(req, "santr2")
        serializer = ReadingItemSerializer(data=req)
        print(serializer)
        print(serializer.is_valid(), "santra1")
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({"status": 201, "data": serializer.data})
    except Exception as e:
        return JsonResponse({"status": 500, "data": serializer.errors})


@api_view(["GET"])
@csrf_exempt
def get_readinglist(request):
    try:
        user = request.user
        readinglist = ReadingItem.objects.all()
        serializer = ReadingItemSerializer(readinglist, many=True)
        return JsonResponse({"status": 200, "data": serializer.data})
    except Exception as e:
        if serializer.is_valid():
            return JsonResponse({"status": 500, "data": serializer.errors})


@api_view(["DELETE"])
@csrf_exempt
def delete_readinglist(request):
    try:
        user = request.user
        req = json.loads(request.body)
        delete_id: str = req["task_id"]
        readinglist = ReadingItem.objects.all()
        readinglist.delete()
        return JsonResponse(
            {"status": 204, "data": "task deleted of id: {}".format(delete_id)}
        )
    except Exception as e:
        return JsonResponse({"status": 500, "data": "reading item not deleted"})

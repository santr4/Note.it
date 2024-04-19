from rest_framework import serializers
from readinglist.models import ReadingItem
from rest_framework.settings import api_settings

import uuid


class ReadingItemSerializer(serializers.Serializer):
    task_id = serializers.CharField(read_only=True)
    created = serializers.DateTimeField(format=api_settings.DATETIME_FORMAT)
    title = serializers.CharField(required=True, allow_blank=False, max_length=100)
    author = serializers.CharField(required=True, allow_blank=False, max_length=100)

    def create(self, validated_data):
        return ReadingItem.objects.create(
            **validated_data
        )  # here we are creating a new instance of the class ReadingItem.

    # here we update and return an existing 'ReadingItem' instance, given the validated_data.
    def update(self, instance, validated_data):
        instance.task_id = validated_data.get("task_id", instance.task_id)
        instance.created = validated_data.get("created", instance.created)
        instance.title = validated_data.get("title", instance.title)
        instance.author = validated_data.get("author", instance.author)
        instance.save()
        return instance

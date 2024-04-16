from django.db import models
import uuid

# Create your models here.


class ReadingItem(models.Model):
    task_id = models.CharField(
        max_length=100,
        primary_key=True,
        default=uuid.uuid4(),
    )
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True)
    author = models.CharField(max_length=100, blank=True)

    class Meta:
        ordering = ["created"]

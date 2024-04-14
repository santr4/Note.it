import uuid
from django.db import models

# Create your models here.


class TodoItem(models.Model):
    taskid = models.CharField(max_length=50, primary_key=True, default=uuid.uuid4())
    title = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    @property
    def dict(self):
        return {
            "taskid": self.taskid,
            "title": self.title,
            "completed": self.completed,
            "created_at": self.created_at,
        }

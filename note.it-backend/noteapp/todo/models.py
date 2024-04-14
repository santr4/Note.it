from django.db import models

# Create your models here.


class TodoItem(models.Model):
    title = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def to_dict(self):
        return {
            "title": self.title,
            "completed": self.completed,
            "created_at": self.created_at,
        }

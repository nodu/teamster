from django.db import models

ROLE_CHOICES = [
    ("regular", "Regular"),
    ("admin", "Admin"),
]


class TeamMember(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default="regular")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

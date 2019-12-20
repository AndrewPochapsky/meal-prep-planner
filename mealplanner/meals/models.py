from django.db import models

class Meal(models.Model):
    name = models.CharField(max_length=100)

class Step(models.Model):
    meal = models.ForeignKey(Meal, related_name='steps',  on_delete=models.CASCADE)
    step_number = models.IntegerField()
    description = models.CharField(max_length=500)
    

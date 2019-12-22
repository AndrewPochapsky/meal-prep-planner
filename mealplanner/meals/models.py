from django.db import models

#TODO: Add image field later one
class Meal(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(blank = True, max_length=500)
    preparation_time = models.IntegerField() 

class Step(models.Model):
    meal = models.ForeignKey(Meal, related_name='steps',  on_delete=models.CASCADE)
    step_number = models.IntegerField()
    description = models.CharField(max_length=500)

    class Meta:
        ordering = ['step_number']

from meals.models import Meal, Step
from rest_framework import viewsets, permissions
from .serializers import MealSerializer, StepSerializer 

# Meal viewset
class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MealSerializer


class StepViewSet(viewsets.ModelViewSet):
    queryset = Step.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StepSerializer

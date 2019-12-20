from meals.models import Meal
from rest_framework import viewsets, permissions
from .serializers import MealSerializer

# Meal viewset
class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MealSerializer

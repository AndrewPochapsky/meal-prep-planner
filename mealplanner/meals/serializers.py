from rest_framework import serializers
from meals.models import Meal, Step 

# Meal Serializer
class MealSerializer(serializers.ModelSerializer):
    steps  = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Meal
        fields = ['name', 'steps']

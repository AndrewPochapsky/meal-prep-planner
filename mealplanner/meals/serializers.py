from rest_framework import serializers
from meals.models import Meal 

# Meal Serializer
class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = '__all__'

    


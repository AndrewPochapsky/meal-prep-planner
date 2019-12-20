from rest_framework import serializers
from meals.models import Meal, Step 

# Meal Serializer
class MealSerializer(serializers.ModelSerializer):
    steps  = serializers.StringRelatedField(many=True)
    class Meta:
        model = Meal
        fields = ['name', 'steps']
"""
# Step Serializer
class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = '__all__'
"""

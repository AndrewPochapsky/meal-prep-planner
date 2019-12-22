from rest_framework import serializers
from meals.models import Meal, Step


# Step Serializer
class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Step
        fields = '__all__'

# Meal Serializer
class MealSerializer(serializers.ModelSerializer):
    #steps  = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    steps = StepSerializer(many=True, read_only=True)
    class Meta:
        model = Meal
        fields = ['id', 'name', 'description', 'preparation_time', 'steps']

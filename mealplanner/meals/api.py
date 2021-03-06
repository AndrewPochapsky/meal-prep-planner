from meals.models import Meal, Step
from rest_framework import viewsets, permissions, status
from .serializers import MealSerializer, StepSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
import json

# Meal viewset
class MealViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = MealSerializer

    def get_queryset(self):
        return self.request.user.meals.all()

    #Override this in order to create a blank step by default
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        meal = Meal.objects.get(pk=serializer.data["id"])
        step = Step.objects.create(title="", description="", step_number=1, meal=meal, owner=request.user)
        step.save()

        meal = Meal.objects.get(pk=serializer.data["id"])
        headers = self.get_success_headers(serializer.data)
        return Response(MealSerializer(meal).data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class StepViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = StepSerializer

    def get_queryset(self):
        return self.request.user.steps.all()

    @action(detail=False, methods = ['post'])
    def offset_steps(self, request):
        request_body = json.loads(request.body)
        increment = request_body['increment']
        ids_to_update = request_body['steps']
        response_body = []
        for step_id in ids_to_update:
            step = Step.objects.get(pk=step_id)
            if(increment):
                step.step_number += 1
            else:
                step.step_number -= 1
            step.save()
            response_body.append(StepSerializer(step).data)
        return Response(response_body, status=status.HTTP_200_OK)


    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

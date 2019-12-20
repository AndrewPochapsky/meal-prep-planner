from rest_framework import routers
from .api import MealViewSet

router = routers.DefaultRouter()
router.register('api/meals', MealViewSet, 'meals')
#router.register('api/steps', StepViewSet, 'steps')
urlpatterns = router.urls



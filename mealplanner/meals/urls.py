from rest_framework import routers
from .api import MealViewSet

router = routers.DefaultRouter()
router.register('api/meals', MealViewSet, 'meals')
urlpatterns = router.urls



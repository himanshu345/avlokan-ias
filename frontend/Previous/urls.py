# myapp/urls.py

from django.urls import path
from .views import user_login, register  # Import the views

urlpatterns = [
    path('login/', user_login, name='login'),  # URL for the login view
    path('register/', register, name='register'),  # URL for the registration view
]
from . import views
urlpatterns = [
    path('submit-form', views.submit_form, name='submit_form'),
]

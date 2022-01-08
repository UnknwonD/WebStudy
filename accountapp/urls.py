from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path
from accountapp.views import hello_world, AccountCreateView

app_name = "accountapp"

urlpatterns = [
    #Function View
    path('hello_world/', hello_world, name='hello_world'),

    #Class View Provided by django
    path('login/', LoginView.as_view(template_name='accountapp/login.html'), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    #Class View -> as_view
    path('create/', AccountCreateView.as_view(), name='create'),
]

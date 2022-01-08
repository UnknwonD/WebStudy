from django.urls import path
from accountapp.views import hello_world, AccountCreateView

app_name = "accountapp"

urlpatterns = [
    #Function View
    path('hello_world/', hello_world, name='hello_world'),
    #Class View -> as_view
    path('create/', AccountCreateView.as_view(), name='create'),
]

from django.shortcuts import render

# Create your views here.

# python manage.py startapp accountapp
# python manage.py runserver

def hello_world(request):
    return render(request, 'base.html')
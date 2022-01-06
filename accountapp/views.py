from django.shortcuts import render

# Create your views here.

# python manage.py startapp accountapp
# python manage.py runserver

def hello_world(request):

    if request.method == "POST":
        return render(request, 'accountapp/index.html', context={'text' : 'POST METHOD!'})
    else:
        return render(request, 'accountapp/index.html', context={'text': 'GET METHOD!'})